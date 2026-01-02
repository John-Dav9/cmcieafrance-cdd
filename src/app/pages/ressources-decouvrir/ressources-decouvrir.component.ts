import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ressources-decouvrir',
  templateUrl: './ressources-decouvrir.component.html',
  styleUrls: ['./ressources-decouvrir.component.css'],
})
export class RessourcesDecouvrirComponent implements AfterViewInit, OnDestroy {

  ready = false;

  currentIndex = 0;
  maxIndex = 0;

  isAnimating = false;

  private resizeTimer: any;
  private unlockTimer: any;

  // ✅ IMPORTANT: pas de "/" au début (safe avec base href / routes)
  private pages: string[] = [
    'assets/flipbook/page-01.png',
    'assets/flipbook/page-02.png',
    'assets/flipbook/page-03.png',
    'assets/flipbook/page-04.png',
    'assets/flipbook/page-05.png',
    'assets/flipbook/page-06.png',
  ];

  slides: string[][] = [];

  trackByIndex = (i: number) => i;
  trackBySrc = (_: number, src: string) => src;

  async ngAfterViewInit(): Promise<void> {
    await this.preloadImages(this.pages);

    this.buildSlides();
    this.ready = true;

    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    if (this.unlockTimer) clearTimeout(this.unlockTimer);
  }

  private onResize = () => {
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => this.buildSlides(), 120);
  };

  private buildSlides() {
    const isMobile = window.innerWidth <= 900;
    const newSlides: string[][] = [];

    if (isMobile) {
      for (const p of this.pages) newSlides.push([p]); // 1 page/slide
    } else {
      for (let i = 0; i < this.pages.length; i += 2) {
        newSlides.push([this.pages[i], this.pages[i + 1]].filter(Boolean) as string[]);
      }
    }

    this.slides = newSlides;
    this.maxIndex = this.slides.length - 1;

    // clamp index
    this.currentIndex = Math.min(this.currentIndex, this.maxIndex);

    // reset animation lock
    this.isAnimating = false;
    this.clearUnlockTimer();
  }

  private preloadImages(urls: string[]) {
    return Promise.all(
      urls.map(
        (url) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = url;
          })
      )
    );
  }

  onImgError(e: Event) {
    const el = e.target as HTMLImageElement;
    el.src = 'assets/flipbook/fallback.png';
  }

  // ===== Navigation =====
  next() { this.moveTo(this.currentIndex + 1); }
  prev() { this.moveTo(this.currentIndex - 1); }
  goTo(i: number) { this.moveTo(i); }

  private moveTo(target: number) {
    if (this.isAnimating) return;
    if (target < 0 || target > this.maxIndex) return;
    if (target === this.currentIndex) return;

    this.isAnimating = true;
    this.currentIndex = target;

    // ✅ fallback si transitionend ne fire pas
    this.clearUnlockTimer();
    this.unlockTimer = setTimeout(() => {
      this.isAnimating = false;
      this.unlockTimer = null;
    }, 600); // > 450ms (durée CSS)
  }

  onTransitionEnd() {
    // quand la transition se termine, on libère
    this.isAnimating = false;
    this.clearUnlockTimer();
  }

  private clearUnlockTimer() {
    if (this.unlockTimer) {
      clearTimeout(this.unlockTimer);
      this.unlockTimer = null;
    }
  }
}

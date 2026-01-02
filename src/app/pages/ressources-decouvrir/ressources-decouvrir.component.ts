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

  private unlockTimer: any;

  // ✅ stable pour mobile
  private mediaQuery = window.matchMedia('(max-width: 900px)');
  private isMobile = this.mediaQuery.matches;

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

    // build initial
    this.buildSlides(this.isMobile);
    this.ready = true;

    // ✅ on écoute UNIQUEMENT le vrai passage mobile/desktop
    this.mediaQuery.addEventListener('change', this.onMediaChange);
  }

  ngOnDestroy(): void {
    this.mediaQuery.removeEventListener('change', this.onMediaChange);
    if (this.unlockTimer) clearTimeout(this.unlockTimer);
  }

  private onMediaChange = (e: MediaQueryListEvent) => {
    const nextIsMobile = e.matches;
    if (nextIsMobile === this.isMobile) return;

    this.isMobile = nextIsMobile;

    // ✅ reset index pour éviter le “saut” et les pages manquantes
    this.currentIndex = 0;
    this.isAnimating = false;
    this.clearUnlockTimer();

    this.buildSlides(this.isMobile);
  };

  private buildSlides(isMobile: boolean) {
    const newSlides: string[][] = [];

    if (isMobile) {
      // ✅ 1 page = 1 slide
      for (const p of this.pages) newSlides.push([p]);
    } else {
      // ✅ 2 pages = 1 slide
      for (let i = 0; i < this.pages.length; i += 2) {
        newSlides.push([this.pages[i], this.pages[i + 1]].filter(Boolean) as string[]);
      }
    }

    this.slides = newSlides;
    this.maxIndex = this.slides.length - 1;

    // clamp (au cas où)
    this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
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

    // fallback si transitionend ne fire pas
    this.clearUnlockTimer();
    this.unlockTimer = setTimeout(() => {
      this.isAnimating = false;
      this.unlockTimer = null;
    }, 600);
  }

  onTransitionEnd() {
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

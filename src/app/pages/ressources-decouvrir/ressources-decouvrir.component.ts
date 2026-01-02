import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ressources-decouvrir',
  templateUrl: './ressources-decouvrir.component.html',
  styleUrls: ['./ressources-decouvrir.component.css'],
})
export class RessourcesDecouvrirComponent implements AfterViewInit {

  ready = false;

  currentIndex = 0;
  maxIndex = 0;

  isAnimating = false;
  private unlockTimer: any = null;

  trackByIndex = (i: number) => i;

  // ✅ IMPORTANT: pas de / au début (sinon casse en prod si baseHref != "/")
  private pages: string[] = [
    'assets/flipbook/page-01.png',
    'assets/flipbook/page-02.png',
    'assets/flipbook/page-03.png',
    'assets/flipbook/page-04.png',
    'assets/flipbook/page-05.png',
    'assets/flipbook/page-06.png',
  ];

  slidePairs: string[][] = [];

  async ngAfterViewInit(): Promise<void> {
    // 1) Paires (1-2, 3-4, 5-6)
    this.slidePairs = [];
    for (let i = 0; i < this.pages.length; i += 2) {
      this.slidePairs.push([this.pages[i], this.pages[i + 1]]);
    }
    this.maxIndex = this.slidePairs.length - 1;

    // 2) Preload
    await this.preloadImages(this.pages);

    // 3) Ready
    this.ready = true;
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
    // ✅ pareil: pas de / au début
    el.src = 'assets/flipbook/fallback.png';
  }

  // ==== NAV ====

  next() {
    this.moveTo(this.currentIndex + 1);
  }

  prev() {
    this.moveTo(this.currentIndex - 1);
  }

  goTo(i: number) {
    this.moveTo(i);
  }

  private moveTo(target: number) {
    if (this.isAnimating) return;
    if (target < 0 || target > this.maxIndex) return;
    if (target === this.currentIndex) return;

    this.isAnimating = true;
    this.currentIndex = target;

    // ✅ Fallback: on déverrouille même si transitionend ne se déclenche pas
    this.clearUnlockTimer();
    this.unlockTimer = setTimeout(() => {
      this.isAnimating = false;
      this.unlockTimer = null;
    }, 650); // un peu > 450ms (durée CSS)
  }

  // IMPORTANT: reçoit $event depuis le HTML
  onTransitionEnd(event: TransitionEvent) {
    // ✅ on veut uniquement la fin de transition du transform sur .track
    if (!event) return;
    if (event.propertyName !== 'transform') return;

    const target = event.target as HTMLElement;
    if (!target || !target.classList.contains('track')) return;

    this.clearUnlockTimer();
    this.isAnimating = false;
  }

  private clearUnlockTimer() {
    if (this.unlockTimer) {
      clearTimeout(this.unlockTimer);
      this.unlockTimer = null;
    }
  }
}

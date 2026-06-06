import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-floating-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-window.component.html',
  styleUrls: ['./floating-window.component.scss'],
})
export class FloatingWindowComponent implements OnInit {
  @Input() title = '';
  @Input() quality: 'high' | 'medium' | 'low' | 'critical' = 'high';
  @Input() set jitsiApi(api: any) {
    this._jitsiApi = api;
    if (api) this.syncStateFromApi();
  }
  @Output() expand = new EventEmitter<void>();
  @Output() leave  = new EventEmitter<void>();

  posX = 20;
  posY = 20;
  dragging = false;
  private startX = 0;
  private startY = 0;
  private startPosX = 0;
  private startPosY = 0;
  micOn = true;
  camOn = true;

  _jitsiApi: any = null;

  ngOnInit() {
    this.posX = window.innerWidth - 220;
    this.posY = window.innerHeight - 160;
  }

  onMouseDown(e: MouseEvent) {
    this.dragging = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.startPosX = this.posX;
    this.startPosY = this.posY;
    e.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.dragging) return;
    this.posX = Math.max(0, Math.min(window.innerWidth - 200, this.startPosX + (e.clientX - this.startX)));
    this.posY = Math.max(0, Math.min(window.innerHeight - 120, this.startPosY + (e.clientY - this.startY)));
  }

  @HostListener('document:mouseup')
  onMouseUp() { this.dragging = false; }

  onTouchStart(e: TouchEvent) {
    const t = e.touches[0];
    this.dragging = true;
    this.startX = t.clientX;
    this.startY = t.clientY;
    this.startPosX = this.posX;
    this.startPosY = this.posY;
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(e: TouchEvent) {
    if (!this.dragging) return;
    const t = e.touches[0];
    this.posX = Math.max(0, Math.min(window.innerWidth - 200, this.startPosX + (t.clientX - this.startX)));
    this.posY = Math.max(0, Math.min(window.innerHeight - 120, this.startPosY + (t.clientY - this.startY)));
  }

  @HostListener('document:touchend')
  onTouchEnd() { this.dragging = false; }

  clickToggleMic() {
    this.micOn = !this.micOn;
    this._jitsiApi?.executeCommand('toggleAudio');
  }

  clickToggleCam() {
    this.camOn = !this.camOn;
    this._jitsiApi?.executeCommand('toggleVideo');
  }

  get qualityDotClass(): string {
    return `quality-dot quality-dot--${this.quality}`;
  }

  private syncStateFromApi() {
    try {
      const status = this._jitsiApi?.getAudioStatus?.();
      if (status !== undefined) this.micOn = !status.muted;
      const vstatus = this._jitsiApi?.getVideoStatus?.();
      if (vstatus !== undefined) this.camOn = !vstatus.muted;
    } catch { /* pas de données disponibles avant join */ }
  }
}

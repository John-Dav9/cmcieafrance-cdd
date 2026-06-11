import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-floating-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-window.component.html',
  styleUrls: ['./floating-window.component.scss'],
})
export class FloatingWindowComponent {
  @Input() title = '';
  @Input() quality: 'high' | 'medium' | 'low' | 'critical' = 'high';
  @Input() set jitsiApi(api: any) {
    this._jitsiApi = api;
    if (api) this.syncStateFromApi();
  }
  @Output() expand = new EventEmitter<void>();
  @Output() leave  = new EventEmitter<void>();

  micOn = true;
  camOn = true;

  _jitsiApi: any = null;

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

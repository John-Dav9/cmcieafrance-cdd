import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ConnectionQuality } from '../../../core/services/network-quality.service';

@Component({
  selector: 'app-network-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="network-indicator" [attr.data-quality]="quality" role="status">
      <span class="network-indicator__dot"></span>
      <span>{{ label }}</span>
    </div>
  `,
  styles: [`
    .network-indicator {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      min-height: 32px;
      padding: 0 12px;
      border-radius: 999px;
      background: rgba(255,255,255,.08);
      color: #e5e7eb;
      font-size: 13px;
      white-space: nowrap;
    }
    .network-indicator__dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 0 4px rgba(34,197,94,.12);
    }
    [data-quality="medium"] .network-indicator__dot { background: #eab308; box-shadow: 0 0 0 4px rgba(234,179,8,.12); }
    [data-quality="low"] .network-indicator__dot { background: #f97316; box-shadow: 0 0 0 4px rgba(249,115,22,.12); }
    [data-quality="critical"] .network-indicator__dot { background: #ef4444; box-shadow: 0 0 0 4px rgba(239,68,68,.12); }
    @media (max-width: 680px) {
      .network-indicator span:last-child { display: none; }
      .network-indicator { padding: 0 11px; }
    }
  `],
})
export class NetworkIndicatorComponent {
  @Input() quality: ConnectionQuality = 'high';

  get label() {
    return {
      high: 'Connexion excellente',
      medium: 'Connexion correcte',
      low: 'Connexion faible',
      critical: 'Pas de connexion',
    }[this.quality];
  }
}

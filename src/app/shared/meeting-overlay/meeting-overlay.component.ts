import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MeetingService } from '../../core/services/meeting.service';

@Component({
  selector: 'app-meeting-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting-overlay.component.html',
  styleUrls: ['./meeting-overlay.component.scss'],
})
export class MeetingOverlayComponent implements OnInit, OnDestroy {
  @ViewChild('jitsiHost', { static: true }) jitsiHost!: ElementRef<HTMLDivElement>;

  isActive     = false;
  isFloating   = false;
  isConnecting = true;
  title        = '';
  timer        = '00:00';
  quality      = 'high';

  private subs: Subscription[] = [];

  constructor(public meeting: MeetingService, private zone: NgZone, private router: Router) {}

  ngOnInit() {
    this.subs.push(
      this.meeting.isActive$.subscribe(v   => this.isActive     = v),
      this.meeting.isFloating$.subscribe(v => this.isFloating   = v),
      this.meeting.isConnecting$.subscribe(v => this.isConnecting = v),
      this.meeting.title$.subscribe(v      => this.title        = v),
      this.meeting.timer$.subscribe(v      => this.timer        = v),
      this.meeting.quality$.subscribe(v    => this.quality      = v),
    );
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  // Expose le container DOM au ReunionRoomComponent via MeetingService
  getContainer(): HTMLElement {
    return this.jitsiHost.nativeElement;
  }

  expand() {
    this.meeting.setFloating(false);
    this.router.navigate(['/reunions']);
  }

  toggleMic()  { this.meeting.jitsiApi?.executeCommand('toggleAudio'); }
  toggleCam()  { this.meeting.jitsiApi?.executeCommand('toggleVideo'); }
  leave()      { this.meeting.hangup(); }

  get qualityLabel(): string {
    const map: Record<string, string> = {
      high: 'Excellente', medium: 'Correcte',
      low: 'Faible', critical: 'Déconnecté',
    };
    return map[this.quality] ?? '';
  }
}

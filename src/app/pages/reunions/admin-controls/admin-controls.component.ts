import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReunionsService } from '../../../core/services/reunions.service';

@Component({
  selector: 'app-admin-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.scss'],
})
export class AdminControlsComponent implements OnInit {
  @Input() meetingId = '';
  @Input() jitsiApi: any = null;
  @Output() close = new EventEmitter<void>();

  participants: any[] = [];
  recording = false;

  constructor(private reunionsService: ReunionsService) {}

  ngOnInit() {
    this.loadParticipants();
  }

  loadParticipants() {
    this.reunionsService.getParticipants(this.meetingId).subscribe({
      next: (p) => this.participants = p,
    });
  }

  muteParticipant(participantId: string) {
    this.jitsiApi?.executeCommand('muteParticipant', participantId);
  }

  kickParticipant(participantId: string) {
    this.jitsiApi?.executeCommand('kickParticipant', participantId);
  }

  toggleRecording() {
    if (this.recording) {
      this.jitsiApi?.executeCommand('stopRecording', 'file');
    } else {
      this.jitsiApi?.executeCommand('startRecording', { mode: 'file' });
    }
    this.recording = !this.recording;
  }

  endMeeting() {
    if (!confirm('Terminer la réunion pour tous les participants ?')) return;
    this.reunionsService.end(this.meetingId).subscribe({
      next: () => this.jitsiApi?.executeCommand('hangup'),
    });
  }
}

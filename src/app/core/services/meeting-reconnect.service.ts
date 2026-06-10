import { Injectable } from '@angular/core';
import { firstValueFrom, interval, Subscription } from 'rxjs';
import { ReunionsService } from './reunions.service';

@Injectable({ providedIn: 'root' })
export class MeetingReconnectService {
  private heartbeat: Subscription | null = null;
  private meetingId: string | null = null;
  private participantId: string | null = null;

  constructor(private reunions: ReunionsService) {}

  start(meetingId: string, participantId: string, reconnectToken: string) {
    this.stop(false);
    this.meetingId = meetingId;
    this.participantId = participantId;
    sessionStorage.setItem(this.storageKey(meetingId), reconnectToken);
    this.sendHeartbeat();
    this.heartbeat = interval(15000).subscribe(() => this.sendHeartbeat());
  }

  async reconnect(meetingId: string, reconnectToken?: string) {
    const token = reconnectToken ?? sessionStorage.getItem(this.storageKey(meetingId));
    if (!token) return false;

    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt > 0) await this.wait(5000);
      try {
        const result = await firstValueFrom(this.reunions.reconnect(meetingId, token));
        if (result?.restored) {
          const participantId = this.participantId
            ?? sessionStorage.getItem(this.participantStorageKey(meetingId));
          if (participantId) this.start(meetingId, participantId, token);
          return true;
        }
      } catch {
        // The next attempt is intentionally delayed.
      }
    }
    return false;
  }

  stop(clearToken = true) {
    this.heartbeat?.unsubscribe();
    this.heartbeat = null;
    if (clearToken && this.meetingId) {
      sessionStorage.removeItem(this.storageKey(this.meetingId));
      sessionStorage.removeItem(this.participantStorageKey(this.meetingId));
    }
    this.meetingId = null;
    this.participantId = null;
  }

  private sendHeartbeat() {
    if (!this.meetingId || !this.participantId) return;
    sessionStorage.setItem(this.participantStorageKey(this.meetingId), this.participantId);
    this.reunions.heartbeat(this.meetingId, this.participantId).subscribe({ error: () => undefined });
  }

  private storageKey(meetingId: string) {
    return `cmciea_meeting_reconnect_${meetingId}`;
  }

  private participantStorageKey(meetingId: string) {
    return `cmciea_meeting_participant_${meetingId}`;
  }

  private wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Meeting {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  isPublic: boolean;
  isRecurring: boolean;
  lobbyEnabled: boolean;
  recurrenceRule?: string;
  jitsiRoomId: string;
  status: 'scheduled' | 'live' | 'ended' | 'cancelled';
  participantCount: number;
  createdAt: string;
}

export interface JoinResult {
  jitsiToken: string;
  jitsiUrl: string;
  roomId: string;
  isModerator: boolean;
  displayName: string;
  email: string;
  role: string;
  reconnectToken: string;
  participantId: string;
  dialIn?: { number: string; pin: string | null } | null;
  meeting: { id: string; title: string; status: string };
}

export interface WaitingRoomResult {
  waitingRoom: true;
  participantId: string;
  meeting: { id: string; title: string; status: string };
}

export interface RejectedAdmissionResult {
  waitingRoom: false;
  rejected: true;
}

export type JoinResponse = JoinResult | WaitingRoomResult | RejectedAdmissionResult;

@Injectable({ providedIn: 'root' })
export class ReunionsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${environment.apiBase}/reunions`);
  }

  getAllAdmin(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${environment.apiBase}/reunions/admin/all`);
  }

  getCurrent(): Observable<Meeting | null> {
    return this.http.get<Meeting | null>(`${environment.apiBase}/reunions/current`);
  }

  getUpcoming(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${environment.apiBase}/reunions/upcoming`);
  }

  getCalendar(from: Date, to: Date): Observable<Meeting[]> {
    const params = new URLSearchParams({
      from: from.toISOString(),
      to: to.toISOString(),
    });
    return this.http.get<Meeting[]>(`${environment.apiBase}/reunions/calendar?${params}`);
  }

  getOne(id: string): Observable<Meeting> {
    return this.http.get<Meeting>(`${environment.apiBase}/reunions/${id}`);
  }

  create(data: Partial<Meeting>): Observable<Meeting> {
    return this.http.post<Meeting>(`${environment.apiBase}/reunions`, data);
  }

  update(id: string, data: Partial<Meeting>): Observable<Meeting> {
    return this.http.put<Meeting>(`${environment.apiBase}/reunions/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.apiBase}/reunions/${id}`);
  }

  join(id: string): Observable<JoinResponse> {
    return this.http.post<JoinResponse>(`${environment.apiBase}/reunions/${id}/join`, {});
  }

  getAdmissionStatus(id: string, participantId: string): Observable<JoinResponse> {
    return this.http.post<JoinResponse>(
      `${environment.apiBase}/reunions/${id}/admission/status`,
      { participantId },
    );
  }

  end(id: string): Observable<any> {
    return this.http.post(`${environment.apiBase}/reunions/${id}/end`, {});
  }

  startRecording(id: string): Observable<{ status: string; message: string }> {
    return this.http.post<{ status: string; message: string }>(
      `${environment.apiBase}/reunions/${id}/record/start`,
      {},
    );
  }

  stopRecording(id: string): Observable<{ status: string; message: string }> {
    return this.http.post<{ status: string; message: string }>(
      `${environment.apiBase}/reunions/${id}/record/stop`,
      {},
    );
  }

  getRecordingStatus(id: string): Observable<{ status: string; error?: string }> {
    return this.http.get<{ status: string; error?: string }>(
      `${environment.apiBase}/reunions/${id}/record/status`,
    );
  }

  heartbeat(id: string, participantId: string): Observable<any> {
    return this.http.post(`${environment.apiBase}/reunions/${id}/heartbeat`, { participantId });
  }

  registerParticipantSession(
    id: string,
    participantId: string,
    jitsiParticipantId: string,
  ): Observable<{ registered: boolean }> {
    return this.http.post<{ registered: boolean }>(
      `${environment.apiBase}/reunions/${id}/participant-session`,
      { participantId, jitsiParticipantId },
    );
  }

  reconnect(id: string, token: string): Observable<any> {
    return this.http.post(`${environment.apiBase}/reunions/${id}/reconnect`, { token });
  }

  getParticipants(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/reunions/${id}/participants`);
  }

  getWaitingParticipants(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/reunions/${id}/waiting-participants`);
  }

  admitParticipant(id: string, participantId: string): Observable<{ admitted: boolean }> {
    return this.http.post<{ admitted: boolean }>(
      `${environment.apiBase}/reunions/${id}/admit/${participantId}`,
      {},
    );
  }

  rejectParticipant(id: string, participantId: string): Observable<{ rejected: boolean }> {
    return this.http.post<{ rejected: boolean }>(
      `${environment.apiBase}/reunions/${id}/reject/${participantId}`,
      {},
    );
  }

  sendReminders(id: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.apiBase}/reunions/${id}/send-reminders`, {});
  }

  muteParticipant(id: string, participantJitsiId: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.apiBase}/reunions/${id}/mute/${participantJitsiId}`, {});
  }

  kickParticipant(id: string, participantId: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.apiBase}/reunions/${id}/kick/${participantId}`, {});
  }

  grantModerator(id: string, memberId: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.apiBase}/reunions/${id}/grant-moderator/${memberId}`, {});
  }

  createModeratorInvite(id: string, memberId: string): Observable<any> {
    return this.http.post(`${environment.apiBase}/reunions/${id}/invitations`, { memberId });
  }

  getModeratorInvites(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/reunions/${id}/invitations`);
  }

  revokeModeratorInvite(id: string, inviteId: string): Observable<{ revoked: boolean }> {
    return this.http.delete<{ revoked: boolean }>(
      `${environment.apiBase}/reunions/${id}/invitations/${inviteId}`,
    );
  }
}

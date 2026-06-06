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
  reconnectToken: string;
  meeting: { id: string; title: string; status: string };
}

@Injectable({ providedIn: 'root' })
export class ReunionsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${environment.apiBase}/reunions`);
  }

  getCurrent(): Observable<Meeting | null> {
    return this.http.get<Meeting | null>(`${environment.apiBase}/reunions/current`);
  }

  getUpcoming(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${environment.apiBase}/reunions/upcoming`);
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

  join(id: string): Observable<JoinResult> {
    return this.http.post<JoinResult>(`${environment.apiBase}/reunions/${id}/join`, {});
  }

  end(id: string): Observable<any> {
    return this.http.post(`${environment.apiBase}/reunions/${id}/end`, {});
  }

  heartbeat(id: string): Observable<any> {
    return this.http.post(`${environment.apiBase}/reunions/${id}/heartbeat`, {});
  }

  reconnect(id: string, token: string): Observable<any> {
    return this.http.post(`${environment.apiBase}/reunions/${id}/reconnect`, { token });
  }

  getParticipants(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/reunions/${id}/participants`);
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
}

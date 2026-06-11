import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface MeetingBackground {
  id: string;
  slug: string;
  label: string;
  imageUrl?: string | null;
  gradient?: string | null;
  textColor: string;
  overlayColor: string;
  sortOrder: number;
  isActive: boolean;
}

@Injectable({ providedIn: 'root' })
export class MeetingBackgroundsService {
  constructor(private readonly http: HttpClient) {}

  list(): Observable<MeetingBackground[]> {
    return this.http.get<MeetingBackground[]>(`${environment.apiBase}/meeting-backgrounds`);
  }

  listAdmin(): Observable<MeetingBackground[]> {
    return this.http.get<MeetingBackground[]>(`${environment.apiBase}/meeting-backgrounds/admin/all`);
  }

  create(label: string, file?: File, gradient?: string) {
    const data = new FormData();
    data.append('label', label);
    if (file) data.append('file', file);
    if (gradient) data.append('gradient', gradient);
    return this.http.post<MeetingBackground>(`${environment.apiBase}/meeting-backgrounds`, data);
  }

  update(id: string, data: Partial<MeetingBackground>) {
    return this.http.patch<MeetingBackground>(
      `${environment.apiBase}/meeting-backgrounds/${id}`,
      data,
    );
  }

  remove(id: string) {
    return this.http.delete(`${environment.apiBase}/meeting-backgrounds/${id}`);
  }
}

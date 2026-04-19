import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_BASE = environment.apiBase;

export interface Message {
  id: number;
  title: string;
  speaker: string;
  date: string;
  videoId: string;
}

@Injectable({ providedIn: 'root' })
export class MessagesService {
  constructor(private http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${API_BASE}/messages`);
  }
}

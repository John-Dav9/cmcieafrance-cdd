import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_BASE = 'http://localhost:3000/api';

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
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ParticipantPayload {
  fullName: string;
  email: string;
  phone?: string;
  city?: string;
}

@Injectable({ providedIn: 'root' })
export class ParticipantsService {
  constructor(private http: HttpClient) {}

  async register(marathonId: string, payload: ParticipantPayload): Promise<void> {
    await firstValueFrom(
      this.http.post(`${environment.apiBase}/marathon/${marathonId}/inscrire`, payload),
    );
  }
}

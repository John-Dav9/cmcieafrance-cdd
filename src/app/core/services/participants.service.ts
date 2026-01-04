import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, serverTimestamp } from '@angular/fire/firestore';

export interface ParticipantPayload {
  fullName: string;
  email: string;
  phone?: string;
  city?: string;
}

@Injectable({ providedIn: 'root' })
export class ParticipantsService {
  constructor(private firestore: Firestore) {}

  async register(payload: ParticipantPayload): Promise<void> {
    const ref = collection(this.firestore, 'participants');
    await addDoc(ref, {
      ...payload,
      createdAt: serverTimestamp(),
      source: 'marathon-biblique'
    });
  }
}

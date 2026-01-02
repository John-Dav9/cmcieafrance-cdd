import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_BASE = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class PagesService {
  constructor(private http: HttpClient) {}

  getHome(): Observable<any> {
    return this.http.get(`${API_BASE}/pages/home`);
  }

  getAbout(): Observable<any> {
    return this.http.get(`${API_BASE}/pages/about`);
  }

  getChurchLife(): Observable<any> {
    return this.http.get(`${API_BASE}/pages/church-life`);
  }
}
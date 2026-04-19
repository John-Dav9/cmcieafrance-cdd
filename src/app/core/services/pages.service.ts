import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_BASE = environment.apiBase;

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

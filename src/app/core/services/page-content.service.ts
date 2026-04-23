import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PageContentService {
  private base = environment.apiBase;

  // Contenu en mémoire pour la prévisualisation live admin
  private previewContent: Record<string, any> = {};
  private previewMode = false;

  constructor(private http: HttpClient) {
    window.addEventListener('message', (e) => {
      if (e.data?.type === 'CONTENT_PREVIEW') {
        this.previewContent[e.data.pageId] = e.data.content;
        this.previewMode = true;
      }
      if (e.data?.type === 'CONTENT_RESET') {
        this.previewContent = {};
        this.previewMode = false;
      }
    });
  }

  getPage(pageId: string): Observable<any> {
    if (this.previewMode && this.previewContent[pageId]) {
      return of(this.previewContent[pageId]);
    }
    return this.http
      .get<any>(`${this.base}/settings/pages/${pageId}`)
      .pipe(catchError(() => of(null)));
  }
}

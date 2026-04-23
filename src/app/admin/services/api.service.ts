import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { from, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminAuthService } from './admin-auth.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private authService = inject(AdminAuthService);
  private base = environment.apiBase;

  private withAuth(fn: (headers: HttpHeaders) => any) {
    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        return fn(headers);
      }),
    );
  }

  // Inscriptions
  getInscriptions(type?: string) {
    const params = type ? `?type=${type}` : '';
    return this.withAuth((h) => this.http.get(`${this.base}/inscriptions${params}`, { headers: h }));
  }

  deleteInscription(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/inscriptions/${id}`, { headers: h }));
  }

  // Annonces
  getAnnoncesAdmin() {
    return this.withAuth((h) => this.http.get(`${this.base}/annonces/admin`, { headers: h }));
  }

  createAnnonce(data: any) {
    return this.withAuth((h) => this.http.post(`${this.base}/annonces`, data, { headers: h }));
  }

  updateAnnonce(id: string, data: any) {
    return this.withAuth((h) => this.http.patch(`${this.base}/annonces/${id}`, data, { headers: h }));
  }

  deleteAnnonce(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/annonces/${id}`, { headers: h }));
  }

  // Actualités
  getActualitesAdmin() {
    return this.withAuth((h) => this.http.get(`${this.base}/actualites/admin/all`, { headers: h }));
  }

  createActualite(data: any) {
    return this.withAuth((h) => this.http.post(`${this.base}/actualites`, data, { headers: h }));
  }

  updateActualite(id: string, data: any) {
    return this.withAuth((h) => this.http.patch(`${this.base}/actualites/${id}`, data, { headers: h }));
  }

  deleteActualite(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/actualites/${id}`, { headers: h }));
  }

  // Bibliothèque
  getLivres() {
    return this.http.get(`${this.base}/bibliotheque`);
  }

  uploadLivre(formData: FormData) {
    return this.withAuth((h) =>
      this.http.post(`${this.base}/bibliotheque`, formData, {
        headers: h,
        reportProgress: true,
        observe: 'events',
      }),
    );
  }

  deleteLivre(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/bibliotheque/${id}`, { headers: h }));
  }

  // Témoignages
  getTemoignagesAdmin(statut?: string) {
    const params = statut ? `?statut=${statut}` : '';
    return this.withAuth((h) => this.http.get(`${this.base}/temoignages/admin/all${params}`, { headers: h }));
  }

  modererTemoignage(id: string, statut: string) {
    return this.withAuth((h) =>
      this.http.patch(`${this.base}/temoignages/${id}/moderer`, { statut }, { headers: h }),
    );
  }

  deleteTemoignage(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/temoignages/${id}`, { headers: h }));
  }

  // Marathon (admin)
  getMarathonsAdmin() {
    return this.withAuth((h) => this.http.get(`${this.base}/marathon/admin/all`, { headers: h }));
  }

  creerMarathon(data: any) {
    return this.withAuth((h) => this.http.post(`${this.base}/marathon`, data, { headers: h }));
  }

  archiverMarathon(id: string) {
    return this.withAuth((h) => this.http.patch(`${this.base}/marathon/${id}/archiver`, {}, { headers: h }));
  }

  reactiverMarathon(id: string) {
    return this.withAuth((h) => this.http.patch(`${this.base}/marathon/${id}/reactiver`, {}, { headers: h }));
  }

  supprimerMarathon(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/marathon/${id}`, { headers: h }));
  }

  getInscritsMarathon(id: string) {
    return this.withAuth((h) => this.http.get(`${this.base}/marathon/${id}/inscrits`, { headers: h }));
  }

  envoyerAttestationsAnnuelles(annee: number) {
    return this.withAuth((h) => this.http.post(`${this.base}/marathon/attestations-annuelles`, { annee }, { headers: h }));
  }
}

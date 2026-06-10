import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AdminAuthService } from './admin-auth.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private authService = inject(AdminAuthService);
  private base = environment.apiBase;

  private withAuth(fn: (headers: HttpHeaders) => any) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${token ?? ''}` });
    return fn(headers);
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

  getOrphanedMarathons() {
    return this.withAuth((h) => this.http.get(`${this.base}/marathon/admin/orphaned`, { headers: h }));
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

  uploadMarathonFlyer(id: string, formData: FormData) {
    return this.withAuth((h) => this.http.post(`${this.base}/marathon/${id}/flyer`, formData, { headers: h }));
  }

  envoyerAttestationsAnnuelles(annee: number) {
    return this.withAuth((h) => this.http.post(`${this.base}/marathon/attestations-annuelles`, { annee }, { headers: h }));
  }

  // Prières
  getPrieres() {
    return this.withAuth((h) => this.http.get(`${this.base}/prieres`, { headers: h }));
  }

  updatePriereStatut(id: string, statut: string) {
    return this.withAuth((h) => this.http.patch(`${this.base}/prieres/${id}/statut`, { statut }, { headers: h }));
  }

  deletePriere(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/prieres/${id}`, { headers: h }));
  }

  // Replays
  getReplaysAdmin() {
    return this.withAuth((h) => this.http.get<any[]>(`${this.base}/replays/admin/all`, { headers: h }));
  }

  createReplay(data: any) {
    return this.withAuth((h) => this.http.post(`${this.base}/replays`, data, { headers: h }));
  }

  updateReplay(id: string, data: any) {
    return this.withAuth((h) => this.http.patch(`${this.base}/replays/${id}`, data, { headers: h }));
  }

  toggleReplayPublic(id: string) {
    return this.withAuth((h) => this.http.patch(`${this.base}/replays/${id}/toggle-public`, {}, { headers: h }));
  }

  deleteReplay(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/replays/${id}`, { headers: h }));
  }

  // Statistiques
  getStatsOverview() {
    return this.withAuth((h) => this.http.get<any>(`${this.base}/stats/overview`, { headers: h }));
  }

  // Membres
  getMembres() {
    return this.withAuth((h) => this.http.get<any[]>(`${this.base}/membres`, { headers: h }));
  }

  updateMembreRole(id: string, role: string) {
    return this.withAuth((h) => this.http.put(`${this.base}/membres/${id}/role`, { role }, { headers: h }));
  }

  desactiverMembre(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/membres/${id}`, { headers: h }));
  }

  mergeBases() {
    return this.withAuth((h) => this.http.post(`${this.base}/membres/merge`, {}, { headers: h }));
  }

  // Paramètres communauté
  getSettings() {
    return this.withAuth((h) => this.http.get<any>(`${this.base}/membres/settings`, { headers: h }));
  }

  updateSettings(isOpen: boolean) {
    return this.withAuth((h) => this.http.put(`${this.base}/membres/settings`, { isOpen }, { headers: h }));
  }

  // Registre de présence
  getAttendance(meetingId: string) {
    return this.withAuth((h) => this.http.get<any[]>(`${this.base}/reunions/${meetingId}/attendance`, { headers: h }));
  }

  // Messages
  getMessagesAdmin() {
    return this.withAuth((h) => this.http.get(`${this.base}/messages/admin/all`, { headers: h }));
  }

  createMessage(data: any) {
    return this.withAuth((h) => this.http.post(`${this.base}/messages`, data, { headers: h }));
  }

  updateMessage(id: string, data: any) {
    return this.withAuth((h) => this.http.patch(`${this.base}/messages/${id}`, data, { headers: h }));
  }

  deleteMessage(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/messages/${id}`, { headers: h }));
  }

  // Newsletter
  getNewsletterSubscribers() {
    return this.withAuth((h) => this.http.get(`${this.base}/newsletter/subscribers`, { headers: h }));
  }

  deleteNewsletterSubscriber(id: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/newsletter/subscribers/${id}`, { headers: h }));
  }

  // Email templates
  listEmailTemplates() {
    return this.withAuth((h) => this.http.get(`${this.base}/settings/email-templates`, { headers: h }));
  }

  getEmailTemplate(key: string) {
    return this.withAuth((h) => this.http.get(`${this.base}/settings/email-templates/${key}`, { headers: h }));
  }

  saveEmailTemplate(key: string, subject: string, body: string) {
    return this.withAuth((h) => this.http.patch(`${this.base}/settings/email-templates/${key}`, { subject, body }, { headers: h }));
  }

  resetEmailTemplate(key: string) {
    return this.withAuth((h) => this.http.delete(`${this.base}/settings/email-templates/${key}`, { headers: h }));
  }
}

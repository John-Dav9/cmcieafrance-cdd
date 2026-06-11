import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AdminAuthService } from './admin-auth.service';
import * as i0 from "@angular/core";
export class ApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.authService = inject(AdminAuthService);
        this.base = environment.apiBase;
    }
    withAuth(fn) {
        const token = this.authService.getToken();
        const headers = new HttpHeaders({ Authorization: `Bearer ${token !== null && token !== void 0 ? token : ''}` });
        return fn(headers);
    }
    // Inscriptions
    getInscriptions(type) {
        const params = type ? `?type=${type}` : '';
        return this.withAuth((h) => this.http.get(`${this.base}/inscriptions${params}`, { headers: h }));
    }
    deleteInscription(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/inscriptions/${id}`, { headers: h }));
    }
    // Annonces
    getAnnoncesAdmin() {
        return this.withAuth((h) => this.http.get(`${this.base}/annonces/admin`, { headers: h }));
    }
    createAnnonce(data) {
        return this.withAuth((h) => this.http.post(`${this.base}/annonces`, data, { headers: h }));
    }
    updateAnnonce(id, data) {
        return this.withAuth((h) => this.http.patch(`${this.base}/annonces/${id}`, data, { headers: h }));
    }
    deleteAnnonce(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/annonces/${id}`, { headers: h }));
    }
    // Actualités
    getActualitesAdmin() {
        return this.withAuth((h) => this.http.get(`${this.base}/actualites/admin/all`, { headers: h }));
    }
    createActualite(data) {
        return this.withAuth((h) => this.http.post(`${this.base}/actualites`, data, { headers: h }));
    }
    updateActualite(id, data) {
        return this.withAuth((h) => this.http.patch(`${this.base}/actualites/${id}`, data, { headers: h }));
    }
    deleteActualite(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/actualites/${id}`, { headers: h }));
    }
    // Bibliothèque
    getLivres() {
        return this.http.get(`${this.base}/bibliotheque`);
    }
    uploadLivre(formData) {
        return this.withAuth((h) => this.http.post(`${this.base}/bibliotheque`, formData, {
            headers: h,
            reportProgress: true,
            observe: 'events',
        }));
    }
    deleteLivre(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/bibliotheque/${id}`, { headers: h }));
    }
    // Témoignages
    getTemoignagesAdmin(statut) {
        const params = statut ? `?statut=${statut}` : '';
        return this.withAuth((h) => this.http.get(`${this.base}/temoignages/admin/all${params}`, { headers: h }));
    }
    modererTemoignage(id, statut) {
        return this.withAuth((h) => this.http.patch(`${this.base}/temoignages/${id}/moderer`, { statut }, { headers: h }));
    }
    deleteTemoignage(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/temoignages/${id}`, { headers: h }));
    }
    // Marathon (admin)
    getMarathonsAdmin() {
        return this.withAuth((h) => this.http.get(`${this.base}/marathon/admin/all`, { headers: h }));
    }
    getOrphanedMarathons() {
        return this.withAuth((h) => this.http.get(`${this.base}/marathon/admin/orphaned`, { headers: h }));
    }
    creerMarathon(data) {
        return this.withAuth((h) => this.http.post(`${this.base}/marathon`, data, { headers: h }));
    }
    archiverMarathon(id) {
        return this.withAuth((h) => this.http.patch(`${this.base}/marathon/${id}/archiver`, {}, { headers: h }));
    }
    reactiverMarathon(id) {
        return this.withAuth((h) => this.http.patch(`${this.base}/marathon/${id}/reactiver`, {}, { headers: h }));
    }
    supprimerMarathon(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/marathon/${id}`, { headers: h }));
    }
    getInscritsMarathon(id) {
        return this.withAuth((h) => this.http.get(`${this.base}/marathon/${id}/inscrits`, { headers: h }));
    }
    uploadMarathonFlyer(id, formData) {
        return this.withAuth((h) => this.http.post(`${this.base}/marathon/${id}/flyer`, formData, { headers: h }));
    }
    envoyerAttestationsAnnuelles(annee) {
        return this.withAuth((h) => this.http.post(`${this.base}/marathon/attestations-annuelles`, { annee }, { headers: h }));
    }
    // Prières
    getPrieres() {
        return this.withAuth((h) => this.http.get(`${this.base}/prieres`, { headers: h }));
    }
    updatePriereStatut(id, statut) {
        return this.withAuth((h) => this.http.patch(`${this.base}/prieres/${id}/statut`, { statut }, { headers: h }));
    }
    deletePriere(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/prieres/${id}`, { headers: h }));
    }
    // Replays
    getReplaysAdmin() {
        return this.withAuth((h) => this.http.get(`${this.base}/replays/admin/all`, { headers: h }));
    }
    createReplay(data) {
        return this.withAuth((h) => this.http.post(`${this.base}/replays`, data, { headers: h }));
    }
    updateReplay(id, data) {
        return this.withAuth((h) => this.http.patch(`${this.base}/replays/${id}`, data, { headers: h }));
    }
    toggleReplayPublic(id) {
        return this.withAuth((h) => this.http.patch(`${this.base}/replays/${id}/toggle-public`, {}, { headers: h }));
    }
    deleteReplay(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/replays/${id}`, { headers: h }));
    }
    summarizeReplay(id) {
        return this.withAuth((h) => this.http.post(`${this.base}/replays/${id}/summarize`, {}, { headers: h }));
    }
    // Cell-groups membres
    addMemberToGroup(groupId, memberId) {
        return this.withAuth((h) => this.http.post(`${this.base}/cell-groups/${groupId}/members/${memberId}`, {}, { headers: h }));
    }
    removeMemberFromGroup(groupId, memberId) {
        return this.withAuth((h) => this.http.delete(`${this.base}/cell-groups/${groupId}/members/${memberId}`, { headers: h }));
    }
    getCellGroupDetail(groupId) {
        return this.withAuth((h) => this.http.get(`${this.base}/cell-groups/${groupId}`, { headers: h }));
    }
    // Statistiques
    getStatsOverview() {
        return this.withAuth((h) => this.http.get(`${this.base}/stats/overview`, { headers: h }));
    }
    // Membres
    getMembres() {
        return this.withAuth((h) => this.http.get(`${this.base}/membres`, { headers: h }));
    }
    updateMembreRole(id, role) {
        return this.withAuth((h) => this.http.put(`${this.base}/membres/${id}/role`, { role }, { headers: h }));
    }
    desactiverMembre(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/membres/${id}`, { headers: h }));
    }
    mergeBases() {
        return this.withAuth((h) => this.http.post(`${this.base}/membres/merge`, {}, { headers: h }));
    }
    // Cantiques
    getCantiques(query = '') {
        return this.withAuth((h) => this.http.get(`${this.base}/cantiques?q=${encodeURIComponent(query)}`, { headers: h }));
    }
    createCantique(data) {
        return this.withAuth((h) => this.http.post(`${this.base}/cantiques`, data, { headers: h }));
    }
    updateCantique(id, data) {
        return this.withAuth((h) => this.http.put(`${this.base}/cantiques/${id}`, data, { headers: h }));
    }
    deleteCantique(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/cantiques/${id}`, { headers: h }));
    }
    // Paramètres communauté
    getSettings() {
        return this.withAuth((h) => this.http.get(`${this.base}/membres/settings`, { headers: h }));
    }
    updateSettings(isOpen) {
        return this.withAuth((h) => this.http.put(`${this.base}/membres/settings`, { isOpen }, { headers: h }));
    }
    // Registre de présence
    getAttendance(meetingId) {
        return this.withAuth((h) => this.http.get(`${this.base}/reunions/${meetingId}/attendance`, { headers: h }));
    }
    // Messages
    getMessagesAdmin() {
        return this.withAuth((h) => this.http.get(`${this.base}/messages/admin/all`, { headers: h }));
    }
    createMessage(data) {
        return this.withAuth((h) => this.http.post(`${this.base}/messages`, data, { headers: h }));
    }
    updateMessage(id, data) {
        return this.withAuth((h) => this.http.patch(`${this.base}/messages/${id}`, data, { headers: h }));
    }
    deleteMessage(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/messages/${id}`, { headers: h }));
    }
    // Newsletter
    getNewsletterSubscribers() {
        return this.withAuth((h) => this.http.get(`${this.base}/newsletter/subscribers`, { headers: h }));
    }
    deleteNewsletterSubscriber(id) {
        return this.withAuth((h) => this.http.delete(`${this.base}/newsletter/subscribers/${id}`, { headers: h }));
    }
    // Email templates
    listEmailTemplates() {
        return this.withAuth((h) => this.http.get(`${this.base}/settings/email-templates`, { headers: h }));
    }
    getEmailTemplate(key) {
        return this.withAuth((h) => this.http.get(`${this.base}/settings/email-templates/${key}`, { headers: h }));
    }
    saveEmailTemplate(key, subject, body) {
        return this.withAuth((h) => this.http.patch(`${this.base}/settings/email-templates/${key}`, { subject, body }, { headers: h }));
    }
    resetEmailTemplate(key) {
        return this.withAuth((h) => this.http.delete(`${this.base}/settings/email-templates/${key}`, { headers: h }));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(); };
ApiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=api.service.js.map
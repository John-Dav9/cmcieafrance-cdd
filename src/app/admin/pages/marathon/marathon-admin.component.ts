import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

interface BibleBookOption { id: string; nom: string; testament: 'AT' | 'NT'; }

const BIBLE_BOOKS: BibleBookOption[] = [
  { id:'GEN', nom:'Gen\u00e8se',                 testament:'AT' }, { id:'EXO', nom:'Exode',                    testament:'AT' },
  { id:'LEV', nom:'L\u00e9vitique',              testament:'AT' }, { id:'NOM', nom:'Nombres',                  testament:'AT' },
  { id:'DEU', nom:'Deut\u00e9ronome',            testament:'AT' }, { id:'JOS', nom:'Josu\u00e9',               testament:'AT' },
  { id:'JUG', nom:'Juges',                        testament:'AT' }, { id:'RUT', nom:'Ruth',                     testament:'AT' },
  { id:'1SA', nom:'1 Samuel',                     testament:'AT' }, { id:'2SA', nom:'2 Samuel',                 testament:'AT' },
  { id:'1RO', nom:'1 Rois',                       testament:'AT' }, { id:'2RO', nom:'2 Rois',                   testament:'AT' },
  { id:'1CH', nom:'1 Chroniques',                 testament:'AT' }, { id:'2CH', nom:'2 Chroniques',             testament:'AT' },
  { id:'ESD', nom:'Esdras',                       testament:'AT' }, { id:'NEH', nom:'N\u00e9h\u00e9mie',       testament:'AT' },
  { id:'EST', nom:'Esther',                       testament:'AT' }, { id:'JOB', nom:'Job',                      testament:'AT' },
  { id:'PSA', nom:'Psaumes',                      testament:'AT' }, { id:'PRO', nom:'Proverbes',                testament:'AT' },
  { id:'ECC', nom:'Eccl\u00e9siaste',            testament:'AT' }, { id:'CAN', nom:'Cantique',                 testament:'AT' },
  { id:'ESA', nom:'\u00c9sa\u00efe',             testament:'AT' }, { id:'JER', nom:'J\u00e9r\u00e9mie',       testament:'AT' },
  { id:'LAM', nom:'Lamentations',                 testament:'AT' }, { id:'EZE', nom:'\u00c9z\u00e9chiel',      testament:'AT' },
  { id:'DAN', nom:'Daniel',                       testament:'AT' }, { id:'OSE', nom:'Os\u00e9e',               testament:'AT' },
  { id:'JOE', nom:'Jo\u00ebl',                   testament:'AT' }, { id:'AMO', nom:'Amos',                     testament:'AT' },
  { id:'ABD', nom:'Abdias',                       testament:'AT' }, { id:'JON', nom:'Jonas',                    testament:'AT' },
  { id:'MIC', nom:'Mich\u00e9e',                 testament:'AT' }, { id:'NAH', nom:'Nahum',                    testament:'AT' },
  { id:'HAB', nom:'Habacuc',                      testament:'AT' }, { id:'SOF', nom:'Sophonie',                 testament:'AT' },
  { id:'AGG', nom:'Agg\u00e9e',                  testament:'AT' }, { id:'ZAC', nom:'Zacharie',                 testament:'AT' },
  { id:'MAL', nom:'Malachie',                     testament:'AT' },
  { id:'MAT', nom:'Matthieu',                     testament:'NT' }, { id:'MAR', nom:'Marc',                     testament:'NT' },
  { id:'LUC', nom:'Luc',                          testament:'NT' }, { id:'JEA', nom:'Jean',                     testament:'NT' },
  { id:'ACT', nom:'Actes',                        testament:'NT' }, { id:'ROM', nom:'Romains',                  testament:'NT' },
  { id:'1CO', nom:'1 Corinthiens',                testament:'NT' }, { id:'2CO', nom:'2 Corinthiens',            testament:'NT' },
  { id:'GAL', nom:'Galates',                      testament:'NT' }, { id:'EPH', nom:'\u00c9ph\u00e9siens',     testament:'NT' },
  { id:'PHP', nom:'Philippiens',                  testament:'NT' }, { id:'COL', nom:'Colossiens',               testament:'NT' },
  { id:'1TH', nom:'1 Thessaloniciens',            testament:'NT' }, { id:'2TH', nom:'2 Thessaloniciens',        testament:'NT' },
  { id:'1TI', nom:'1 Timoth\u00e9e',             testament:'NT' }, { id:'2TI', nom:'2 Timoth\u00e9e',          testament:'NT' },
  { id:'TIT', nom:'Tite',                         testament:'NT' }, { id:'PHM', nom:'Phil\u00e9mon',            testament:'NT' },
  { id:'HEB', nom:'H\u00e9breux',                testament:'NT' }, { id:'JAC', nom:'Jacques',                  testament:'NT' },
  { id:'1PI', nom:'1 Pierre',                     testament:'NT' }, { id:'2PI', nom:'2 Pierre',                 testament:'NT' },
  { id:'1JE', nom:'1 Jean',                       testament:'NT' }, { id:'2JE', nom:'2 Jean',                   testament:'NT' },
  { id:'3JE', nom:'3 Jean',                       testament:'NT' }, { id:'JUD', nom:'Jude',                     testament:'NT' },
  { id:'APO', nom:'Apocalypse',                   testament:'NT' },
];

const SCOPE_LABELS: Record<string, string> = {
  BIBLE_COMPLETE:    'Bible compl\u00e8te (66 livres)',
  ANCIEN_TESTAMENT:  'Ancien Testament (39 livres)',
  NOUVEAU_TESTAMENT: 'Nouveau Testament (27 livres)',
  LIVRES_CHOISIS:    'Livres sp\u00e9cifiques',
};

const STATUT_LABELS: Record<string, string> = {
  PLANIFIE: 'Planifi\u00e9',
  ACTIF:    'Actif',
  ARCHIVE:  'Archiv\u00e9',
};

@Component({
  selector: 'app-marathon-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marathon-admin.component.html',
  styleUrls: ['./marathon-admin.component.css'],
})
export class MarathonAdminComponent implements OnInit {
  private api = inject(ApiService);

  // ─── Données ───────────────────────────────────────────────────────────────
  marathons: any[] = [];
  orphanedMarathons: any[] = [];
  loading = true;
  firebaseError = '';

  // ─── Panneau inscrits ──────────────────────────────────────────────────────
  inscritsMarathonId: string | null = null;
  inscritsMarathonTitre = '';
  inscrits: any[] = [];
  loadingInscrits = false;

  // ─── Formulaire de création ────────────────────────────────────────────────
  showForm = false;
  saving = false;
  successMsg = '';
  errorMsg = '';
  flyerFile: File | null = null;
  uploadingFlyer = false;

  form = {
    titre: '',
    description: '',
    dateDebut: '',
    dateFin: '',
    scope: 'BIBLE_COMPLETE',
    livresChoisis: [] as string[],
  };

  // ─── Attestations annuelles ────────────────────────────────────────────────
  anneeAttestation = new Date().getFullYear();
  sendingAttestations = false;
  attestationMsg = '';

  // ─── Constantes template ──────────────────────────────────────────────────
  readonly atBooks  = BIBLE_BOOKS.filter(b => b.testament === 'AT');
  readonly ntBooks  = BIBLE_BOOKS.filter(b => b.testament === 'NT');
  readonly scopeLabels  = SCOPE_LABELS;
  readonly statutLabels = STATUT_LABELS;
  readonly scopeOptions = Object.keys(SCOPE_LABELS);

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.firebaseError = '';
    this.api.getMarathonsAdmin().subscribe({
      next: (data: any) => {
        this.marathons = data;
        this.loading = false;
        this.api.getOrphanedMarathons().subscribe({
          next: (orphaned: any) => { this.orphanedMarathons = orphaned; },
          error: () => {},
        });
      },
      error: (err: any) => {
        const msg = err?.error?.message ?? '';
        if (err?.status === 503 || msg.toLowerCase().includes('firebase')) {
          this.firebaseError = msg || 'Firebase non configur\u00e9 \u2014 ajoutez vos identifiants dans le .env du backend.';
        }
        this.loading = false;
      },
    });
  }

  // ─── Création ─────────────────────────────────────────────────────────────

  onFlyerChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.flyerFile = input.files?.[0] ?? null;
  }

  submit() {
    if (!this.form.titre || !this.form.dateDebut || !this.form.dateFin) return;
    if (this.form.scope === 'LIVRES_CHOISIS' && !this.form.livresChoisis.length) {
      this.errorMsg = 'Choisissez au moins un livre.';
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    this.successMsg = '';

    const payload: any = { ...this.form };
    if (payload.scope !== 'LIVRES_CHOISIS') delete payload.livresChoisis;

    this.api.creerMarathon(payload).subscribe({
      next: (res: any) => {
        const marathonId = res.id;
        if (this.flyerFile && marathonId) {
          this.uploadingFlyer = true;
          const fd = new FormData();
          fd.append('file', this.flyerFile);
          this.api.uploadMarathonFlyer(marathonId, fd).subscribe({
            next: () => { this.uploadingFlyer = false; },
            error: () => { this.uploadingFlyer = false; },
          });
        }
        this.successMsg = `Marathon cr\u00e9\u00e9 \u2014 ${res.nbJours} jours, ${res.nbChapitres} chapitres r\u00e9partis. Une newsletter a \u00e9t\u00e9 envoy\u00e9e aux anciens participants.`;
        this.saving = false;
        this.resetForm();
        this.load();
      },
      error: (err: any) => {
        this.errorMsg = err?.error?.message ?? 'Erreur lors de la cr\u00e9ation.';
        this.saving = false;
      },
    });
  }

  resetForm() {
    this.form = { titre: '', description: '', dateDebut: '', dateFin: '', scope: 'BIBLE_COMPLETE', livresChoisis: [] };
    this.flyerFile = null;
  }

  toggleLivre(id: string) {
    const idx = this.form.livresChoisis.indexOf(id);
    if (idx >= 0) this.form.livresChoisis.splice(idx, 1);
    else           this.form.livresChoisis.push(id);
  }

  isLivreSelected(id: string) {
    return this.form.livresChoisis.includes(id);
  }

  // ─── Actions sur un marathon ───────────────────────────────────────────────

  archiver(id: string) {
    this.api.archiverMarathon(id).subscribe({ next: () => this.load() });
  }

  reactiver(id: string) {
    this.api.reactiverMarathon(id).subscribe({ next: () => this.load() });
  }

  supprimer(id: string) {
    if (!confirm('Supprimer ce marathon ? Cette action est irr\u00e9versible.')) return;
    this.api.supprimerMarathon(id).subscribe({ next: () => this.load() });
  }

  // ─── Panneau inscrits ──────────────────────────────────────────────────────

  voirInscrits(m: any) {
    if (this.inscritsMarathonId === m.id) {
      this.inscritsMarathonId = null;
      return;
    }
    this.inscritsMarathonId = m.id;
    this.inscritsMarathonTitre = m.titre;
    this.loadingInscrits = true;
    this.inscrits = [];

    this.api.getInscritsMarathon(m.id).subscribe({
      next: (data: any) => { this.inscrits = data; this.loadingInscrits = false; },
      error: () => { this.loadingInscrits = false; },
    });
  }

  // ─── Attestations annuelles ────────────────────────────────────────────────

  exportCSV(m: any) {
    if (!this.inscrits.length) return;
    const header = ['Rang', 'Nom', 'Email', 'Progression (%)', 'Jalons', 'Streak actuel', 'Streak max'];
    const rows = this.inscrits.map((i: any) => [
      i.rank, i.fullName, i.email, i.progressPercent,
      (i.milestonesReached ?? []).join('|'),
      i.currentStreak ?? 0, i.maxStreak ?? 0,
    ].join(';'));
    const csv = [header.join(';'), ...rows].join('\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${m.titre.replace(/\s+/g, '-').toLowerCase()}-inscrits.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  envoyerAttestations() {
    if (!confirm(`Envoyer les attestations annuelles pour ${this.anneeAttestation} ?`)) return;
    this.sendingAttestations = true;
    this.attestationMsg = '';

    this.api.envoyerAttestationsAnnuelles(this.anneeAttestation).subscribe({
      next: (res: any) => {
        this.attestationMsg = `${res.envoyes} attestation(s) envoy\u00e9e(s) sur ${res.totalMarathons} marathon(s).`;
        this.sendingAttestations = false;
      },
      error: () => {
        this.attestationMsg = 'Erreur lors de l\u2019envoi.';
        this.sendingAttestations = false;
      },
    });
  }

  // ─── Helpers template ──────────────────────────────────────────────────────

  nbJoursRestants(dateFin: string): number {
    const diff = new Date(dateFin).getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / 86_400_000));
  }
}

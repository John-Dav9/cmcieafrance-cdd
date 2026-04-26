import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DepartementConfig, getDepartement } from '../departements.config';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-departement-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './departement-detail.component.html',
  styleUrls: ['./departement-detail.component.css'],
})
export class DepartementDetailComponent implements OnInit {
  dept: DepartementConfig | null = null;
  notFound = false;

  // Formulaire
  joinOpen    = false;
  submitting  = false;
  success     = false;
  errorMsg    = '';

  form = {
    nom:          '',
    prenom:       '',
    email:        '',
    telephone:    '',
    universite:   '',
    enfantPrenom: '',
    enfantAge:    '',
    typeVoix:     '',
  };

  typesVoix = ['Soprano', 'Mezzo-soprano', 'Alto', 'Ténor', 'Baryton', 'Basse'];

  private base = environment.apiBase;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.dept  = getDepartement(slug) ?? null;
      if (!this.dept) this.notFound = true;
      this.resetForm();
    });
  }

  openJoin(): void {
    this.joinOpen = true;
    this.success  = false;
    this.errorMsg = '';
    setTimeout(() => {
      document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  closeJoin(): void { this.joinOpen = false; }

  submit(): void {
    if (!this.dept) return;

    const nom    = this.form.nom.trim();
    const prenom = this.form.prenom.trim();
    const email  = this.form.email.trim().toLowerCase();

    if (!nom || !prenom) { this.errorMsg = 'Le nom et le prénom sont requis.'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { this.errorMsg = 'Email invalide.'; return; }

    this.submitting = true;
    this.errorMsg   = '';

    const payload: any = {
      type:        'DEPARTEMENT',
      departement: this.dept.name,
      nom,
      prenom,
      email,
      telephone: this.form.telephone.trim() || undefined,
    };

    if (this.dept.formExtras === 'enfants') {
      payload.enfantPrenom = this.form.enfantPrenom.trim() || undefined;
      payload.enfantAge    = this.form.enfantAge.trim()    || undefined;
    }
    if (this.dept.formExtras === 'etudiants') {
      payload.universite = this.form.universite.trim() || undefined;
    }
    if (this.dept.formExtras === 'chorale') {
      payload.typeVoix = this.form.typeVoix || undefined;
    }

    this.http.post(`${this.base}/inscriptions`, payload).subscribe({
      next: () => {
        this.submitting = false;
        this.success    = true;
        this.joinOpen   = false;
        this.resetForm();
      },
      error: (err) => {
        this.submitting = false;
        this.errorMsg   = err?.error?.message ?? 'Une erreur est survenue. Réessaie.';
      },
    });
  }

  private resetForm(): void {
    this.form     = { nom: '', prenom: '', email: '', telephone: '', universite: '', enfantPrenom: '', enfantAge: '', typeVoix: '' };
    this.success  = false;
    this.errorMsg = '';
  }

  backToDepts(): void { this.router.navigate(['/departements']); }
}

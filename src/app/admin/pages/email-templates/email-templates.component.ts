import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

interface EmailTemplate {
  key: string;
  label: string;
  description: string;
  variables: string[];
  subject: string;
  body: string;
  customized: boolean;
  updatedAt?: string;
}

@Component({
  selector: 'app-email-templates',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.css'],
})
export class EmailTemplatesComponent implements OnInit {
  private api = inject(ApiService);

  templates: EmailTemplate[] = [];
  loading = true;
  selected: EmailTemplate | null = null;
  editSubject = '';
  editBody = '';
  saving = false;
  resetting = false;
  successMsg = '';
  errorMsg = '';
  showPreview = false;

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.listEmailTemplates().subscribe({
      next: (data: any) => { this.templates = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  select(t: EmailTemplate) {
    this.loading = true;
    this.successMsg = '';
    this.errorMsg = '';
    this.api.getEmailTemplate(t.key).subscribe({
      next: (data: any) => {
        this.selected = data;
        this.editSubject = data.subject;
        this.editBody = data.body;
        this.loading = false;
        this.showPreview = false;
      },
      error: () => { this.loading = false; },
    });
  }

  back() {
    this.selected = null;
    this.successMsg = '';
    this.errorMsg = '';
    this.load();
  }

  save() {
    if (!this.selected) return;
    this.saving = true;
    this.successMsg = '';
    this.errorMsg = '';
    this.api.saveEmailTemplate(this.selected.key, this.editSubject, this.editBody).subscribe({
      next: () => {
        this.saving = false;
        this.successMsg = 'Modèle sauvegardé avec succès.';
        if (this.selected) this.selected.customized = true;
      },
      error: () => {
        this.saving = false;
        this.errorMsg = 'Erreur lors de la sauvegarde.';
      },
    });
  }

  reset() {
    if (!this.selected) return;
    if (!confirm('Remettre ce modèle à sa valeur par défaut ?')) return;
    this.resetting = true;
    this.errorMsg = '';
    this.successMsg = '';
    this.api.resetEmailTemplate(this.selected.key).subscribe({
      next: () => {
        this.resetting = false;
        this.successMsg = 'Modèle remis par défaut. Rechargement…';
        setTimeout(() => this.select(this.selected!), 800);
      },
      error: () => {
        this.resetting = false;
        this.errorMsg = 'Erreur lors de la réinitialisation.';
      },
    });
  }

  get previewHtml(): string {
    return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">${this.editBody}</div>`;
  }
}

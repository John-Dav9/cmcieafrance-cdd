import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meeting, ReunionsService } from '../../../core/services/reunions.service';

@Component({
  selector: 'app-reunions-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reunions-admin.component.html',
})
export class ReunionsAdminComponent implements OnInit {
  meetings: Meeting[] = [];
  loading = true;
  showForm = false;
  saving = false;
  error = '';
  success = '';

  form = {
    title: '',
    description: '',
    startTime: '',
    startHour: '10:00',
    isPublic: true,
    isRecurring: false,
    recurrenceRule: '',
  };

  constructor(private reunionsService: ReunionsService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.reunionsService.getAll().subscribe({
      next: (m) => { this.meetings = m; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  openForm() {
    this.showForm = true;
    this.error = '';
    this.success = '';
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.form.startTime = tomorrow.toISOString().split('T')[0];
  }

  closeForm() {
    this.showForm = false;
    this.form = { title: '', description: '', startTime: '', startHour: '10:00', isPublic: true, isRecurring: false, recurrenceRule: '' };
  }

  create() {
    if (!this.form.title || !this.form.startTime) return;
    this.saving = true;
    this.error = '';

    const startTime = new Date(`${this.form.startTime}T${this.form.startHour}:00`).toISOString();

    this.reunionsService.create({
      title: this.form.title,
      description: this.form.description,
      startTime: startTime as any,
      isPublic: this.form.isPublic,
      isRecurring: this.form.isRecurring,
      recurrenceRule: this.form.isRecurring ? this.form.recurrenceRule : undefined,
    }).subscribe({
      next: () => {
        this.saving = false;
        this.success = 'Réunion créée avec succès !';
        this.closeForm();
        this.load();
      },
      error: (err) => {
        this.error = err?.error?.message ?? 'Erreur lors de la création.';
        this.saving = false;
      },
    });
  }

  startNow() {
    if (!this.form.title) return;
    this.saving = true;
    const startTime = new Date().toISOString();
    this.reunionsService.create({
      title: this.form.title,
      description: this.form.description,
      startTime: startTime as any,
      isPublic: this.form.isPublic,
    }).subscribe({
      next: () => {
        this.saving = false;
        this.success = 'Réunion lancée !';
        this.closeForm();
        this.load();
      },
      error: () => { this.error = 'Erreur.'; this.saving = false; },
    });
  }

  cancel(id: string) {
    if (!confirm('Annuler cette réunion ?')) return;
    this.reunionsService.delete(id).subscribe({ next: () => this.load() });
  }

  sendReminders(id: string) {
    this.reunionsService.sendReminders(id).subscribe({
      next: (res) => alert(res?.message ?? 'Rappels envoyés'),
      error: () => alert('Erreur lors de l\'envoi des rappels'),
    });
  }

  formatDate(d: string) {
    return new Date(d).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  }

  statusLabel(s: string) {
    const labels: any = { scheduled: 'Programmée', live: '🔴 En cours', ended: 'Terminée', cancelled: 'Annulée' };
    return labels[s] ?? s;
  }
}

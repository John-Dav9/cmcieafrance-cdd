import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Meeting, ReunionsService } from '../../../core/services/reunions.service';
import { ApiService } from '../../services/api.service';

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

  // Registre de présence
  selectedMeetingId: string | null = null;
  attendance: any[] = [];
  loadingAttendance = false;
  members: any[] = [];
  inviteMeetingId: string | null = null;
  inviteMemberId = '';
  inviteLink = '';
  inviteLoading = false;
  inviteCopied = false;

  form = {
    title: '',
    description: '',
    startTime: '',
    startHour: '10:00',
    isPublic: true,
    lobbyEnabled: false,
    isRecurring: false,
    recurrenceRule: 'FREQ=WEEKLY;INTERVAL=1',
  };

  constructor(private reunionsService: ReunionsService, private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.load();
    this.api.getMembres().subscribe({ next: members => this.members = members });
  }

  openInvite(meetingId: string) {
    this.inviteMeetingId = this.inviteMeetingId === meetingId ? null : meetingId;
    this.inviteMemberId = '';
    this.inviteLink = '';
    this.inviteCopied = false;
  }

  createInvite(meetingId: string) {
    if (!this.inviteMemberId) return;
    this.inviteLoading = true;
    this.reunionsService.createModeratorInvite(meetingId, this.inviteMemberId).subscribe({
      next: result => {
        this.inviteLink = `${window.location.origin}/reunions/invitation?token=${encodeURIComponent(result.token)}`;
        this.inviteLoading = false;
        this.copyInvite();
      },
      error: err => {
        this.error = err?.error?.message ?? 'Impossible de créer le lien.';
        this.inviteLoading = false;
      },
    });
  }

  async copyInvite() {
    if (!this.inviteLink) return;
    try {
      await navigator.clipboard.writeText(this.inviteLink);
      this.inviteCopied = true;
    } catch {
      this.inviteCopied = false;
    }
  }

  load() {
    this.reunionsService.getAllAdmin().subscribe({
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
    this.form = {
      title: '',
      description: '',
      startTime: '',
      startHour: '10:00',
      isPublic: true,
      lobbyEnabled: false,
      isRecurring: false,
      recurrenceRule: 'FREQ=WEEKLY;INTERVAL=1',
    };
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
      lobbyEnabled: this.form.lobbyEnabled,
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
      lobbyEnabled: this.form.lobbyEnabled,
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

  joinMeeting(id: string) {
    this.reunionsService.join(id).subscribe({
      next: (result) => {
        if ('jitsiToken' in result) {
          this.router.navigate(['/reunions', id, 'salle'], { state: { jitsiData: result } });
        }
      },
      error: () => alert('Impossible de rejoindre la réunion.'),
    });
  }

  sendReminders(id: string) {
    this.reunionsService.sendReminders(id).subscribe({
      next: (res) => alert(res?.message ?? 'Rappels envoyés'),
      error: () => alert('Erreur lors de l\'envoi des rappels'),
    });
  }

  viewAttendance(meetingId: string) {
    if (this.selectedMeetingId === meetingId) {
      this.selectedMeetingId = null;
      return;
    }
    this.selectedMeetingId = meetingId;
    this.loadingAttendance = true;
    this.api.getAttendance(meetingId).subscribe({
      next: (data) => { this.attendance = data; this.loadingAttendance = false; },
      error: () => { this.loadingAttendance = false; },
    });
  }

  formatDuration(minutes: number | null): string {
    if (!minutes) return '—';
    if (minutes < 60) return `${minutes} min`;
    return `${Math.floor(minutes / 60)}h${minutes % 60 > 0 ? String(minutes % 60).padStart(2, '0') : ''}`;
  }

  formatDate(d: string) {
    return new Date(d).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  }

  statusLabel(s: string) {
    const labels: any = { scheduled: 'Programmée', live: '🔴 En cours', ended: 'Terminée', cancelled: 'Annulée' };
    return labels[s] ?? s;
  }
}

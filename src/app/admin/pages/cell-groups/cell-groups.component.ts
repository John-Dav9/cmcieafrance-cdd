import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cell-groups-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cell-groups.component.html',
  styleUrls: ['./cell-groups.component.scss'],
})
export class CellGroupsAdminComponent implements OnInit {
  groups: any[] = [];
  membres: any[] = [];
  loading = true;
  showForm = false;
  editing: any = null;

  // member management
  selectedGroup: any = null;
  showMembersPanel = false;
  newMemberId = '';
  memberError = '';

  form = { name: '', description: '', leaderName: '', meetingDay: '', meetingTime: '' };

  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  constructor(private http: HttpClient, private api: ApiService) {}

  ngOnInit() {
    this.load();
    this.api.getMembres().subscribe({ next: (m) => { this.membres = m; } });
  }

  load() {
    this.loading = true;
    this.http.get<any[]>(`${environment.apiBase}/cell-groups`).subscribe({
      next: g => { this.groups = g; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  openCreate() {
    this.editing = null;
    this.form = { name: '', description: '', leaderName: '', meetingDay: '', meetingTime: '' };
    this.showForm = true;
  }

  openEdit(g: any) {
    this.editing = g;
    this.form = { name: g.name, description: g.description ?? '', leaderName: g.leaderName ?? '', meetingDay: g.meetingDay ?? '', meetingTime: g.meetingTime ?? '' };
    this.showForm = true;
  }

  save() {
    if (!this.form.name.trim()) return;
    const req = this.editing
      ? this.http.put(`${environment.apiBase}/cell-groups/${this.editing.id}`, this.form)
      : this.http.post(`${environment.apiBase}/cell-groups`, this.form);
    req.subscribe({ next: () => { this.showForm = false; this.load(); } });
  }

  remove(id: string) {
    if (!confirm('Supprimer ce groupe ?')) return;
    this.http.delete(`${environment.apiBase}/cell-groups/${id}`).subscribe({ next: () => this.load() });
  }

  openMembers(g: any) {
    this.selectedGroup = g;
    this.showMembersPanel = true;
    this.newMemberId = '';
    this.memberError = '';
    this.refreshGroup(g.id);
  }

  refreshGroup(id: string) {
    this.api.getCellGroupDetail(id).subscribe({
      next: (detail) => {
        const idx = this.groups.findIndex(g => g.id === id);
        if (idx !== -1) this.groups[idx] = detail;
        this.selectedGroup = detail;
      },
    });
  }

  addMember() {
    if (!this.newMemberId || !this.selectedGroup) return;
    this.memberError = '';
    this.api.addMemberToGroup(this.selectedGroup.id, this.newMemberId).subscribe({
      next: () => { this.newMemberId = ''; this.refreshGroup(this.selectedGroup.id); },
      error: (err: any) => { this.memberError = err?.error?.message ?? 'Erreur lors de l\'ajout.'; },
    });
  }

  removeMember(memberId: string) {
    if (!this.selectedGroup) return;
    this.api.removeMemberFromGroup(this.selectedGroup.id, memberId).subscribe({
      next: () => { this.refreshGroup(this.selectedGroup.id); },
    });
  }

  getMemberName(id: string): string {
    const m = this.membres.find(m => m.id === id);
    return m ? `${m.prenom ?? ''} ${m.nom ?? ''}`.trim() || m.email : id;
  }
}

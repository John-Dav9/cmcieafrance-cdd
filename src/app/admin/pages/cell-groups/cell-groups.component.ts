import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cell-groups-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cell-groups.component.html',
  styleUrls: ['./cell-groups.component.scss'],
})
export class CellGroupsAdminComponent implements OnInit {
  groups: any[] = [];
  loading = true;
  showForm = false;
  editing: any = null;

  form = { name: '', description: '', leaderName: '', meetingDay: '', meetingTime: '' };

  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  constructor(private http: HttpClient) {}

  ngOnInit() { this.load(); }

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
}

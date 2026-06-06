import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-membres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css'],
})
export class AdminMembresComponent implements OnInit {
  private api = inject(ApiService);

  membres: any[] = [];
  filtered: any[] = [];
  loading = true;
  merging = false;
  search = '';
  filterRole = '';
  successMsg = '';

  readonly roles = ['member', 'admin', 'super_admin', 'visitor'];

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getMembres().subscribe({
      next: (data) => { this.membres = data; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  applyFilter() {
    const q = this.search.toLowerCase();
    this.filtered = this.membres.filter(m => {
      const matchSearch = !q ||
        m.firstName?.toLowerCase().includes(q) ||
        m.lastName?.toLowerCase().includes(q) ||
        m.email?.toLowerCase().includes(q) ||
        m.phone?.includes(q);
      const matchRole = !this.filterRole || m.role === this.filterRole;
      return matchSearch && matchRole;
    });
  }

  changeRole(membre: any, role: string) {
    this.api.updateMembreRole(membre.id, role).subscribe({
      next: () => { membre.role = role; this.flash('Rôle mis à jour.'); },
    });
  }

  deactivate(membre: any) {
    if (!confirm(`Désactiver le compte de ${membre.firstName} ${membre.lastName} ?`)) return;
    this.api.desactiverMembre(membre.id).subscribe({
      next: () => { membre.isActive = false; this.flash('Membre désactivé.'); },
    });
  }

  merge() {
    if (!confirm('Fusionner les bases Marathon et Newsletter en membres ? Cette action est sûre et peut être relancée.')) return;
    this.merging = true;
    this.api.mergeBases().subscribe({
      next: (res: any) => {
        this.merging = false;
        this.flash(res.message);
        this.load();
      },
      error: () => { this.merging = false; },
    });
  }

  private flash(msg: string) {
    this.successMsg = msg;
    setTimeout(() => (this.successMsg = ''), 3000);
  }

  roleLabel(role: string): string {
    const map: Record<string, string> = {
      super_admin: 'Super Admin',
      admin: 'Admin',
      member: 'Membre',
      visitor: 'Visiteur',
    };
    return map[role] ?? role;
  }

  roleClass(role: string): string {
    const map: Record<string, string> = {
      super_admin: 'badge-purple',
      admin: 'badge-red',
      member: 'badge-blue',
      visitor: 'badge-gray',
    };
    return map[role] ?? 'badge-gray';
  }
}

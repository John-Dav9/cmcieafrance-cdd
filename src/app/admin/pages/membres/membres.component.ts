import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../../core/services/auth.service';

type MemberRole = 'super_admin' | 'admin' | 'member' | 'visitor';
type EditableMemberRole = Exclude<MemberRole, 'super_admin'>;

interface MemberRecord {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  city?: string | null;
  role: MemberRole;
  isActive: boolean;
  source?: string | null;
}

@Component({
  selector: 'app-admin-membres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css'],
})
export class AdminMembresComponent implements OnInit {
  private api = inject(ApiService);
  private auth = inject(AuthService);

  membres: MemberRecord[] = [];
  filtered: MemberRecord[] = [];
  loading = true;
  merging = false;
  search = '';
  filterRole = '';
  successMsg = '';
  errorMsg = '';
  pendingActions = new Set<string>();
  roleDrafts: Record<string, EditableMemberRole> = {};

  readonly roles: EditableMemberRole[] = ['member', 'admin', 'visitor'];

  get canManageRoles(): boolean {
    return this.auth.isSuperAdmin();
  }

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getMembres().subscribe({
      next: (data) => {
        this.membres = data as MemberRecord[];
        this.roleDrafts = this.membres.reduce<Record<string, EditableMemberRole>>(
          (drafts, member) => {
            if (member.role !== 'super_admin') {
              drafts[member.id] = member.role;
            }
            return drafts;
          },
          {},
        );
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.flash('Chargement des membres impossible.', 'error');
      },
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

  changeRole(membre: MemberRecord, role: EditableMemberRole) {
    if (!this.canManageRoles || role === membre.role) return;
    const action = role === 'admin'
      ? `promouvoir ${membre.firstName} ${membre.lastName} comme administrateur`
      : `attribuer le rôle « ${this.roleLabel(role)} » à ${membre.firstName} ${membre.lastName}`;
    if (!confirm(`Confirmer : ${action} ?`)) {
      this.roleDrafts[membre.id] = membre.role as EditableMemberRole;
      return;
    }
    const key = `role-${membre.id}`;
    this.pendingActions.add(key);
    this.api.updateMembreRole(membre.id, role).subscribe({
      next: () => {
        membre.role = role;
        this.roleDrafts[membre.id] = role;
        this.pendingActions.delete(key);
        this.flash('Rôle mis à jour.', 'success');
      },
      error: () => {
        this.roleDrafts[membre.id] = membre.role as EditableMemberRole;
        this.pendingActions.delete(key);
        this.flash('La modification du rôle a échoué.', 'error');
      },
    });
  }

  deactivate(membre: MemberRecord) {
    if (!confirm(`Désactiver le compte de ${membre.firstName} ${membre.lastName} ?`)) return;
    const key = `deactivate-${membre.id}`;
    this.pendingActions.add(key);
    this.api.desactiverMembre(membre.id).subscribe({
      next: () => {
        membre.isActive = false;
        this.pendingActions.delete(key);
        this.flash('Membre désactivé.', 'success');
      },
      error: () => {
        this.pendingActions.delete(key);
        this.flash('La désactivation a échoué.', 'error');
      },
    });
  }

  merge() {
    if (!confirm('Fusionner les bases Marathon et Newsletter en membres ? Cette action est sûre et peut être relancée.')) return;
    this.merging = true;
    this.api.mergeBases().subscribe({
      next: (res: any) => {
        this.merging = false;
        this.flash(res.message, 'success');
        this.load();
      },
      error: () => {
        this.merging = false;
        this.flash('La fusion des bases a échoué.', 'error');
      },
    });
  }

  isPending(key: string) {
    return this.pendingActions.has(key);
  }

  private flash(msg: string, type: 'success' | 'error') {
    this.successMsg = type === 'success' ? msg : '';
    this.errorMsg = type === 'error' ? msg : '';
    setTimeout(() => {
      this.successMsg = '';
      this.errorMsg = '';
    }, 3000);
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

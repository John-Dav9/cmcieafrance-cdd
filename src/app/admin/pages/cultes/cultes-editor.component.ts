import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AdminAuthService } from '../../services/admin-auth.service';

interface CulteItem {
  id: string;
  jour: string;
  heure: string;
  description: string;
  lien?: string;
}

@Component({
  selector: 'app-cultes-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cultes-editor.component.html',
  styleUrls: ['./cultes-editor.component.css'],
})
export class CultesEditorComponent implements OnInit {
  private http  = inject(HttpClient);
  private auth  = inject(AdminAuthService);
  private base  = environment.apiBase;

  items: CulteItem[] = [];
  loading  = true;
  saving   = false;
  savedMsg = '';
  errorMsg = '';

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.http.get<CulteItem[]>(`${this.base}/settings/cultes`).subscribe({
      next: (data) => { this.items = data.map(d => ({ ...d })); this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  add() {
    this.items.push({ id: Date.now().toString(), jour: '', heure: '', description: '', lien: '' });
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }

  moveUp(index: number) {
    if (index === 0) return;
    [this.items[index - 1], this.items[index]] = [this.items[index], this.items[index - 1]];
  }

  moveDown(index: number) {
    if (index === this.items.length - 1) return;
    [this.items[index], this.items[index + 1]] = [this.items[index + 1], this.items[index]];
  }

  async save() {
    this.saving  = true;
    this.savedMsg = '';
    this.errorMsg = '';
    const token   = await this.auth.getToken();
    const headers = { Authorization: `Bearer ${token}` };

    this.http.patch(`${this.base}/settings/cultes`, { items: this.items }, { headers }).subscribe({
      next: () => {
        this.savedMsg = 'Horaires sauvegard\u00e9s avec succ\u00e8s.';
        this.saving = false;
        setTimeout(() => (this.savedMsg = ''), 3000);
      },
      error: (err: any) => {
        this.errorMsg = err?.error?.message ?? 'Erreur lors de la sauvegarde.';
        this.saving = false;
      },
    });
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-replays',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './replays.component.html',
  styleUrls: ['./replays.component.css'],
})
export class AdminReplaysComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);

  replays: any[] = [];
  loading = true;
  saving = false;
  editId: string | null = null;
  successMsg = '';

  form = this.fb.group({
    title: ['', Validators.required],
    speakerName: [''],
    description: [''],
    videoUrl: ['', Validators.required],
    thumbnailUrl: [''],
    durationSeconds: [null],
    tags: [''],
    isPublic: [false],
  });

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getReplaysAdmin().subscribe({
      next: (data) => { this.replays = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    const val = this.form.value;
    const payload = {
      ...val,
      tags: val.tags ? (val.tags as string).split(',').map((t: string) => t.trim()).filter(Boolean) : [],
      durationSeconds: val.durationSeconds ? Number(val.durationSeconds) : null,
    };

    const obs = this.editId
      ? this.api.updateReplay(this.editId, payload)
      : this.api.createReplay(payload);

    obs.subscribe({
      next: () => {
        this.successMsg = this.editId ? 'Replay mis à jour.' : 'Replay ajouté.';
        this.form.reset({ isPublic: false });
        this.editId = null;
        this.saving = false;
        this.load();
        setTimeout(() => (this.successMsg = ''), 3000);
      },
      error: () => { this.saving = false; },
    });
  }

  edit(r: any) {
    this.editId = r.id;
    this.form.patchValue({
      ...r,
      tags: Array.isArray(r.tags) ? r.tags.join(', ') : r.tags ?? '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.editId = null;
    this.form.reset({ isPublic: false });
  }

  togglePublic(r: any) {
    this.api.toggleReplayPublic(r.id).subscribe({
      next: (res: any) => { r.isPublic = res.isPublic; },
    });
  }

  delete(id: string) {
    if (!confirm('Supprimer ce replay ?')) return;
    this.api.deleteReplay(id).subscribe(() => {
      this.replays = this.replays.filter(r => r.id !== id);
    });
  }

  formatDuration(s: number | null): string {
    if (!s) return '—';
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, '0')}`;
  }
}

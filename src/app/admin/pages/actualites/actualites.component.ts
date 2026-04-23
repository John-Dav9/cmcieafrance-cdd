import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-actualites',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css'],
})
export class AdminActualitesComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);

  actualites: any[] = [];
  loading = true;
  saving = false;
  editId: string | null = null;
  successMsg = '';

  form = this.fb.group({
    titre: ['', Validators.required],
    contenu: ['', Validators.required],
    auteur: [''],
    imageUrl: [''],
    videoId: [''],
    tags: [''],
    publiee: [false],
  });

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getActualitesAdmin().subscribe({
      next: (data: any) => { this.actualites = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    const obs = this.editId
      ? this.api.updateActualite(this.editId, this.form.value)
      : this.api.createActualite(this.form.value);

    obs.subscribe({
      next: () => {
        this.successMsg = this.editId ? 'Article mis à jour.' : 'Article créé.';
        this.form.reset({ publiee: false });
        this.editId = null;
        this.saving = false;
        this.load();
        setTimeout(() => (this.successMsg = ''), 3000);
      },
      error: () => { this.saving = false; },
    });
  }

  edit(a: any) {
    this.editId = a.id;
    this.form.patchValue(a);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.editId = null;
    this.form.reset({ publiee: false });
  }

  togglePubliee(a: any) {
    this.api.updateActualite(a.id, { publiee: !a.publiee }).subscribe(() => {
      a.publiee = !a.publiee;
    });
  }

  delete(id: string) {
    if (!confirm('Supprimer cet article ?')) return;
    this.api.deleteActualite(id).subscribe(() => {
      this.actualites = this.actualites.filter((a) => a.id !== id);
    });
  }
}

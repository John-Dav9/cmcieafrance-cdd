import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-bibliotheque',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css'],
})
export class BibliothequeComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);

  livres: any[] = [];
  loading = true;
  uploading = false;
  uploadProgress = 0;
  successMsg = '';

  pdfFile: File | null = null;
  coverFile: File | null = null;

  form = this.fb.group({
    titre: ['', Validators.required],
    auteur: [''],
    description: [''],
    categorie: [''],
  });

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getLivres().subscribe({
      next: (data: any) => { this.livres = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  onPdfChange(e: Event) {
    this.pdfFile = (e.target as HTMLInputElement).files?.[0] ?? null;
  }

  onCoverChange(e: Event) {
    this.coverFile = (e.target as HTMLInputElement).files?.[0] ?? null;
  }

  submit() {
    if (this.form.invalid || !this.pdfFile) return;
    const fd = new FormData();
    Object.entries(this.form.value).forEach(([k, v]) => { if (v) fd.append(k, v as string); });
    fd.append('pdf', this.pdfFile);
    if (this.coverFile) fd.append('cover', this.coverFile);

    this.uploading = true;
    this.uploadProgress = 0;

    this.api.uploadLivre(fd).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          this.uploadProgress = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.successMsg = 'Livre ajouté avec succès.';
          this.form.reset();
          this.pdfFile = null;
          this.coverFile = null;
          this.uploading = false;
          this.load();
          setTimeout(() => (this.successMsg = ''), 3000);
        }
      },
      error: () => { this.uploading = false; },
    });
  }

  delete(id: string) {
    if (!confirm('Supprimer ce livre ?')) return;
    this.api.deleteLivre(id).subscribe(() => {
      this.livres = this.livres.filter((l) => l.id !== id);
    });
  }
}

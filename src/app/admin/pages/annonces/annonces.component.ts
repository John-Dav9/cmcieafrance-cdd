import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-annonces',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css'],
})
export class AnnoncesComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);

  annonces: any[] = [];
  loading = true;
  saving = false;
  successMsg = '';

  form = this.fb.group({
    titre: ['', Validators.required],
    contenu: ['', Validators.required],
    publiee: [false],
    envoyerEmail: [false],
  });

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getAnnoncesAdmin().subscribe({
      next: (data: any) => { this.annonces = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  submit() {
    if (this.form.invalid || this.saving) return;
    this.saving = true;
    this.api.createAnnonce(this.form.value).subscribe({
      next: () => {
        this.successMsg = 'Annonce créée avec succès.';
        this.form.reset({ publiee: false, envoyerEmail: false });
        this.saving = false;
        this.load();
        setTimeout(() => (this.successMsg = ''), 3000);
      },
      error: () => { this.saving = false; },
    });
  }

  togglePubliee(a: any) {
    this.api.updateAnnonce(a.id, { publiee: !a.publiee }).subscribe(() => {
      a.publiee = !a.publiee;
    });
  }

  delete(id: string) {
    if (!confirm('Supprimer cette annonce ?')) return;
    this.api.deleteAnnonce(id).subscribe(() => {
      this.annonces = this.annonces.filter((a) => a.id !== id);
    });
  }
}

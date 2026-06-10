import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

interface CantiqueForm {
  id?: string;
  title: string;
  number: string;
  author: string;
  lyrics: string;
  source: string;
  rightsNote: string;
}

const EMPTY_FORM: CantiqueForm = {
  title: '',
  number: '',
  author: '',
  lyrics: '',
  source: '',
  rightsNote: '',
};

@Component({
  selector: 'app-admin-cantiques',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cantiques.component.html',
  styleUrls: ['./cantiques.component.css'],
})
export class AdminCantiquesComponent implements OnInit {
  private readonly api = inject(ApiService);

  cantiques: any[] = [];
  form: CantiqueForm = { ...EMPTY_FORM };
  search = '';
  loading = true;
  saving = false;
  message = '';

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.api.getCantiques(this.search).subscribe({
      next: data => {
        this.cantiques = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.message = 'Chargement du catalogue impossible.';
      },
    });
  }

  edit(cantique: any) {
    this.form = {
      id: cantique.id,
      title: cantique.title ?? '',
      number: cantique.number ?? '',
      author: cantique.author ?? '',
      lyrics: cantique.lyrics ?? '',
      source: cantique.source ?? '',
      rightsNote: cantique.rightsNote ?? '',
    };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  save() {
    if (!this.form.title.trim() || !this.form.lyrics.trim()) return;
    this.saving = true;
    const request = this.form.id
      ? this.api.updateCantique(this.form.id, this.form)
      : this.api.createCantique(this.form);
    request.subscribe({
      next: () => {
        this.saving = false;
        this.message = 'Cantique enregistré.';
        this.reset();
        this.load();
      },
      error: () => {
        this.saving = false;
        this.message = 'Enregistrement impossible.';
      },
    });
  }

  remove(cantique: any) {
    if (!confirm(`Supprimer « ${cantique.title} » du catalogue ?`)) return;
    this.api.deleteCantique(cantique.id).subscribe({
      next: () => this.load(),
    });
  }

  reset() {
    this.form = { ...EMPTY_FORM };
  }
}

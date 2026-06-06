import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-messages',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class AdminMessagesComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);

  messages: any[] = [];
  loading = true;
  saving = false;
  editId: string | null = null;
  successMsg = '';

  form = this.fb.group({
    title: ['', Validators.required],
    speaker: ['', Validators.required],
    date: ['', Validators.required],
    videoId: ['', Validators.required],
    publie: [true],
  });

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getMessagesAdmin().subscribe({
      next: (data: any) => { this.messages = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    const obs = this.editId
      ? this.api.updateMessage(this.editId, this.form.value)
      : this.api.createMessage(this.form.value);

    obs.subscribe({
      next: () => {
        this.successMsg = this.editId ? 'Message mis à jour.' : 'Message créé.';
        this.form.reset({ publie: true });
        this.editId = null;
        this.saving = false;
        this.load();
        setTimeout(() => (this.successMsg = ''), 3000);
      },
      error: () => { this.saving = false; },
    });
  }

  edit(m: any) {
    this.editId = m.id;
    this.form.patchValue(m);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.editId = null;
    this.form.reset({ publie: true });
  }

  togglePublie(m: any) {
    this.api.updateMessage(m.id, { publie: !m.publie }).subscribe(() => {
      m.publie = !m.publie;
    });
  }

  delete(id: string) {
    if (!confirm('Supprimer ce message ?')) return;
    this.api.deleteMessage(id).subscribe(() => {
      this.messages = this.messages.filter((m) => m.id !== id);
    });
  }
}

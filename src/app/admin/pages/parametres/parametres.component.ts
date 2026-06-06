import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-parametres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css'],
})
export class AdminParametresComponent implements OnInit {
  private api = inject(ApiService);

  isOpen = true;
  loading = true;
  saving = false;
  successMsg = '';

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getSettings().subscribe({
      next: (s) => { this.isOpen = s.isOpen; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  toggleMode() {
    this.saving = true;
    this.api.updateSettings(this.isOpen).subscribe({
      next: () => {
        this.saving = false;
        this.successMsg = this.isOpen
          ? 'Communauté ouverte — les nouveaux visiteurs peuvent rejoindre.'
          : 'Communauté fermée — seuls les membres existants peuvent rejoindre.';
        setTimeout(() => (this.successMsg = ''), 4000);
      },
      error: () => { this.saving = false; },
    });
  }
}

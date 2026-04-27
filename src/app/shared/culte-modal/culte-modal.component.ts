import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-culte-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './culte-modal.component.html',
  styleUrls: ['./culte-modal.component.css'],
})
export class CulteModalComponent implements OnInit {
  private http = inject(HttpClient);

  visible = false;
  culte: any = null;

  ngOnInit() {
    if (sessionStorage.getItem('culte_modal_shown')) return;

    this.http.get<any>(`${environment.apiBase}/settings/next-culte`).subscribe({
      next: (data) => {
        if (data) {
          this.culte = data;
          this.visible = true;
          sessionStorage.setItem('culte_modal_shown', '1');
        }
      },
      error: () => {},
    });
  }

  close() {
    this.visible = false;
  }
}

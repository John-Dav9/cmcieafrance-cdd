import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-en-direct',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './en-direct.component.html',
  styleUrls: ['./en-direct.component.scss'],
})
export class EnDirectComponent implements OnInit {
  meeting: any = null;
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(`${environment.apiBase}/reunions/current`).subscribe({
      next: m => { this.meeting = m; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  get jitsiEmbedUrl(): string | null {
    if (!this.meeting?.jitsiRoomId) return null;
    const base = environment.apiBase.includes('localhost')
      ? 'https://meet.cmciea-france.com'
      : 'https://meet.cmciea-france.com';
    return `${base}/${this.meeting.jitsiRoomId}#config.toolbarButtons=[]&config.prejoinPageEnabled=false`;
  }
}

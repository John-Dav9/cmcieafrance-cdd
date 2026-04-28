import { Component, inject, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface ChatMsg { role: 'user' | 'assistant'; content: string; }

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
})
export class ChatWidgetComponent implements AfterViewChecked {
  private http = inject(HttpClient);
  @ViewChild('messagesEnd') private messagesEnd?: ElementRef;

  open = false;
  tab: 'home' | 'site' | 'spiritual' = 'home';

  // ── Chat IA ──────────────────────────────────────────────────────────────
  messages: ChatMsg[] = [];
  userInput = '';
  thinking = false;
  chatError = '';

  readonly whatsappUrl = 'https://wa.me/33744896818';
  readonly pastorEmail = 'mailto:contact@cmciea-france.com';

  toggle() {
    this.open = !this.open;
    if (!this.open) this.tab = 'home';
  }

  selectTab(t: 'site' | 'spiritual') {
    this.tab = t;
    if (t === 'site' && this.messages.length === 0) {
      this.messages = [{
        role: 'assistant',
        content: 'Bonjour ! Je suis l\'assistant de CMCIEA-France 👋\nPosez-moi vos questions sur l\'église, les horaires, les départements ou le marathon biblique.',
      }];
    }
  }

  back() {
    this.tab = 'home';
    this.chatError = '';
  }

  send() {
    const text = this.userInput.trim();
    if (!text || this.thinking) return;

    this.messages.push({ role: 'user', content: text });
    this.userInput = '';
    this.thinking = true;
    this.chatError = '';

    const history = this.messages.slice(0, -1); // tout sauf le dernier (déjà ajouté)

    this.http.post<{ reply: string }>(`${environment.apiBase}/chat`, {
      history,
      message: text,
    }).subscribe({
      next: (res) => {
        this.messages.push({ role: 'assistant', content: res.reply });
        this.thinking = false;
      },
      error: () => {
        this.messages.push({ role: 'assistant', content: 'Désolé, une erreur est survenue. Veuillez réessayer.' });
        this.thinking = false;
      },
    });
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  ngAfterViewChecked() {
    this.messagesEnd?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
  }
}

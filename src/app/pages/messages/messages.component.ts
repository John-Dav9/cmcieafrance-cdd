import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Message, MessagesService } from '../../core/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  messages: (Message & { safeUrl: SafeResourceUrl })[] = [];
  currentIndex = 0;
  private readonly videoIdPattern = /^[A-Za-z0-9_-]{11}$/;

  constructor(
    private messagesService: MessagesService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.messagesService.getMessages().subscribe((msgs) => {
      this.messages = msgs
        .filter((m) => this.videoIdPattern.test((m.videoId || '').trim()))
        .map((m) => {
          const videoId = m.videoId.trim();
          return {
            ...m,
            safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
              `https://www.youtube.com/embed/${videoId}`,
            ),
          };
        });
    });
  }

  prev() {
    if (!this.messages.length) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.messages.length) % this.messages.length;
  }

  next() {
    if (!this.messages.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
 
// Composants existants
import { CulteModalComponent } from './shared/culte-modal/culte-modal.component';
import { ChatWidgetComponent } from './shared/chat-widget/chat-widget.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
 
// NOUVEAU
import { MeetingService } from './core/services/meeting.service';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    CulteModalComponent,
    ChatWidgetComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
 
  // Observables pour le template
  meetingActive$:   Observable<boolean>;
  meetingFloating$: Observable<boolean>;
 
  constructor(private meetingService: MeetingService) {
    this.meetingActive$   = this.meetingService.isActive$;
    this.meetingFloating$ = this.meetingService.isFloating$;
  }
 
  ngOnInit() {}
}
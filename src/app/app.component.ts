import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { CulteModalComponent } from './shared/culte-modal/culte-modal.component';
import { ChatWidgetComponent } from './shared/chat-widget/chat-widget.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FloatingWindowComponent } from './pages/reunions/floating-window/floating-window.component';
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
    FloatingWindowComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();

  meetingActive$:   Observable<boolean>;
  meetingFloating$: Observable<boolean>;
  meetingTitle$:    Observable<string>;
  meetingQuality$:  Observable<string>;

  constructor(public meetingService: MeetingService, private router: Router) {
    this.meetingActive$   = this.meetingService.isActive$;
    this.meetingFloating$ = this.meetingService.isFloating$;
    this.meetingTitle$    = this.meetingService.title$;
    this.meetingQuality$  = this.meetingService.quality$;
  }

  ngOnInit() {}

  onFloatExpand() {
    const data = this.meetingService.currentMeetingData;
    this.router.navigate(['/reunion-room'], { state: { jitsiData: data } });
  }

  onFloatLeave() {
    this.meetingService.hangup();
  }
}

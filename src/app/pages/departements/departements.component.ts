import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DEPARTEMENTS } from './departements.config';

@Component({
  selector: 'app-departements',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css'],
})
export class DepartementsComponent {
  departements = DEPARTEMENTS;
}

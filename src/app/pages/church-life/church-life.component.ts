import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../core/services/pages.service';
import { ContactRequest, ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-church-life',
  templateUrl: './church-life.component.html',
  styleUrls: ['./church-life.component.css'],
})
export class ChurchLifeComponent implements OnInit {
  data: any;
  contact: ContactRequest = { name: '', email: '', message: '' };
  submitted = false;
  error = '';

  constructor(
    private pagesService: PagesService,
    private contactService: ContactService,
  ) {}

  ngOnInit(): void {
    this.pagesService.getChurchLife().subscribe((res) => (this.data = res));
  }

  onSubmit() {
    this.submitted = false;
    this.error = '';
    this.contactService.sendContact(this.contact).subscribe({
      next: () => (this.submitted = true),
      error: () => (this.error = 'Une erreur est survenue, merci de réessayer.'),
    });
  }
}
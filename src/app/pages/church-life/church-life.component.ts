import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../core/services/pages.service';
import { ContactRequest, ContactService } from '../../core/services/contact.service';
import { PageContentService } from '../../core/services/page-content.service';

@Component({
  standalone: false,
  selector: 'app-church-life',
  templateUrl: './church-life.component.html',
  styleUrls: ['./church-life.component.css'],
})
export class ChurchLifeComponent implements OnInit {
  data: any;
  c: any = {};
  contact: ContactRequest = { name: '', email: '', message: '' };
  submitted = false;
  error = '';

  constructor(
    private pagesService: PagesService,
    private contactService: ContactService,
    private pageContent: PageContentService,
  ) {}

  ngOnInit(): void {
    this.pagesService.getChurchLife().subscribe((res) => (this.data = res));
    this.pageContent.getPage('vie-de-leglise').subscribe((res) => { if (res) this.c = res; });
  }

  get pageTitle()  { return this.c.pageTitle  || this.data?.pageTitle  || 'Vie de l\'église'; }
  get pageIntro()  { return this.c.pageIntro  || this.data?.actusIntro || ''; }
  get adresse()    { return this.c.adresse    || this.data?.adresse    || ''; }
  get horaires()   { return this.c.horaires   || this.data?.horaires   || ''; }
  get membreText() { return this.c.membreText || this.data?.devenirMembre || ''; }
  get contactIntro(){ return this.c.contactIntro || this.data?.contactIntro || 'Nous contacter'; }

  onSubmit() {
    this.submitted = false;
    this.error = '';
    this.contactService.sendContact(this.contact).subscribe({
      next: () => (this.submitted = true),
      error: () => (this.error = 'Une erreur est survenue, merci de réessayer.'),
    });
  }
}

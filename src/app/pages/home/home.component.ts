import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from '../../core/services/pages.service';
import { PageContentService } from '../../core/services/page-content.service';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';



const DEFAULT_CULTES = [
  { id:'1', jour:'DU LUNDI AU VENDREDI', heure:'12H30 \u2013 13H30', description:'PRI\u00c8RE EN LIGNE' },
  { id:'2', jour:'DIMANCHE',              heure:'17H \u2013 18H',     description:'C\u00c9L\u00c9BRATION EN LIGNE' },
  { id:'3', jour:'MERCREDI',              heure:'20H \u2013 21H',     description:'ENSEIGNEMENTS BIBLIQUES EN LIGNE' },
  { id:'4', jour:'VENDREDI',              heure:'23H \u2013 1H',      description:'NUIT DE PRI\u00c8RE EN LIGNE' },
];

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  data: any;
  c: any = {};
  cultes: any[] = DEFAULT_CULTES;
  nextCulte: any = null;

  get heroTagline()    { return this.c.heroTagline    || 'Bienvenue à la CMCIEA-FRANCE'; }
  get heroTitle()      { return this.c.heroTitle      || 'Une église pour <span>tous</span>,<br/>Une église enracinée dans <span>la Parole</span>'; }
  get heroText()       { return this.c.heroText       || 'Découvre une communauté de chercheurs de Dieu qui aiment Jésus, aiment les gens et désirent voir l\'Évangile transformer des vies.'; }
  get heroImageUrl()   { return this.c.heroImageUrl   || 'assets/images/eglise-presentation.png'; }
  get visionHeading()  { return this.c.visionHeading  || 'Une communauté de <span>disciples du Seigneur Jésus-Christ</span>, qui ont décidé de vivre selon la <span>Parole de Dieu</span>'; }
  get mediaTitle()     { return this.c.mediaTitle     || 'DÉCOUVREZ NOS PROGRAMMATIONS MÉDIAS'; }
  get mediaText()      { return this.c.mediaText      || 'Nous annonçons la bonne nouvelle de Jésus-Christ qui sauve, guérit et délivre au travers des médias partout dans le monde.'; }
  get mediaYoutubeUrl(){ return this.c.mediaYoutubeUrl|| 'https://www.youtube.com/channel/UCdy_sjWGshzrF2NqzzTfd1Q'; }
  get mediaButtonText(){ return this.c.mediaButtonText|| 'Je veux voir la programmation'; }
  get contactTitle()   { return this.c.contactTitle   || 'Nous contacter'; }
  get contactIntro()   { return this.c.contactIntro   || 'Une question, un besoin de prière ? Écris-nous, notre équipe te répondra rapidement.'; }
  get whatsappNumber() { return this.c.whatsappNumber || '33744896818'; }
  get contactEmail()   { return this.c.contactEmail   || 'contact@cmciea-france.com'; }

  constructor(
    private http: HttpClient,
    private pagesService: PagesService,
    private pageContent: PageContentService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.pagesService.getHome().subscribe((res) => (this.data = res));
    this.pageContent.getPage('home').subscribe((res) => { if (res) this.c = res; });
    this.http.get<any[]>(`${environment.apiBase}/settings/cultes`).subscribe({
      next: (data) => { if (data?.length) this.cultes = data; },
      error: () => {},
    });

    this.http.get<any>(`${environment.apiBase}/settings/next-culte`).subscribe({
      next: (data) => { if (data?.date) this.nextCulte = data; },
      error: () => {},
    });

    /* ✅ TITLE (très important pour Google) */
    this.titleService.setTitle(
      'CMCIEA France | Communauté Missionnaire Chrétienne Internationale et Eglises Associées en France'
    );

    /* ✅ META DESCRIPTION */
    this.metaService.updateTag({
      name: 'description',
      content:
        'CMCIEA France – Église Chercheurs de Dieu. Communauté Missionnaire Chrétienne Internationale. ' +
        'Marathon biblique, enseignements bibliques, prière, célébrations et ressources spirituelles en ligne.'
    });

    /* ✅ META KEYWORDS (invisible mais utile pour cohérence SEO) */
    this.metaService.updateTag({
      name: 'keywords',
      content: `
        cmciea,
        cmciea france,
        cmci france,
        cmciea france chercheurs de dieu,
        cmciea chercheurs de dieu,
        communauté missionnaire chrétienne internationale,
        église cmciea france,
        église chercheurs de dieu,
        cmciea paris,
        cmciea france marathon biblique
      `
    });

    /* ✅ SEO SÉMANTIQUE SUPPLÉMENTAIRE (optionnel mais pro) */
    this.metaService.updateTag({
      property: 'og:title',
      content: 'CMCIEA France – Église Chercheurs de Dieu'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Église CMCIEA France – Chercheurs de Dieu. Une communauté enracinée dans la Parole de Dieu.'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      property: 'og:locale',
      content: 'fr_FR'
    });
  }

  ngAfterViewInit(): void {
  const elements = document.querySelectorAll('.animate-reveal');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // ✅ animation 1 seule fois
        }
      });
    },
    { threshold: 0.25 }
  );

  elements.forEach((el) => observer.observe(el));
}

  // ─── Newsletter ─────────────────────────────────────────────────────────────
  nlOpen = false;
  nlPrenom = '';
  nlEmail = '';
  nlSending = false;
  nlSuccess = '';
  nlError = '';

  subscribeNewsletter() {
    if (!this.nlEmail) return;
    this.nlSending = true;
    this.nlSuccess = '';
    this.nlError = '';
    this.http.post(`${environment.apiBase}/newsletter/subscribe`, { prenom: this.nlPrenom, email: this.nlEmail }).subscribe({
      next: () => {
        this.nlSuccess = 'Merci ! Vous êtes maintenant abonné(e) à notre newsletter.';
        this.nlSending = false;
        this.nlPrenom = '';
        this.nlEmail = '';
      },
      error: (err: any) => {
        this.nlError = err?.error?.message ?? 'Une erreur est survenue. Veuillez réessayer.';
        this.nlSending = false;
      },
    });
  }

  sendWhatsApp(
  form: HTMLFormElement,
  prenom: string,
  nom: string,
  email: string,
  message: string
): void {

  // 🔐 Sécurisation des champs
  const safePrenom = (prenom || '').trim();
  const safeNom = (nom || '').trim();
  const safeEmail = (email || '').trim();
  const safeMessage = (message || '').trim();

  // ✅ Validation HTML native
  if (!form.reportValidity()) {
    return;
  }

  // ✅ Sécurité supplémentaire
  if (!safePrenom || !safeNom || !safeEmail || !safeMessage) {
    return;
  }

  // 🕊️ Message pastoral
  const text = `
🙏 Bonjour,

Je vous contacte via le site *CMCIEA-FRANCE – Chercheurs de Dieu*.

👤 *Prénom* : ${safePrenom}
👤 *Nom* : ${safeNom}
📧 *Email* : ${safeEmail}

📝 *Message / Demande* :
${safeMessage}

Que le Seigneur vous bénisse.
  `.trim();

  // 📲 Numéro WhatsApp (France : 33 + numéro sans 0)
  const phoneNumber = '33744896818';

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  // 🚀 Ouvre WhatsApp
  window.open(url, '_blank');

  // ✅ Reset du formulaire (UX propre)
  form.reset();
}
}



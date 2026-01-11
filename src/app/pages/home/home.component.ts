import { AfterViewInit,Component, OnInit } from '@angular/core';
import { PagesService } from '../../core/services/pages.service';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  data: any;

  constructor(
    private pagesService: PagesService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.pagesService.getHome().subscribe((res) => (this.data = res));

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



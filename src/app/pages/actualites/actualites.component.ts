import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-actualites',
  standalone: true,
  templateUrl: './actualites.component.html',
  imports: [RouterModule],
  styleUrls: ['./actualites.component.css'],
})
export class ActualitesComponent implements OnInit {

  private sanitizer = inject(DomSanitizer);
  private title = inject(Title);
  private meta = inject(Meta);

  videoId = 'AdN46ZvxjFs';
  videoUrl!: SafeResourceUrl;

  ngOnInit(): void {
    // 🎥 URL YouTube sécurisée
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}?rel=0&modestbranding=1`
    );

    // 🔍 SEO PAGE ACTUALITÉS
    this.title.setTitle(
      'Actualités CMCIEA France'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Découvrez les actualités de la CMCIEA France : messages, événements, Marathon Biblique, vie de l’église et ressources pour grandir dans la foi.',
    });

    // 📊 SEO avancé : VideoObject (Google adore)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Message du Président — CMCIEA France",
      "description": "Message officiel du président de CMCIEA France.",
      "thumbnailUrl": `https://img.youtube.com/vi/${this.videoId}/hqdefault.jpg`,
      "uploadDate": "2026-01-03",
      "embedUrl": `https://www.youtube.com/embed/${this.videoId}`,
      "url": `https://youtu.be/${this.videoId}`
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}

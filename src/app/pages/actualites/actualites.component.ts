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
  videoUrl: SafeResourceUrl | null = null;

  ngOnInit(): void {
    // 🎥 URL YouTube sécurisée
    const normalizedVideoId = this.videoId.trim();
    if (this.isValidVideoId(normalizedVideoId)) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${normalizedVideoId}?rel=0&modestbranding=1`
      );
    } else {
      this.videoUrl = null;
    }

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
    if (this.isValidVideoId(normalizedVideoId)) {
      const jsonLd = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Message du Président — CMCIEA France",
      "description": "Message officiel du président de CMCIEA France.",
      "thumbnailUrl": `https://img.youtube.com/vi/${normalizedVideoId}/hqdefault.jpg`,
      "uploadDate": "2026-01-03",
      "embedUrl": `https://www.youtube.com/embed/${normalizedVideoId}`,
      "url": `https://youtu.be/${normalizedVideoId}`
    };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }

  private isValidVideoId(videoId: string): boolean {
    return /^[a-zA-Z0-9_-]{11}$/.test(videoId);
  }
}

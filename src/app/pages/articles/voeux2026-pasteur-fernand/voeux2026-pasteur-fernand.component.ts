import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voeux-2026-pasteur-fernand',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './voeux2026-pasteur-fernand.component.html',
  styleUrls: ['./voeux2026-pasteur-fernand.component.css'],
})
export class Voeux2026PasteurFernandComponent {
  showForm = false;
  prenom = '';
  telephone = '';

  openForm() {
    this.showForm = true;
  }

  sendMail() {
    const subject = encodeURIComponent('J’ai fait la prière – Vœux 2026 Pasteur Fernand');

    const body = encodeURIComponent(
`Bonjour,

Je vous écris pour vous informer que j’ai fait la prière de repentance
suite à l’article « Vœux 2026 – Pasteur Fernand ».

Je souhaiterais être accompagné(e) spirituellement.

Merci pour votre disponibilité.

Cordialement,

---
Prénom : ${this.prenom}
Téléphone : ${this.telephone}
`
    );

    window.location.href = `mailto:contact@cmciea-france.com?subject=${subject}&body=${body}`;
  }

  cancelForm() {
  this.showForm = false;
  this.prenom = '';
  this.telephone = '';
}

}

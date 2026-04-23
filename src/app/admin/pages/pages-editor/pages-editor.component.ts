import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { AdminAuthService } from '../../services/admin-auth.service';

export const PAGE_SCHEMAS: Record<string, { label: string; route: string; fields: any[] }> = {
  home: {
    label: 'Accueil',
    route: '/',
    fields: [
      { section: 'Héro', key: 'heroTagline', label: 'Accroche (petite ligne)', type: 'text' },
      { section: 'Héro', key: 'heroTitle', label: 'Titre principal', type: 'text' },
      { section: 'Héro', key: 'heroText', label: 'Texte d\'intro', type: 'textarea' },
      { section: 'Héro', key: 'heroImageUrl', label: 'Image de fond', type: 'image', field: 'heroImageUrl' },
      { section: 'Vision', key: 'visionHeading', label: 'Citation / Vision', type: 'textarea' },
      { section: 'Médias', key: 'mediaTitle', label: 'Titre section médias', type: 'text' },
      { section: 'Médias', key: 'mediaText', label: 'Texte médias', type: 'textarea' },
      { section: 'Médias', key: 'mediaYoutubeUrl', label: 'Lien chaîne YouTube', type: 'text' },
      { section: 'Médias', key: 'mediaButtonText', label: 'Texte du bouton', type: 'text' },
      { section: 'Contact', key: 'contactTitle', label: 'Titre contact', type: 'text' },
      { section: 'Contact', key: 'contactIntro', label: 'Intro contact', type: 'textarea' },
      { section: 'Contact', key: 'whatsappNumber', label: 'Numéro WhatsApp (ex: 33744896818)', type: 'text' },
      { section: 'Contact', key: 'contactEmail', label: 'Email de contact', type: 'text' },
    ],
  },
  'nous-connaitre': {
    label: 'Nous connaître',
    route: '/nous-connaitre',
    fields: [
      { section: 'Histoire', key: 'histoireTitle', label: 'Titre', type: 'text' },
      { section: 'Histoire', key: 'histoireContent', label: 'Contenu', type: 'textarea' },
      { section: 'Vision', key: 'visionTitle', label: 'Titre vision', type: 'text' },
      { section: 'Vision', key: 'visionContent', label: 'Contenu vision', type: 'textarea' },
    ],
  },
  'vie-de-leglise': {
    label: 'Vie de l\'église',
    route: '/vie-de-leglise',
    fields: [
      { section: 'Général', key: 'pageTitle', label: 'Titre de la page', type: 'text' },
      { section: 'Général', key: 'pageIntro', label: 'Introduction', type: 'textarea' },
      { section: 'Adresse', key: 'adresse', label: 'Adresse', type: 'text' },
      { section: 'Adresse', key: 'horaires', label: 'Horaires', type: 'textarea' },
    ],
  },
  'marathon-biblique': {
    label: 'Marathon Biblique',
    route: '/marathon-biblique',
    fields: [
      { section: 'Général', key: 'heroTitle', label: 'Titre', type: 'text' },
      { section: 'Général', key: 'heroSubtitle', label: 'Sous-titre', type: 'text' },
      { section: 'Général', key: 'description', label: 'Description', type: 'textarea' },
      { section: 'Dates', key: 'dateDebut', label: 'Date de début', type: 'text' },
      { section: 'Dates', key: 'dateFin', label: 'Date de fin', type: 'text' },
    ],
  },
  'premiere-visite': {
    label: 'Première visite',
    route: '/premiere-visite',
    fields: [
      { section: 'Général', key: 'heroTitle', label: 'Titre', type: 'text' },
      { section: 'Général', key: 'intro', label: 'Introduction', type: 'textarea' },
      { section: 'Infos pratiques', key: 'infosPratiques', label: 'Infos pratiques', type: 'textarea' },
    ],
  },
  'ministere-enfants': {
    label: 'Ministère Enfants',
    route: '/ministere-enfants',
    fields: [
      { section: 'Général', key: 'heroTitle', label: 'Titre', type: 'text' },
      { section: 'Général', key: 'description', label: 'Description', type: 'textarea' },
      { section: 'Image', key: 'imageUrl', label: 'Image principale', type: 'image', field: 'imageUrl' },
    ],
  },
};

@Component({
  selector: 'app-pages-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pages-editor.component.html',
  styleUrls: ['./pages-editor.component.css'],
})
export class PagesEditorComponent implements OnInit {
  @ViewChild('previewFrame') previewFrame!: ElementRef<HTMLIFrameElement>;

  private http = inject(HttpClient);
  private auth = inject(AdminAuthService);
  private fb = inject(FormBuilder);
  private base = environment.apiBase;

  pages = Object.entries(PAGE_SCHEMAS).map(([id, s]) => ({ id, ...s }));
  selectedPageId = 'home';
  schema = PAGE_SCHEMAS['home'];
  form: FormGroup = this.fb.group({});
  saving = false;
  savedMsg = '';
  previewReady = false;
  imageFiles: Record<string, File> = {};

  get sections(): string[] {
    return [...new Set(this.schema.fields.map((f) => f.section))];
  }

  fieldsForSection(section: string) {
    return this.schema.fields.filter((f) => f.section === section);
  }

  ngOnInit() { this.loadPage(); }

  selectPage(id: string) {
    this.selectedPageId = id;
    this.schema = PAGE_SCHEMAS[id];
    this.imageFiles = {};
    this.buildForm();
    this.loadPage();
    this.previewReady = false;
  }

  private buildForm() {
    const controls: Record<string, any> = {};
    this.schema.fields.forEach((f) => { if (f.type !== 'image') controls[f.key] = ['']; });
    this.form = this.fb.group(controls);
    this.form.valueChanges.subscribe(() => this.sendContentPreview());
  }

  private loadPage() {
    this.http
      .get<any>(`${this.base}/settings/pages/${this.selectedPageId}`)
      .subscribe({ next: (data) => { if (data) this.form.patchValue(data); } });
  }

  onIframeLoad() {
    this.previewReady = true;
    this.sendContentPreview();
  }

  sendContentPreview() {
    if (!this.previewReady || !this.previewFrame?.nativeElement?.contentWindow) return;
    this.previewFrame.nativeElement.contentWindow.postMessage(
      { type: 'CONTENT_PREVIEW', pageId: this.selectedPageId, content: this.form.value },
      '*',
    );
  }

  onImageChange(field: string, e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) this.imageFiles[field] = file;
  }

  async save() {
    this.saving = true;
    const token = await this.auth.getToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http
      .patch(`${this.base}/settings/pages/${this.selectedPageId}`, this.form.value, { headers })
      .subscribe({
        next: async () => {
          for (const [field, file] of Object.entries(this.imageFiles)) {
            await this.uploadImage(field, file, headers);
          }
          this.savedMsg = 'Page sauvegardée.';
          this.saving = false;
          setTimeout(() => (this.savedMsg = ''), 3000);
        },
        error: () => { this.saving = false; },
      });
  }

  private uploadImage(field: string, file: File, headers: HttpHeaders): Promise<void> {
    return new Promise((resolve) => {
      const fd = new FormData();
      fd.append('file', file);
      this.http
        .post(`${this.base}/settings/pages/${this.selectedPageId}/image/${field}`, fd, { headers })
        .subscribe(() => resolve());
    });
  }

  get previewRoute() {
    return this.schema.route;
  }
}

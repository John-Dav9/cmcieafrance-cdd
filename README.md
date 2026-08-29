# CMCIEA-FRANCE — Plateforme web de l'église

> Documentation principale du front-end · Application en production sur [cmciea-france.com](https://cmciea-france.com)

## Table des matières

1. [Présentation du projet](#présentation)
2. [Architecture globale](#architecture)
3. [Prérequis](#prérequis)
4. [Installation et démarrage](#installation)
5. [Variables d'environnement](#variables-denvironnement)
6. [Fonctionnalités](#fonctionnalités)
7. [Tests](#tests)
8. [Déploiement](#déploiement)

---

## Présentation

**CMCIEA-France** est la plateforme web d'une communauté religieuse basée en France.
Elle centralise la présentation de l'organisation, la diffusion de ses contenus, la vie
de ses membres et l'administration complète du site — sans dépendre d'un prestataire
pour chaque mise à jour.

Ce dépôt contient le **front-end Angular**. L'API est dans un dépôt séparé :
[Backend-cdd](https://github.com/John-Dav9/Backend-cdd).

| Espace | Route | Accès | Description |
|--------|-------|-------|-------------|
| **Site public** | `/` | Visiteur | Présentation, actualités, départements, annonces |
| **Ressources** | `/bibliotheque` `/cantiques` `/bible` | Visiteur | Bibliothèque, recueil de cantiques, lecture biblique |
| **Direct & replays** | `/en-direct` `/replays` | Visiteur / membre | Diffusion en direct, rediffusions réservées aux membres |
| **Réunions** | `/reunions/:id/salle` | Membre / invité | Visioconférence intégrée, accès par invitation |
| **Espace membre** | `/mon-espace` | Membre authentifié | Tableau de bord personnel |
| **Administration** | `/espace-admin` | Administrateur | 25 écrans de gestion du contenu et des membres |

### Stack technique

```
Front-end   : Angular 20.3 · TypeScript 5.8 · RxJS · routes lazy-loaded
Temps réel  : Socket.IO · visioconférence Jitsi auto-hébergée
PWA         : Angular Service Worker · notifications push · manifest
Tests       : Vitest (unitaires) · Playwright (end-to-end)
Build       : Docker multi-stage (node:20-alpine → nginx:alpine)
Déploiement : GitHub Actions → VPS Linux · Docker Compose
API         : NestJS (dépôt séparé) · authentification JWT
```

---

## Architecture

```
cmciea-france (front-end)
│
├── .github/workflows/
│   └── deploy.yml           # CI/CD : push sur main → déploiement VPS
│
├── src/
│   ├── app/
│   │   ├── core/            # Transversal
│   │   │   ├── components/      # Barre de navigation
│   │   │   ├── guards/          # Contrôle d'accès membre
│   │   │   ├── interceptors/    # Injection du token JWT
│   │   │   └── services/        # Auth, réunions, messages, thème,
│   │   │                        # notifications push, qualité réseau
│   │   │
│   │   ├── pages/           # 24 pages publiques
│   │   │   ├── auth/            # Connexion, inscription, OTP, magic link
│   │   │   ├── reunions/        # Liste, invitation, salle de réunion
│   │   │   ├── en-direct/       # Diffusion en direct
│   │   │   ├── replay/          # Rediffusions (accès membre)
│   │   │   ├── departements/    # Départements et fiches détaillées
│   │   │   ├── bible/           # Lecture biblique
│   │   │   ├── bibliotheque/    # Documents et ressources
│   │   │   ├── cantiques/       # Recueil de chants
│   │   │   ├── user-dashboard/  # Espace membre
│   │   │   └── …                # Actualités, annonces, prières, témoignages
│   │   │
│   │   ├── admin/           # Back-office (lazy-loaded)
│   │   │   ├── admin.routes.ts
│   │   │   ├── guards/          # Garde d'authentification admin
│   │   │   ├── services/        # Client API authentifié
│   │   │   └── pages/           # 25 écrans de gestion
│   │   │
│   │   └── shared/          # Composants réutilisables
│   │       ├── chat-widget/
│   │       ├── culte-modal/
│   │       └── meeting-overlay/     # Intégration Jitsi
│   │
│   ├── environments/        # apiBase dev / production
│   ├── manifest.webmanifest # PWA
│   └── ngsw-config.json     # Stratégies de cache du service worker
│
├── e2e/                     # Tests Playwright
├── telegram-bot/            # Bot Telegram (notifications administrateurs)
│
├── Dockerfile               # Build multi-stage
├── nginx.conf               # Serveur de production : CSP, en-têtes, cache
└── generate-pwa-icons.js    # Génération des icônes PWA (sharp)
```

**Découpage en trois services** en production :

| Service | Domaine | Rôle |
|---------|---------|------|
| Front-end | `cmciea-france.com` | Application Angular servie par nginx |
| API | `api.cmciea-france.com` | NestJS · REST + WebSocket |
| Visioconférence | `meet.cmciea-france.com` | Jitsi auto-hébergé, accès par jeton |

---

## Prérequis

| Outil | Version minimale |
|-------|-----------------|
| Node.js | 20+ |
| npm | 10+ |
| Angular CLI | 20+ |
| Docker | 24+ (pour le build de production) |
| API `Backend-cdd` | en local sur le port 3000 |

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/John-Dav9/cmcieafrance-cdd.git
cd cmcieafrance-cdd
```

### 2. Installer les dépendances

```bash
npm ci --legacy-peer-deps
```

### 3. Lancer en développement

```bash
npm start          # http://localhost:4200
```

Le serveur de développement proxifie `/api` vers `http://localhost:3000`
(voir `proxy.conf.json`) : lance l'API `Backend-cdd` en parallèle.

### 4. Build de production

```bash
npm run build      # sortie dans dist/eglise-frontend/browser
```

Ou en conteneur, tel qu'utilisé en production :

```bash
docker build -t cmciea-frontend .
docker run -p 8080:80 cmciea-frontend
```

---

## Variables d'environnement

### Front-end

L'URL de l'API est définie à la compilation, pas par un fichier `.env`.

`src/environments/environment.ts` — développement :

```typescript
export const environment = {
  production: false,
  apiBase: '/api',          // proxifié vers localhost:3000
};
```

`src/environments/environment.prod.ts` — production :

```typescript
export const environment = {
  production: true,
  apiBase: 'https://api.cmciea-france.com/api',
};
```

### Bot Telegram (`telegram-bot/.env`)

```env
BOT_TOKEN=                    # jeton fourni par @BotFather
ADMIN_GROUP_ID=               # ex. -1001234567890
GROUP_INVITE_LINK=            # lien d'invitation du groupe privé
START_TOKEN=                  # secret protégeant la commande /start
RATE_LIMIT_WINDOW_MS=300000   # fenêtre de limitation (5 min)
RATE_LIMIT_MAX=5              # requêtes max par fenêtre
ADMIN_NOTIFY_WINDOW_MS=600000 # anti-spam des alertes admin (10 min)
```

```bash
cd telegram-bot
npm install
npm start
```

### Secrets GitHub Actions

| Secret | Usage |
|--------|-------|
| `VPS_SSH_KEY` | Clé privée SSH utilisée par le workflow de déploiement |

---

## Fonctionnalités

### Authentification

Quatre parcours d'entrée, selon le contexte :

- **Mot de passe** classique — `/auth/login`
- **Code à usage unique (OTP)** — `/auth/verify-otp`
- **Lien magique** par email — `/auth/magic-link`
- **Jeton d'invitation** pour rejoindre une réunion privée sans compte

Le jeton JWT est injecté automatiquement dans les requêtes par un intercepteur HTTP
(`core/interceptors/auth.interceptor.ts`). Deux gardes distinctes protègent l'espace
membre et l'espace administrateur.

### Réunions en visioconférence

- Salle intégrée dans l'application via une superposition Jitsi
  (`shared/meeting-overlay`)
- Jeton Jitsi délivré par l'API, avec distinction modérateur / participant
- Reconnexion automatique et mesure de la qualité réseau
  (`meeting-reconnect.service.ts`, `network-quality.service.ts`)
- Signalisation temps réel via Socket.IO
- Accès invité en deux actions, couvert par un test end-to-end

### PWA et notifications

Application installable, mise en cache par le service worker Angular, avec
notifications push (`push-notifications.service.ts`). Les icônes sont générées
depuis une source unique par `generate-pwa-icons.js`.

### Back-office

25 écrans, chargés à la demande : tableau de bord et statistiques, membres,
inscriptions, actualités, annonces, messages, prières, témoignages, cultes et
prochain culte, réunions, replays, bibliothèque, cantiques, marathon biblique,
groupes de cellule, mentorat, newsletter, modèles d'email, éditeur de pages,
éditeur de thème, paramètres et journal d'audit.

L'éditeur de pages et l'éditeur de thème permettent à l'organisation de modifier
contenus et apparence sans intervention technique — c'était l'exigence centrale du
projet.

---

## Tests

```bash
npm test                    # tests unitaires (Vitest)
npm run test:e2e            # tests end-to-end (Playwright, tous navigateurs)
npm run test:e2e:chromium   # end-to-end sur Chromium uniquement
```

Le test `e2e/meeting-access.spec.ts` vérifie qu'un visiteur muni d'une invitation
rejoint une réunion privée en deux actions, avec l'API simulée par interception
réseau.

---

## Déploiement

Déploiement continu : tout push sur `main` déclenche `.github/workflows/deploy.yml`,
qui se connecte au VPS en SSH, récupère la nouvelle version, reconstruit l'image et
redémarre le conteneur.

```bash
git -C frontend pull origin main
docker compose up -d --build frontend
docker image prune -f
```

Le conteneur de production est construit en deux étapes : compilation Angular sous
`node:20-alpine`, puis copie du bundle dans une image `nginx:alpine`.

`nginx.conf` définit la configuration servie au public :

- **En-têtes de sécurité** — `Content-Security-Policy` restrictive listant
  explicitement les origines autorisées (API, Jitsi, YouTube, Vimeo),
  `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- **Permissions-Policy** — caméra et micro autorisés uniquement pour le domaine de
  visioconférence, géolocalisation et paiement bloqués
- **Cache** — assets fingerprintés en `immutable` pour un an, `index.html` et les
  fichiers du service worker en `no-store` pour éviter de servir une version périmée
- **Compression** gzip et repli SPA de toutes les routes vers `index.html`

---

## Dépôt lié

| Dépôt | Contenu |
|-------|---------|
| [Backend-cdd](https://github.com/John-Dav9/Backend-cdd) | API NestJS : REST, WebSocket, authentification JWT, délivrance des jetons Jitsi |

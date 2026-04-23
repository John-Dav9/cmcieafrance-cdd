# Firebase CI/CD frontend — état actuel

Le déploiement automatique Firebase est déjà configuré dans ce repo.

- Workflow merge: `.github/workflows/firebase-hosting-merge.yml`
- Déclencheur: `push` sur la branche `main`
- Build lancé: `npx ng build --configuration production`
- Déploiement Hosting: projet `cmcieafrance-cdd`

Si un push GitHub ne met plus le site à jour, vérifie dans cet ordre :

## 1) Le workflow est bien dans le bon dossier

Le fichier doit être dans :

- `.github/workflows/firebase-hosting-merge.yml`
- `.github/workflows/firebase-hosting-pull-request.yml`

## 2) Le secret GitHub existe

Dans GitHub → **Settings** → **Secrets and variables** → **Actions**, crée :

- `FIREBASE_SERVICE_ACCOUNT_CMCIEAFRANCE_CDD`

Contenu : le JSON complet d’un service account Firebase Admin.

## 3) Le bon projet Firebase est ciblé

Le workflow doit utiliser :

- `projectId: cmcieafrance-cdd`

Et `.firebaserc` doit contenir :

- `"default": "cmcieafrance-cdd"`

## 4) Node et build sont cohérents

Le workflow doit :

- installer Node 20
- exécuter `npm ci`
- exécuter `npx ng build --configuration production`

## 5) Vérifier le déploiement Firebase Hosting

Le dossier de sortie Angular doit correspondre à `firebase.json` :

- `dist/eglise-frontend`

## 6) Si le site se déploie mais affiche des erreurs au runtime

Alors le problème n’est pas le workflow, mais la config prod de l’app. Dans ce cas, vérifier :

- `frontend/src/environments/environment.prod.ts`
- surtout `apiBase`

Il pointe maintenant par défaut vers :

- `https://cmciea-backend.onrender.com/api`

Si Render attribue une autre URL finale, il faudra mettre à jour `environment.prod.ts`.

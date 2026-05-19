# @inlog/ds

**Design System INLOG** — Thème PrimeNG et tokens de design pour les applications Angular du groupe INLOG.

---

## Installation minimale (5 min)

### 1. Installer les dépendances

Dans un projet Angular 19+ :

```bash
npm install primeng @primeuix/themes primeicons @angular/animations @angular/cdk
npm install github:alexandrevallet/design-system#v1.2.0
```

> **Note** : la lib est distribuée directement depuis GitHub via un tag. Pas besoin de `.npmrc`, pas besoin de Personal Access Token — le repo est public.

### 2. Configurer le thème dans `app.config.ts`

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { GroupTheme } from '@inlog/ds';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: GroupTheme,
        options: { darkModeSelector: false }
      }
    })
  ]
};
```

### 3. Ajouter les icônes PrimeNG dans `styles.scss`

```scss
@import 'primeicons/primeicons.css';
```

C'est tout. Tous les composants PrimeNG utilisent automatiquement les couleurs et styles INLOG.

---

## Vérification rapide

Dans un composant standalone :

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule],
  template: `
    <input pInputText placeholder="Test" />
    <p-button label="Bouton INLOG" />
  `
})
export class DemoComponent {}
```

Le bouton doit apparaître en bleu INLOG (`#4667e5`).

---

## Pourquoi ces dépendances ?

| Dépendance              | Rôle                                                                            |
|-------------------------|---------------------------------------------------------------------------------|
| `primeng`               | La bibliothèque de composants                                                   |
| `@primeuix/themes`      | Moteur de thèmes utilisé par PrimeNG v19                                        |
| `primeicons`            | Pack d'icônes (pour `p-datepicker`, `p-select`, etc.)                           |
| `@angular/animations`   | Requis par PrimeNG pour les transitions (overlays, accordions, etc.)            |
| `@angular/cdk`          | Requis par PrimeNG (focus management, overlay positioning, etc.)                |
| `provideAnimationsAsync()` | Active les animations Angular en mode lazy (recommandé)                      |

L'oubli de l'une de ces dépendances ou de `provideAnimationsAsync()` produit des erreurs console au runtime.

---

## Utiliser les tokens de design (sans PrimeNG)

```typescript
import { InlogTokens, colors, primary } from '@inlog/ds';

InlogTokens.colors.blue[500];   // "#4667e5"
primary.DEFAULT;                 // "#4667e5"
primary.hover;                   // "#3c58c3"
colors.status.success.bg;        // "#f0fdf4"
```

---

## Types TypeScript

```typescript
import type { InlogSeverity, InlogSize, InlogVariant } from '@inlog/ds';

const severity: InlogSeverity = 'success'; // 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast'
const size: InlogSize = 'normal';           // 'small' | 'normal' | 'large'
const variant: InlogVariant = 'outlined';   // 'filled' | 'outlined' | 'text' | 'link'
```

---

## Publier une nouvelle version

> **Important** : la lib se distribue via **tag GitHub** (`github:alexandrevallet/design-system#vX.Y.Z`), pas via npm registry. Le dossier `dist/` doit donc être **commité** dans le repo pour que l'install fonctionne.

```bash
# 1. Builder la lib en local
npm run build

# 2. Commiter dist/ + les modifs
git add -A
git commit -m "release: v1.2.0"

# 3. Taguer et pousser
npm version 1.2.0 --no-git-tag-version   # met à jour package.json
git add package.json
git commit -m "chore: bump version to 1.2.0"
git tag v1.2.0
git push origin main --tags
```

Les consommateurs utilisent ensuite `npm install github:alexandrevallet/design-system#v1.2.0`.

---

## Mise à jour du thème

Le thème est généré par le **PrimeNG ThemeDesigner**. Pour le mettre à jour :

1. Exporter le nouveau preset depuis [designer.primeng.org](https://designer.primeng.org/)
2. Remplacer les fichiers dans `src/theme/inlog/`
3. `npm run build` pour régénérer `dist/`
4. Commiter et taguer la nouvelle version (voir section ci-dessus)

---

## Compatibilité

| Dépendance       | Version minimale |
|------------------|------------------|
| Angular          | ≥ 19.0           |
| PrimeNG          | ≥ 19.0           |
| @primeuix/themes | ≥ 1.0.0          |
| TypeScript       | ≥ 5.4            |
| Node.js          | ≥ 20.0           |

---

## Changelog

| Version | Date       | Description                                                       |
|---------|------------|-------------------------------------------------------------------|
| 1.2.0   | 2026-05-19 | Fix install via tag GitHub (retire `prepare` script qui appelait `tsc`). Ajoute `sideEffects: false`. Bump peer `@primeuix/themes` à `>=1.0.0`. |
| 1.1.0   | 2026-04-20 | Ajout `exports` map et types secondaires (`/tokens`, `/theme`).   |
| 1.0.0   | 2026-04-17 | Version initiale — thème INLOG + tokens.                          |

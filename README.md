# @inlog/ds

**Design System INLOG** — Thème PrimeNG et tokens de design pour les applications Angular du groupe INLOG.

---

## Installation

### Prérequis — Configurer le registry

GitHub Packages nécessite une authentification même pour lire un package privé.
Chaque développeur fait cette opération **une seule fois** sur sa machine.

**1. Créer un Personal Access Token GitHub**

→ Aller sur [github.com/settings/tokens/new](https://github.com/settings/tokens/new)
→ Cocher uniquement **`read:packages`**
→ Copier le token généré (`ghp_xxxxxxxxxxxx`)

**2. Créer `.npmrc` à la racine de son projet Angular**

```ini
# .npmrc  (ne pas commiter avec le vrai token !)
@inlog:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=ghp_VOTRE_TOKEN
```

> **⚠️ Sécurité** — Ajouter `.npmrc` au `.gitignore` du projet,
> ou utiliser la variable d'environnement `${NPM_TOKEN}` à la place du token en dur.

**3. Installer le package**

```bash
npm install @inlog/ds
```

---

## Utilisation

### Appliquer le thème PrimeNG

Dans `app.config.ts` :

```typescript
import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import { GroupTheme } from '@inlog/ds';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: GroupTheme,
        options: { darkModeSelector: false }
      }
    })
  ]
};
```

C'est tout. Tous les composants PrimeNG utilisent automatiquement les couleurs et styles INLOG.

---

### Utiliser les tokens de design

Les tokens sont utilisables **sans PrimeNG** — dans des styles CSS-in-JS, Tailwind, composants custom, etc.

```typescript
// Import de l'objet complet
import { InlogTokens } from '@inlog/ds';

InlogTokens.colors.blue[500]   // "#4667e5" — Bleu INLOG principal
InlogTokens.status.danger.bg   // "#fef2f2"

// Import sélectif
import { colors, primary, status, typography, spacing } from '@inlog/ds';
// ou depuis le sous-chemin dédié
import { colors, primary } from '@inlog/ds/tokens';

colors.blue[500]          // "#4667e5"
primary.DEFAULT            // "#4667e5"
primary.hover              // "#3c58c3"
status.success.bg          // "#f0fdf4"
typography.fontSize.base   // "0.875rem"
spacing[4]                 // "1rem"
```

---

### Utiliser les types TypeScript

```typescript
import type { InlogSeverity, InlogSize, InlogVariant } from '@inlog/ds';

severity: InlogSeverity = 'success'; // 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast'
size: InlogSize = 'normal';           // 'small' | 'normal' | 'large'
variant: InlogVariant = 'outlined';   // 'filled' | 'outlined' | 'text' | 'link'
```

---

## Publier une nouvelle version

### Depuis GitHub (recommandé — CI/CD automatique)

```bash
# S'assurer que le code est committé et poussé
git add .
git commit -m "feat: mise à jour du thème v1.1.0"
git push

# Créer le tag → déclenche automatiquement le workflow GitHub Actions
git tag v1.1.0
git push origin v1.1.0
```

Le workflow `.github/workflows/publish.yml` se déclenche et publie automatiquement sur GitHub Packages.

---

### Manuellement depuis le terminal

```bash
# S'authentifier (une seule fois)
npm login --registry=https://npm.pkg.github.com --scope=@inlog
# → Username : votre login GitHub
# → Password : votre Personal Access Token (ghp_xxx) avec scope "write:packages"

# Mettre à jour la version dans package.json
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0

# Publier
npm publish
```

---

## Mise à jour du thème

Le thème est généré par le **PrimeNG ThemeDesigner**. Pour le mettre à jour :

1. Exporter le nouveau preset depuis [designer.primeng.org](https://designer.primeng.org/)
2. Remplacer les fichiers dans `src/theme/inlog/`
3. Mettre à jour la version dans `package.json`
4. Pousser et taguer → la CI publie automatiquement

---

## Structure du package

```
@inlog/ds/
├── .github/
│   └── workflows/
│       └── publish.yml       ← CI/CD — publication automatique sur tag
├── src/
│   ├── index.ts              ← Point d'entrée public (@inlog/ds)
│   ├── theme/
│   │   ├── group-theme.ts    ← Export du preset PrimeNG
│   │   └── inlog/            ← 91 fichiers générés par ThemeDesigner
│   │       ├── index.ts
│   │       ├── base.ts       ← Tokens primitifs + sémantiques
│   │       ├── button.ts
│   │       └── ...
│   └── tokens/
│       └── index.ts          ← Design tokens (@inlog/ds/tokens)
├── .npmrc                    ← Registry GitHub Packages (publishing)
├── npmrc-for-teams.txt       ← Template .npmrc à distribuer aux équipes
├── package.json
├── tsconfig.json
└── README.md
```

---

## Compatibilité

| Dépendance       | Version minimale |
|------------------|-----------------|
| Angular          | ≥ 19.0          |
| PrimeNG          | ≥ 19.0          |
| @primeuix/themes | ≥ 0.7.0         |
| TypeScript       | ≥ 5.4           |
| Node.js          | ≥ 20.0          |

---

## Changelog

| Version | Date       | Description                              |
|---------|------------|------------------------------------------|
| 1.0.0   | 2026-04-17 | Version initiale — thème INLOG + tokens  |

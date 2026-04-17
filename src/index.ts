/**
 * @inlog/ds — Design System INLOG
 *
 * Point d'entrée public du package.
 *
 * @example Utilisation dans un projet Angular + PrimeNG
 *   import { GroupTheme } from '@inlog/ds';
 *   import { InlogTokens }  from '@inlog/ds';
 *
 * @example Tokens seuls (sans PrimeNG)
 *   import { colors, primary, status } from '@inlog/ds/tokens';
 */

// ─── Thème PrimeNG ────────────────────────────────────────────────────────────

/**
 * Preset PrimeNG pour le Design System INLOG.
 * À passer dans `providePrimeNG({ theme: { preset: GroupTheme } })`.
 */
export { GroupTheme } from './theme/group-theme';

// ─── Design Tokens ────────────────────────────────────────────────────────────

/**
 * Objet regroupant tous les tokens de design (couleurs, typographie, espacements…).
 * Utilisable sans PrimeNG.
 */
export { tokens as InlogTokens, default as tokens } from './tokens/index';

/**
 * Tokens individuels pour import sélectif.
 */
export {
  colors,
  primary,
  status,
  typography,
  spacing,
  borderRadius,
  border,
  shadow,
  zIndex,
} from './tokens/index';

// ─── Types utilitaires ────────────────────────────────────────────────────────

/** Sévérités disponibles pour les composants PrimeNG (Tag, Badge, Button…) */
export type InlogSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

/** Tailles disponibles pour les composants PrimeNG */
export type InlogSize = 'small' | 'normal' | 'large';

/** Variantes de bouton */
export type InlogVariant = 'filled' | 'outlined' | 'text' | 'link';

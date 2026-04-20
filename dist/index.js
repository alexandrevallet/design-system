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
export { colors, primary, status, typography, spacing, borderRadius, border, shadow, zIndex, } from './tokens/index';
//# sourceMappingURL=index.js.map
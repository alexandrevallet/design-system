/**
 * @inlog/ds — Design Tokens
 *
 * Tokens de design extraits du thème INLOG.
 * Utilisables dans n'importe quel contexte (Angular, React, CSS-in-JS, Tailwind…)
 * sans dépendance à PrimeNG.
 *
 * @example
 *   import { colors, spacing, typography } from '@inlog/ds/tokens';
 *   const primary = colors.blue[500]; // "#4667e5"
 */

// ─── Couleurs primitives ──────────────────────────────────────────────────────

export const colors = {

  /** Couleur primaire INLOG — Bleu corporate */
  blue: {
    50:  '#f6f7fe',
    100: '#d3dbf9',
    200: '#afbef4',
    300: '#8ca1ef',
    400: '#6984ea',
    500: '#4667e5',  // ← Bleu INLOG principal
    600: '#3c58c3',
    700: '#3148a0',
    800: '#27397e',
    900: '#1c295c',
    950: '#121a39',
  },

  /** Nuances de gris — Textes, bordures, fonds */
  gray: {
    50:  '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  /** Succès — Vert */
  green: {
    50:  '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },

  /** Danger / Erreur — Rouge */
  red: {
    50:  '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  /** Avertissement — Orange */
  orange: {
    50:  '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },

  /** Info — Cyan */
  cyan: {
    50:  '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344',
  },
} as const;

// ─── Alias sémantiques ────────────────────────────────────────────────────────

/** Couleur primaire directement accessible */
export const primary = {
  DEFAULT: colors.blue[500],
  light:   colors.blue[50],
  hover:   colors.blue[600],
  active:  colors.blue[700],
  text:    colors.blue[700],
} as const;

/** Couleurs de statut */
export const status = {
  success: { DEFAULT: colors.green[500],  bg: colors.green[50],  text: colors.green[700]  },
  danger:  { DEFAULT: colors.red[500],    bg: colors.red[50],    text: colors.red[700]    },
  warning: { DEFAULT: colors.orange[500], bg: colors.orange[50], text: colors.orange[700] },
  info:    { DEFAULT: colors.cyan[500],   bg: colors.cyan[50],   text: colors.cyan[700]   },
} as const;

// ─── Typographie ──────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"Cascadia Code", "Fira Code", "Courier New", monospace',
  },
  fontSize: {
    xs:   '0.75rem',    // 12px
    sm:   '0.8125rem',  // 13px
    base: '0.875rem',   // 14px
    md:   '0.9375rem',  // 15px
    lg:   '1rem',       // 16px
    xl:   '1.125rem',   // 18px
    '2xl':'1.25rem',    // 20px
    '3xl':'1.5rem',     // 24px
    '4xl':'1.875rem',   // 30px
  },
  fontWeight: {
    normal:    '400',
    medium:    '500',
    semibold:  '600',
    bold:      '700',
  },
  lineHeight: {
    tight:   '1.25',
    snug:    '1.375',
    normal:  '1.5',
    relaxed: '1.625',
    loose:   '2',
  },
} as const;

// ─── Espacement ───────────────────────────────────────────────────────────────

export const spacing = {
  0:    '0',
  1:    '0.25rem',   // 4px
  2:    '0.5rem',    // 8px
  3:    '0.75rem',   // 12px
  4:    '1rem',      // 16px
  5:    '1.25rem',   // 20px
  6:    '1.5rem',    // 24px
  8:    '2rem',      // 32px
  10:   '2.5rem',    // 40px
  12:   '3rem',      // 48px
  16:   '4rem',      // 64px
} as const;

// ─── Bordures & Rayons ────────────────────────────────────────────────────────

export const borderRadius = {
  none:  '0',
  sm:    '4px',
  DEFAULT:'6px',
  md:    '8px',
  lg:    '10px',
  xl:    '12px',
  full:  '9999px',
} as const;

export const border = {
  color:       colors.gray[200],
  colorHover:  colors.gray[300],
  width:       '1px',
  style:       'solid',
} as const;

// ─── Ombres ───────────────────────────────────────────────────────────────────

export const shadow = {
  sm:  '0 1px 2px 0 rgba(0,0,0,0.05)',
  DEFAULT:'0 1px 3px 0 rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.10)',
  md:  '0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)',
  lg:  '0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)',
  xl:  '0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.10)',
} as const;

// ─── Z-index ──────────────────────────────────────────────────────────────────

export const zIndex = {
  dropdown: 1000,
  sticky:   1020,
  overlay:  1030,
  modal:    1040,
  toast:    1050,
  tooltip:  1060,
} as const;

// ─── Export regroupé ─────────────────────────────────────────────────────────

export const tokens = {
  colors,
  primary,
  status,
  typography,
  spacing,
  borderRadius,
  border,
  shadow,
  zIndex,
} as const;

export default tokens;

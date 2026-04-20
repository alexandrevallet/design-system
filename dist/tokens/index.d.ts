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
export declare const colors: {
    /** Couleur primaire INLOG — Bleu corporate */
    readonly blue: {
        readonly 50: "#f6f7fe";
        readonly 100: "#d3dbf9";
        readonly 200: "#afbef4";
        readonly 300: "#8ca1ef";
        readonly 400: "#6984ea";
        readonly 500: "#4667e5";
        readonly 600: "#3c58c3";
        readonly 700: "#3148a0";
        readonly 800: "#27397e";
        readonly 900: "#1c295c";
        readonly 950: "#121a39";
    };
    /** Nuances de gris — Textes, bordures, fonds */
    readonly gray: {
        readonly 50: "#f9fafb";
        readonly 100: "#f3f4f6";
        readonly 200: "#e5e7eb";
        readonly 300: "#d1d5db";
        readonly 400: "#9ca3af";
        readonly 500: "#6b7280";
        readonly 600: "#4b5563";
        readonly 700: "#374151";
        readonly 800: "#1f2937";
        readonly 900: "#111827";
        readonly 950: "#030712";
    };
    /** Succès — Vert */
    readonly green: {
        readonly 50: "#f0fdf4";
        readonly 100: "#dcfce7";
        readonly 200: "#bbf7d0";
        readonly 300: "#86efac";
        readonly 400: "#4ade80";
        readonly 500: "#22c55e";
        readonly 600: "#16a34a";
        readonly 700: "#15803d";
        readonly 800: "#166534";
        readonly 900: "#14532d";
        readonly 950: "#052e16";
    };
    /** Danger / Erreur — Rouge */
    readonly red: {
        readonly 50: "#fef2f2";
        readonly 100: "#fee2e2";
        readonly 200: "#fecaca";
        readonly 300: "#fca5a5";
        readonly 400: "#f87171";
        readonly 500: "#ef4444";
        readonly 600: "#dc2626";
        readonly 700: "#b91c1c";
        readonly 800: "#991b1b";
        readonly 900: "#7f1d1d";
        readonly 950: "#450a0a";
    };
    /** Avertissement — Orange */
    readonly orange: {
        readonly 50: "#fff7ed";
        readonly 100: "#ffedd5";
        readonly 200: "#fed7aa";
        readonly 300: "#fdba74";
        readonly 400: "#fb923c";
        readonly 500: "#f97316";
        readonly 600: "#ea580c";
        readonly 700: "#c2410c";
        readonly 800: "#9a3412";
        readonly 900: "#7c2d12";
        readonly 950: "#431407";
    };
    /** Info — Cyan */
    readonly cyan: {
        readonly 50: "#ecfeff";
        readonly 100: "#cffafe";
        readonly 200: "#a5f3fc";
        readonly 300: "#67e8f9";
        readonly 400: "#22d3ee";
        readonly 500: "#06b6d4";
        readonly 600: "#0891b2";
        readonly 700: "#0e7490";
        readonly 800: "#155e75";
        readonly 900: "#164e63";
        readonly 950: "#083344";
    };
};
/** Couleur primaire directement accessible */
export declare const primary: {
    readonly DEFAULT: "#4667e5";
    readonly light: "#f6f7fe";
    readonly hover: "#3c58c3";
    readonly active: "#3148a0";
    readonly text: "#3148a0";
};
/** Couleurs de statut */
export declare const status: {
    readonly success: {
        readonly DEFAULT: "#22c55e";
        readonly bg: "#f0fdf4";
        readonly text: "#15803d";
    };
    readonly danger: {
        readonly DEFAULT: "#ef4444";
        readonly bg: "#fef2f2";
        readonly text: "#b91c1c";
    };
    readonly warning: {
        readonly DEFAULT: "#f97316";
        readonly bg: "#fff7ed";
        readonly text: "#c2410c";
    };
    readonly info: {
        readonly DEFAULT: "#06b6d4";
        readonly bg: "#ecfeff";
        readonly text: "#0e7490";
    };
};
export declare const typography: {
    readonly fontFamily: {
        readonly sans: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";
        readonly mono: "\"Cascadia Code\", \"Fira Code\", \"Courier New\", monospace";
    };
    readonly fontSize: {
        readonly xs: "0.75rem";
        readonly sm: "0.8125rem";
        readonly base: "0.875rem";
        readonly md: "0.9375rem";
        readonly lg: "1rem";
        readonly xl: "1.125rem";
        readonly '2xl': "1.25rem";
        readonly '3xl': "1.5rem";
        readonly '4xl': "1.875rem";
    };
    readonly fontWeight: {
        readonly normal: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
    };
    readonly lineHeight: {
        readonly tight: "1.25";
        readonly snug: "1.375";
        readonly normal: "1.5";
        readonly relaxed: "1.625";
        readonly loose: "2";
    };
};
export declare const spacing: {
    readonly 0: "0";
    readonly 1: "0.25rem";
    readonly 2: "0.5rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 16: "4rem";
};
export declare const borderRadius: {
    readonly none: "0";
    readonly sm: "4px";
    readonly DEFAULT: "6px";
    readonly md: "8px";
    readonly lg: "10px";
    readonly xl: "12px";
    readonly full: "9999px";
};
export declare const border: {
    readonly color: "#e5e7eb";
    readonly colorHover: "#d1d5db";
    readonly width: "1px";
    readonly style: "solid";
};
export declare const shadow: {
    readonly sm: "0 1px 2px 0 rgba(0,0,0,0.05)";
    readonly DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.10)";
    readonly md: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)";
    readonly lg: "0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)";
    readonly xl: "0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.10)";
};
export declare const zIndex: {
    readonly dropdown: 1000;
    readonly sticky: 1020;
    readonly overlay: 1030;
    readonly modal: 1040;
    readonly toast: 1050;
    readonly tooltip: 1060;
};
export declare const tokens: {
    readonly colors: {
        /** Couleur primaire INLOG — Bleu corporate */
        readonly blue: {
            readonly 50: "#f6f7fe";
            readonly 100: "#d3dbf9";
            readonly 200: "#afbef4";
            readonly 300: "#8ca1ef";
            readonly 400: "#6984ea";
            readonly 500: "#4667e5";
            readonly 600: "#3c58c3";
            readonly 700: "#3148a0";
            readonly 800: "#27397e";
            readonly 900: "#1c295c";
            readonly 950: "#121a39";
        };
        /** Nuances de gris — Textes, bordures, fonds */
        readonly gray: {
            readonly 50: "#f9fafb";
            readonly 100: "#f3f4f6";
            readonly 200: "#e5e7eb";
            readonly 300: "#d1d5db";
            readonly 400: "#9ca3af";
            readonly 500: "#6b7280";
            readonly 600: "#4b5563";
            readonly 700: "#374151";
            readonly 800: "#1f2937";
            readonly 900: "#111827";
            readonly 950: "#030712";
        };
        /** Succès — Vert */
        readonly green: {
            readonly 50: "#f0fdf4";
            readonly 100: "#dcfce7";
            readonly 200: "#bbf7d0";
            readonly 300: "#86efac";
            readonly 400: "#4ade80";
            readonly 500: "#22c55e";
            readonly 600: "#16a34a";
            readonly 700: "#15803d";
            readonly 800: "#166534";
            readonly 900: "#14532d";
            readonly 950: "#052e16";
        };
        /** Danger / Erreur — Rouge */
        readonly red: {
            readonly 50: "#fef2f2";
            readonly 100: "#fee2e2";
            readonly 200: "#fecaca";
            readonly 300: "#fca5a5";
            readonly 400: "#f87171";
            readonly 500: "#ef4444";
            readonly 600: "#dc2626";
            readonly 700: "#b91c1c";
            readonly 800: "#991b1b";
            readonly 900: "#7f1d1d";
            readonly 950: "#450a0a";
        };
        /** Avertissement — Orange */
        readonly orange: {
            readonly 50: "#fff7ed";
            readonly 100: "#ffedd5";
            readonly 200: "#fed7aa";
            readonly 300: "#fdba74";
            readonly 400: "#fb923c";
            readonly 500: "#f97316";
            readonly 600: "#ea580c";
            readonly 700: "#c2410c";
            readonly 800: "#9a3412";
            readonly 900: "#7c2d12";
            readonly 950: "#431407";
        };
        /** Info — Cyan */
        readonly cyan: {
            readonly 50: "#ecfeff";
            readonly 100: "#cffafe";
            readonly 200: "#a5f3fc";
            readonly 300: "#67e8f9";
            readonly 400: "#22d3ee";
            readonly 500: "#06b6d4";
            readonly 600: "#0891b2";
            readonly 700: "#0e7490";
            readonly 800: "#155e75";
            readonly 900: "#164e63";
            readonly 950: "#083344";
        };
    };
    readonly primary: {
        readonly DEFAULT: "#4667e5";
        readonly light: "#f6f7fe";
        readonly hover: "#3c58c3";
        readonly active: "#3148a0";
        readonly text: "#3148a0";
    };
    readonly status: {
        readonly success: {
            readonly DEFAULT: "#22c55e";
            readonly bg: "#f0fdf4";
            readonly text: "#15803d";
        };
        readonly danger: {
            readonly DEFAULT: "#ef4444";
            readonly bg: "#fef2f2";
            readonly text: "#b91c1c";
        };
        readonly warning: {
            readonly DEFAULT: "#f97316";
            readonly bg: "#fff7ed";
            readonly text: "#c2410c";
        };
        readonly info: {
            readonly DEFAULT: "#06b6d4";
            readonly bg: "#ecfeff";
            readonly text: "#0e7490";
        };
    };
    readonly typography: {
        readonly fontFamily: {
            readonly sans: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";
            readonly mono: "\"Cascadia Code\", \"Fira Code\", \"Courier New\", monospace";
        };
        readonly fontSize: {
            readonly xs: "0.75rem";
            readonly sm: "0.8125rem";
            readonly base: "0.875rem";
            readonly md: "0.9375rem";
            readonly lg: "1rem";
            readonly xl: "1.125rem";
            readonly '2xl': "1.25rem";
            readonly '3xl': "1.5rem";
            readonly '4xl': "1.875rem";
        };
        readonly fontWeight: {
            readonly normal: "400";
            readonly medium: "500";
            readonly semibold: "600";
            readonly bold: "700";
        };
        readonly lineHeight: {
            readonly tight: "1.25";
            readonly snug: "1.375";
            readonly normal: "1.5";
            readonly relaxed: "1.625";
            readonly loose: "2";
        };
    };
    readonly spacing: {
        readonly 0: "0";
        readonly 1: "0.25rem";
        readonly 2: "0.5rem";
        readonly 3: "0.75rem";
        readonly 4: "1rem";
        readonly 5: "1.25rem";
        readonly 6: "1.5rem";
        readonly 8: "2rem";
        readonly 10: "2.5rem";
        readonly 12: "3rem";
        readonly 16: "4rem";
    };
    readonly borderRadius: {
        readonly none: "0";
        readonly sm: "4px";
        readonly DEFAULT: "6px";
        readonly md: "8px";
        readonly lg: "10px";
        readonly xl: "12px";
        readonly full: "9999px";
    };
    readonly border: {
        readonly color: "#e5e7eb";
        readonly colorHover: "#d1d5db";
        readonly width: "1px";
        readonly style: "solid";
    };
    readonly shadow: {
        readonly sm: "0 1px 2px 0 rgba(0,0,0,0.05)";
        readonly DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.10)";
        readonly md: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)";
        readonly lg: "0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)";
        readonly xl: "0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.10)";
    };
    readonly zIndex: {
        readonly dropdown: 1000;
        readonly sticky: 1020;
        readonly overlay: 1030;
        readonly modal: 1040;
        readonly toast: 1050;
        readonly tooltip: 1060;
    };
};
export default tokens;
//# sourceMappingURL=index.d.ts.map
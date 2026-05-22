// Shared Tailwind theme for Rivigalin Kennel
// Loaded after the Tailwind CDN script in every page.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-container": "#725b00",
        "on-background": "#1b1c1a",
        "surface-container-high": "#eae8e4",
        "surface-variant": "#e4e2de",
        "tertiary-container": "#e7d5be",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#8ad3d5",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "primary-container": "#f9d461",
        "on-surface-variant": "#4d4636",
        "on-primary-fixed-variant": "#574500",
        "primary-fixed": "#ffe086",
        "teal-dark": "#2E5C5E",
        "primary": "#735c00",
        "surface-tint": "#735c00",
        "on-primary-fixed": "#231b00",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#1b1c1a",
        "on-tertiary-fixed": "#231a0c",
        "on-error-container": "#93000a",
        "tertiary-fixed": "#f2e0c9",
        "secondary": "#14696b",
        "inverse-surface": "#30312e",
        "outline-variant": "#d0c6b0",
        "background": "#fbf9f5",
        "on-tertiary-fixed-variant": "#514534",
        "surface-dim": "#dbdad6",
        "surface": "#fbf9f5",
        "surface-container-low": "#f5f3ef",
        "tertiary-fixed-dim": "#d5c4ae",
        "tertiary": "#695c4a",
        "inverse-primary": "#e7c352",
        "surface-container-highest": "#e4e2de",
        "on-secondary-fixed-variant": "#004f51",
        "surface-bright": "#fbf9f5",
        "on-tertiary": "#ffffff",
        "on-secondary-container": "#1e6f71",
        "earth-gray": "#918370",
        "on-tertiary-container": "#685c4a",
        "secondary-fixed": "#a5eff1",
        "surface-container": "#efeeea",
        "inverse-on-surface": "#f2f0ed",
        "on-secondary-fixed": "#002021",
        "error": "#ba1a1a",
        "primary-fixed-dim": "#e7c352",
        "secondary-container": "#a5eff1",
        "paw-pink": "#F8B4B4",
        "outline": "#7e7664",
        "sun-yellow-light": "#FEF3C7",
        "error-container": "#ffdad6"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
        blob: "40% 60% 70% 30% / 40% 50% 60% 50%",
        "blob-2": "60% 40% 30% 70% / 60% 30% 70% 40%"
      },
      spacing: {
        gutter: "24px",
        "margin-mobile": "20px",
        "container-max": "1280px",
        "margin-desktop": "64px",
        unit: "8px",
        section: "120px",
        "section-y": "80px"
      },
      fontFamily: {
        "label-md": ["Work Sans", "sans-serif"],
        "caption": ["Be Vietnam Pro", "sans-serif"],
        "body-md": ["Be Vietnam Pro", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Be Vietnam Pro", "sans-serif"]
      },
      fontSize: {
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
        "caption": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-md": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-lg": ["40px", { lineHeight: "48px", fontWeight: "700" }],
        "display-lg": ["56px", { lineHeight: "64px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }]
      },
      boxShadow: {
        ambient: "0 10px 40px -10px rgba(107, 94, 76, 0.08)",
        "ambient-hover": "0 20px 50px -10px rgba(107, 94, 76, 0.12)"
      }
    }
  }
};

import type { Config } from "tailwindcss"

const config = {
  content: [
    './src/components/**/*.{ts,tsx}',
	],
  prefix: "tb-",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--tb-border))",
        input: "hsl(var(--tb-input))",
        ring: "hsl(var(--tb-ring))",
        background: "hsl(var(--tb-background))",
        foreground: "hsl(var(--tb-foreground))",
        primary: {
          DEFAULT: "hsl(var(--tb-primary))",
          foreground: "hsl(var(--tb-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--tb-secondary))",
          foreground: "hsl(var(--tb-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--tb-destructive))",
          foreground: "hsl(var(--tb-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--tb-muted))",
          foreground: "hsl(var(--tb-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--tb-accent))",
          foreground: "hsl(var(--tb-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--tb-popover))",
          foreground: "hsl(var(--tb-popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--tb-card))",
          foreground: "hsl(var(--tb-card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--tb-radius)",
        md: "calc(var(--tb-radius) - 2px)",
        sm: "calc(var(--tb-radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--tb-radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--tb-radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
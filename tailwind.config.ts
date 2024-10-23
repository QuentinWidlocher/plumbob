import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";
import { Config } from "tailwindcss";

const base = {
  "100": "#E1F3FE",
  "200": "#C0E0F3",
  "300": "#A1D5FA",
  "400": "#82A8DC",
  "500": "#6188D0",
  "600": "#5475BD",
  "700": "#304E7F",
  "800": "#1D2F4D",
} as const


export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans : ["The Sims Sans Bold", "Inter", "sans-serif"],
        title : ["Sims LLHP", "Inter", "sans-serif"],
      },
      colors: {
        "box-border-darker": base["800"],
        "box-border-dark": base["700"],
        "box-border-light": base["600"],
        "box-content-dark": base["500"],
        "box-content-light": base["300"],
        base,
        mood: {
          good: {
            border: "#86C29D",
            bgbottom: "#AAE8C2",
            bgtop: "#E8F7F6",
          },
          bad: {
            border: "#CD7E7E",
            bgbottom: "#EBACAC",
            bgtop: "#F7E8ED",
          },
          neutral: {
            border: "#7C91CB",
            bgbottom: "#B0CBFB",
            bgtop: "#DDEBFD",
          }
        }
      }
    }
  },
  daisyui: {
    themes: [
      {
        default: {
          ...themes.light,
          "primary": "#6188d0",
          "base-700": "#304E7F",
          "base-600": "#5475BD",
          "base-500": "#6188D0",
          "base-400": "#82A8DC",
          "base-300": "#A1D5FA",
          "base-200": "#C0E0F3",
          "base-100": "#E1F3FE",
        },
      },
    ],
  },
  plugins: [
    daisyui
  ]
} satisfies Config;

import system from "@theme-ui/preset-system"
import { merge } from "theme-ui"

import "@fontsource/saira/700.css"
import "@fontsource/saira/400.css"

import prismPreset from "@theme-ui/prism/presets/prism-coy.json"

const theme = merge(system, {
  colors: {
    primary: "#6d2f9c",
    secondary: "#ffae1e",
  },
  fontSizes: [12, 14, 16, 22, 24, 32, 48, 64, 96],
  fonts: {
    heading: `'Saira', sans-serif`,
    body: `'Saira', sans-serif`,
  },
  fontWeights: {
    heading: 700,
    body: 400,
  },
  sizes: {
    container: 960,
  },
  layout: {
    header: {},
    main: {},
    footer: { textAlign: "center" },
    container: {
      maxWidth: "container",
      mx: "auto",
      px: 3,
    },
  },
  styles: {
    a: {
      textDecoration: "none",
      ":hover": {
        color: "secondary",
      },
    },
    p: {
      fontSize: 3,
    },
    code: {
      ...prismPreset,
      borderRadius: 4,
    },
    inlineCode: {
      color: "primary",
    },
  },
})

export default theme

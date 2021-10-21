import base from "@theme-ui/preset-base"
import { merge } from "theme-ui"

const theme = merge(base, {
  fonts: {
    // body: "Montserrat, sans-serif",
  },
  sizes: {
    container: 480,
  },
  layout: {
    header: {},
    main: {},
    footer: {},
    container: {
      maxWidth: "container",
      mx: "auto",
      px: 3,
    },
  },
  styles: {
    a: {
      textDecoration: "none",
    },
  },
})

export default theme

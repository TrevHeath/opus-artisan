import Typography from "typography"

import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    color: "white",
  },
  h1: {
    color: "white",
    fontWeight: 400,
    lineHeight: 1.4,
  },
  a: {
    color: "white",
    textDecoration: "none",
    textShadow: "none",
    backgroundImage: "none",
  },
})

const typography = new Typography(lincolnTheme)

export default typography

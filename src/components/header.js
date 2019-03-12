import PropTypes from "prop-types"
import React from "react"
import { LogoImage } from "./logoImage"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        width: "100%",
        textAlign: "center",
        position: "absolute",
        right: 0,
        left: 0,
      }}
    >
      <LogoImage />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

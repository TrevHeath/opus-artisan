import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner};
  }
`

const BgImage = styled(Img)`
  position: absolute !important;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  margin-top: -160px;
  height: auto;
  & > img {
    object-fit: !important;
    object-position: center bottom !important;
    object-repeat: ;
  }
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: black;
  }
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <BgImage fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)

export default Image

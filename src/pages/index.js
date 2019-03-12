import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Header from "../components/header"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const Button = styled.a`
  background-color: #744d26;
  padding: 10px 25px;
  color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`furniture`, `ping pong`, `wood`]} />
    <Header />
    <Image />
    <Container>
      <div>
        <h1 style={{ marginBottom: "3rem" }}>
          Re-imagine your workspace with a <br /> handcrafted ping pong table
        </h1>
        <Button
          target="_blank"
          href="https://www.etsy.com/listing/636680723/custom-wood-ping-pong-table-table-tennis?ref=shop_home_feat_1&frs=1"
        >
          Order your table
        </Button>
      </div>
    </Container>
  </Layout>
)

export default IndexPage

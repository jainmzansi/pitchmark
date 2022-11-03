import * as React from "react"
import Layout from "../components/pagestructure/Layout"
import Container from "../components/pagestructure/Container"

const IndexPage = () => {
  return (
    <Layout>
    <Container>
  <h1>hello world</h1>
    </Container>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

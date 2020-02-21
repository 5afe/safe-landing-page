import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Heading from '../components/ui/Heading'

interface IndexPageProps {
  location: {
    pathname: string
  }
  data: {
    image: {
      childImageSharp: {
        fluid: any
      }
    }
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgb(0, 53, 128);
`

export default ({ data, location }: IndexPageProps) => {
  return (
    <Layout>
      <Wrapper>
        <Heading>404 Page not found!</Heading>
      </Wrapper>
    </Layout>
  )
}
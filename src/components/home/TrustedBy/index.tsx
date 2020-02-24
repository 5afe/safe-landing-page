import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'

const Container = styled.section`
  padding-top: 50px;
  padding-bottom: 315px;
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const LCol = styled.div`
  flex-basis: 16%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 65%;
  width: 100%;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const TrustedBy = () => {
  const data = useStaticQuery(sectionQuery)

  return (
    <Container>
      <SWrapper>
        <LCol>
          <SHeading>Trusted by</SHeading>
        </LCol>
        <RCol></RCol>
      </SWrapper>
    </Container>
  )
}

const sectionQuery = graphql`
  query {
    aragon: file(relativePath: { eq: "aragon.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    consensys: file(relativePath: { eq: "consensys.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    ethhub: file(relativePath: { eq: "ethhub.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    kyber: file(relativePath: { eq: "kyber.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    pepo: file(relativePath: { eq: "pepo.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    protofire: file(relativePath: { eq: "protofire.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    requestNet: file(relativePath: { eq: "requestnet.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    rv: file(relativePath: { eq: "rv.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    unilogin: file(relativePath: { eq: "unilogin.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default TrustedBy

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'

const SRuntimeLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 34px;
`

const SImg = styled(Img)`
  width: 169px;
  display: flex;
  justify-content: flex-end;
`

const Container = styled.div`
  padding: 112px 0;
  background-color: ${p => p.theme.palette.greyBackground};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const LRow = styled.div`
  margin-top: 60px;
`

const LCol = styled.div`
  flex-basis: 25%;
`

const RCol = styled.div`
  max-width: 880px;
`

const SubCol = styled.p`
  flex-basis: 43%;
  margin-top: 38px;
  letter-spacing: 0.36px;
  font-size: 16px;
  line-height: normal;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const FormallyVerified = () => (
  <StaticQuery
    query={graphql`
      query {
        rv: file(relativePath: { eq: "runtime-verification-logo.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
  >
    {data => (
      <Container>
        <ContentWrapper>
          <SRuntimeLogo>
            <SImg fluid={data.rv.childImageSharp.fluid} />
          </SRuntimeLogo>
          <Row>
            <LCol>
              <SHeading>Formally verified</SHeading>
              <LRow>
                <ButtonLink url="/" colorScheme="navy">
                  Formal verification report
                </ButtonLink>
              </LRow>
            </LCol>
            <RCol>
              <Row>
                <SHeading>
                  The Gnosis Safe core smart contracts have passed the highest
                  possible security standard in the industry: Formal
                  Verification.
                </SHeading>
              </Row>
              <Row>
                <SubCol>
                  This in-depth review and testing of the codebase was conducted
                  by Runtime Verification, a trusted pioneer of formal
                  verification, over a six-month period.
                </SubCol>
                <SubCol>
                  The Gnosis Safe Multisig is the only formally verified smart
                  contract-based wallet solution.
                </SubCol>
              </Row>
            </RCol>
          </Row>
        </ContentWrapper>
      </Container>
    )}
  </StaticQuery>
)

export default FormallyVerified

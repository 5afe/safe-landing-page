import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'

const SContentWrapper = styled(ContentWrapper)`
  color: ${p => p.theme.palette.navy};
`

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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const SecondRow = styled(Row)`
  margin-top: 38px;
`

const LCol = styled.div`
  flex-basis: 25%;
`

const RCol = styled.div`
  flex-basis: 72.5%;
`

const Text = styled.p`
  flex-basis: 43%;
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
      <SContentWrapper>
        <SRuntimeLogo>
          <SImg fluid={data.rv.childImageSharp.fluid} />
        </SRuntimeLogo>
        <Row>
          <LCol>
            <SHeading>Formally verified</SHeading>
          </LCol>
          <RCol>
            <SHeading>
              The Gnosis Safe core smart contracts have passed the highest
              possible security standard in the industry: Formal Verification.
            </SHeading>
          </RCol>
        </Row>
        <SecondRow>
          <LCol>
            <ButtonLink
              url="https://github.com/gnosis/safe-contracts/blob/78494bcdbc61b3db52308a25f0556c42cf656ab1/docs/Gnosis_Safe_Formal_Verification_Report_1_0_0.pdf"
              colorScheme="navy"
            >
              Formal verification report
            </ButtonLink>
          </LCol>
          <RCol>
            <Row>
              <Text>
                This in-depth review and testing of the codebase was conducted
                by Runtime Verification, a trusted pioneer of formal
                verification, over a six-month period.
              </Text>
              <Text>
                The Gnosis Safe Multisig is the only formally verified smart
                contract-based wallet solution.
              </Text>
            </Row>
          </RCol>
        </SecondRow>
      </SContentWrapper>
    )}
  </StaticQuery>
)

export default FormallyVerified

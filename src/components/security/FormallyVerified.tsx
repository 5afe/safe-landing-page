import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { SECURITY_CATEGORY, useAnalytics } from '../../utils/googleAnalytics'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'

const Block = styled.div`
  padding: 0 20px;
  @media screen and (max-width: 980px) {
    padding: 0 12px;
  }
`

const SContentWrapper = styled(ContentWrapper)`
  color: ${(p) => p.theme.palette.navy};
  padding: 0;
`

const SRuntimeLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 34px;
  @media screen and (max-width: 980px) {
    display: none;
  }
`

const SImg = styled(Img)`
  width: 169px;
  display: flex;
  justify-content: flex-end;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    display: block;
  }
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
  @media screen and (max-width: 980px) {
    margin-top: 30px;
  }
`

const SHeading1 = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`

const SHeading2 = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`

const FormallyVerified = () => {
  const { trackEvent } = useAnalytics()

  return (
    <StaticQuery
      query={graphql`
        query {
          rv: file(relativePath: { eq: "runtime-verification-logo.png" }) {
            childImageSharp {
              fixed(width: 170) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      `}
    >
      {(data) => (
        <Block>
          <SContentWrapper>
            <SRuntimeLogo>
              <SImg fixed={data.rv.childImageSharp.fixed} />
            </SRuntimeLogo>
            <Row>
              <LCol>
                <SHeading1>Formally verified</SHeading1>
              </LCol>
              <RCol>
                <SHeading2>
                  The Gnosis Safe core smart contracts have passed the highest
                  possible security standard in the industry: Formal
                  Verification.
                </SHeading2>
              </RCol>
            </Row>
            <SecondRow>
              <LCol>
                <ButtonLink
                  url="https://github.com/safe-global/safe-contracts/blob/78494bcdbc61b3db52308a25f0556c42cf656ab1/docs/Gnosis_Safe_Formal_Verification_Report_1_0_0.pdf"
                  colorScheme="navy"
                >
                  <div
                    onClick={() =>
                      trackEvent({
                        category: SECURITY_CATEGORY,
                        action: 'Formally verified section',
                        label: 'Open formal verification report',
                      })
                    }
                  >
                    Formal verification report
                  </div>
                </ButtonLink>
              </LCol>
              <RCol>
                <Row>
                  <Text>
                    This in-depth review and testing of the codebase was
                    conducted by Runtime Verification, a trusted pioneer of
                    formal verification, over a six-month period.
                  </Text>
                  <Text>
                    Gnosis Safe is the only formally verified smart
                    contract-based wallet solution.
                  </Text>
                </Row>
              </RCol>
            </SecondRow>
          </SContentWrapper>
        </Block>
      )}
    </StaticQuery>
  )
}

export default FormallyVerified

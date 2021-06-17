import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import LinkIcon from '../../assets/link.svg'
import { OVERVIEW_CATEGORY, useAnalytics } from '../../utils/googleAnalytics'
import ContentWrapper from '../Layout/ContentWrapper'

const Container = styled.section`
  padding: 140px 0 70px;
  color: ${(p) => p.theme.palette.navy};
  position: relative;
  @media screen and (max-width: 980px) {
    padding: 0 12px;
  }
`

const SWrapper = styled(ContentWrapper)`
  height: 100%;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 0 0 40px 0;
  }
`

const SHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 44px;
  line-height: 1.18;
  padding-bottom: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    padding: 30px 0;
    font-size: 36px;
  }
`

const Description = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: 1.25;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 980px) {
    flex-flow: column;
    align-items: center;
  }
`

const AppsLine = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 410px;
  margin: 25px 0;
`

const RinkebyAppsLine = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 250px;
`

const StoreBadge = styled.img`
  height: 60px;
`

const InnerLink = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${(p) => p.theme.palette.primary};
  text-decoration: underline;
  &:hover {
    color: ${(p) => p.theme.palette.primaryHover};
  }
`

const SLinkIcon = styled(LinkIcon)`
  margin-left: 5px;
`

const SImg = styled(Img)`
  max-width: 1015px;
  margin: 30px auto;
  @media screen and (max-width: 980px) {
    margin: 20px auto 0;
    width: 100%;
  }
`

const MultisigMobile = () => {
  const { trackEvent } = useAnalytics()

  return (
    <StaticQuery
      query={graphql`
        query {
          mobile: file(relativePath: { eq: "mobile.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
    >
      {(data) => (
        <Container id="mobile">
          <SWrapper>
            <SHeading>Gnosis Safe Mobile</SHeading>
            <Description>
              Track your assets and transactions on
              <br />
              mobile. Stay informed on-the-go.
            </Description>
            <Row>
              <AppsLine>
                <a
                  href="https://apps.apple.com/app/id1515759131"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InnerLink
                    onClick={() =>
                      trackEvent({
                        category: OVERVIEW_CATEGORY,
                        action: 'Safe Multisig Mobile section',
                        label: 'Download iOS Mainnet',
                      })
                    }
                  >
                    <StoreBadge src="../../images/app-store-badge.png" />
                  </InnerLink>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=io.gnosis.safe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InnerLink
                    onClick={() =>
                      trackEvent({
                        category: OVERVIEW_CATEGORY,
                        action: 'Safe Multisig Mobile section',
                        label: 'Download Android Mainnet',
                      })
                    }
                  >
                    <StoreBadge src="../../images/google-play-badge.png" />
                  </InnerLink>
                </a>
              </AppsLine>
            </Row>
            <Row>
              <RinkebyAppsLine>
                Rinkeby:
                <a
                  href="https://testflight.apple.com/join/U8NviSFl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InnerLink
                    onClick={() =>
                      trackEvent({
                        category: OVERVIEW_CATEGORY,
                        action: 'Safe Multisig Mobile section',
                        label: 'Download iOS Rinkeby',
                      })
                    }
                  >
                    iOS
                    <SLinkIcon />
                  </InnerLink>
                </a>{' '}
                <a
                  href="https://appdistribution.firebase.dev/i/8ecc0367c2001086"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InnerLink
                    onClick={() =>
                      trackEvent({
                        category: OVERVIEW_CATEGORY,
                        action: 'Safe Multisig Mobile section',
                        label: 'Download Android Rinkeby',
                      })
                    }
                  >
                    Android
                    <SLinkIcon />
                  </InnerLink>
                </a>
              </RinkebyAppsLine>
            </Row>
            <SImg fluid={data.mobile.childImageSharp.fluid} />
          </SWrapper>
        </Container>
      )}
    </StaticQuery>
  )
}

export default MultisigMobile

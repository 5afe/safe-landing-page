import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import ContentWrapper from '../Layout/ContentWrapper'
import Logo from '../../assets/logo.svg'
import RinkebyLogo from '../../assets/logo-rinkeby.svg'
import LinkIcon from '../../assets/link.svg'

const Container = styled.section`
  padding: 70px 0;
  color: ${(p) => p.theme.palette.navy};
  position: relative;
  @media screen and (max-width: 1240px) {
    padding: 0;
  }
`

const SWrapper = styled(ContentWrapper)`
  height: 100%;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 0px 10px 40px 10px;
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
  @media screen and (max-width: 1240px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const Description = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 40px;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`

const NetworkData = styled.div`
  display: flex;
`

const Text = styled.div`
  font-size: 20px;
  margin-left: 15px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

const Title = styled.h5`
  line-height: 1.25;
  margin-bottom: 5px;
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 165px;
`

const InnerLink = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${(p) => p.theme.palette.primary};
  text-decoration: underline;
`

const SLinkIcon = styled(LinkIcon)`
  margin-left: 5px;
`

const SImg = styled(Img)`
  width: 1015px;
  margin: 50px auto;
`

const MultisigMobile = () => (
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
          <SHeading>Safe Multisig Mobile (beta)</SHeading>
          <Description>
            Track your assets and transactions on mobile.
            <br />
            Stay informed on-the-go.
          </Description>
          <Row>
            <NetworkData>
              <Logo />
              <Text>
                <Title>Mainnet</Title>
                <Links>
                  <a
                    href="https://testflight.apple.com/join/c6k0CIUk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InnerLink>
                      iOS
                      <SLinkIcon />
                    </InnerLink>
                  </a>{' '}
                  <a
                    href="https://appdistribution.firebase.dev/i/401cf2ea8afd6ed8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InnerLink>
                      Android
                      <SLinkIcon />
                    </InnerLink>
                  </a>
                </Links>
              </Text>
            </NetworkData>
            <NetworkData>
              <RinkebyLogo />
              <Text>
                <Title>Rinkeby</Title>
                <Links>
                  <a
                    href="https://testflight.apple.com/join/U8NviSFl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InnerLink>
                      iOS
                      <SLinkIcon />
                    </InnerLink>
                  </a>{' '}
                  <a
                    href="https://appdistribution.firebase.dev/i/8ecc0367c2001086"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InnerLink>
                      Android
                      <SLinkIcon />
                    </InnerLink>
                  </a>
                </Links>
              </Text>
            </NetworkData>
          </Row>

          <SImg fluid={data.mobile.childImageSharp.fluid} />
        </SWrapper>
      </Container>
    )}
  </StaticQuery>
)

export default MultisigMobile

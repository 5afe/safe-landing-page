import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ITheme } from '../../../styles/theme'
import LinkIcon from '../../../assets/link.svg'
import ContentWrapper from '../../Layout/ContentWrapper'
import GetNotified from './GetNotified'
import { OVERVIEW_CATEGORY, useAnalytics } from '../../../utils/googleAnalytics'

const Container = styled.section`
  overflow: hidden;
  padding: 0 20px;
  color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 980px) {
    padding: 0 12px;
  }
`

const SWrapper = styled(ContentWrapper)`
  height: 100%;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 0px 0 40px 0;
  }
`

const SHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 44px;
  line-height: 1.18;
  padding-bottom: 50px;
  padding-top: 100px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    padding: 50px 0 30px;
    font-size: 36px;
  }
`

interface BlockProps {
  align?: string
}

const Block = styled.div<BlockProps>`
  text-align: ${(p: BlockProps) => p.align};
  display: flex;
  flex-direction: ${(p: BlockProps) =>
    p.align === 'left' ? 'row' : 'row-reverse'};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  @media screen and (max-width: 980px) {
    flex-flow: column;
    text-align: left;
    margin-bottom: 40px;
  }
`

const Tabs = styled.div`
  display: flex;
  @media screen and (max-width: 980px) {
    justify-content: center;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`

interface TabProps {
  active?: boolean
  theme: ITheme
}

const Tab = styled.div<TabProps>`
  text-align: center;
  padding: 15px;
  color: ${(p: TabProps) => p.theme.palette.primary};
  opacity: ${(p: TabProps) => (!p.active ? 0.5 : 1)};
  border-bottom: 2px solid ${(p) => p.theme.palette.primary};
  font-size: 24px;
  line-height: 1.25;
  font-weight: 800;
  min-width: 180px;
  cursor: pointer;
  @media screen and (max-width: 980px) {
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    min-width: auto;
  }
  &:hover {
    color: ${(p: TabProps) => !p.active && p.theme.palette.primaryHover};
    opacity: ${(p: TabProps) => (!p.active ? 0.5 : 1)};
  }
`

const TabLeft = styled(Tab)`
  margin-right: 30px;
`

const TabRight = styled(Tab)``

const Text = styled.div`
  max-width: 420px;
  @media screen and (max-width: 980px) {
    max-width: 100%;
  }
`

interface TitleProps {
  noPaddingTop?: boolean
}

const Title = styled.h3`
  font-size: 32px;
  font-weight: 800;
  line-height: 1.13;
  padding: ${(p: TitleProps) => (p.noPaddingTop ? '20px 0 20px' : '0 0 20px')};
  @media screen and (max-width: 980px) {
    font-size: 28px;
    padding: 0 0 30px;
  }
`

const Description = styled.h5`
  font-size: 20px;
  line-height: 1.3;
  @media screen and (max-width: 980px) {
    padding: 0 0 30px;
  }
`

const Image = styled.div`
  width: 760px;
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`

const InnerLink = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${(p) => p.theme.palette.primary};
  text-decoration: underline;
  font-size: 20px;
  margin-top: 20px;
  &:hover {
    color: ${(p) => p.theme.palette.primaryHover};
  }
`

const SLinkIcon = styled(LinkIcon)`
  margin-left: 5px;
  display: inline;
`

const Features = () => {
  const { trackEvent } = useAnalytics()
  const [selectedTabIndex, setSelectedTabIndex] = useState(1)

  return (
    <StaticQuery
      query={graphql`
        query {
          apps: file(relativePath: { eq: "apps.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          assets: file(relativePath: { eq: "assets.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          multisig: file(relativePath: { eq: "multisig.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          multisigForIndividuals: file(
            relativePath: { eq: "multisig-for-individuals.png" }
          ) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          wallets: file(relativePath: { eq: "wallets.png" }) {
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
        <Container>
          <SWrapper>
            <SHeading>Features</SHeading>
            <Block align="left">
              <Text>
                <Tabs>
                  <TabLeft
                    onClick={() => setSelectedTabIndex(1)}
                    active={selectedTabIndex === 1}
                  >
                    For teams
                  </TabLeft>
                  <TabRight
                    onClick={() => setSelectedTabIndex(2)}
                    active={selectedTabIndex === 2}
                  >
                    For individuals
                  </TabRight>
                </Tabs>
                <Title noPaddingTop>Multi-signature</Title>
                {selectedTabIndex === 1 ? (
                  <Description>
                    Fully customize how you manage your company crypto assets,
                    with the option to require a predefined number of signatures
                    to confirm transactions. Require multiple team members to
                    confirm every transaction in order to execute it, which
                    helps prevent unauthorized access to company crypto.
                  </Description>
                ) : (
                  <Description>
                    Fully customize how you manage your personal crypto assets,
                    with the option to require multiple devices to confirm
                    transactions (hardware wallets, EOA-based wallets, paper
                    wallets, or a combination of them).
                  </Description>
                )}
              </Text>
              <Image>
                {selectedTabIndex === 1 ? (
                  <Img fluid={data.multisig.childImageSharp.fluid} />
                ) : (
                  <Img
                    fluid={data.multisigForIndividuals.childImageSharp.fluid}
                  />
                )}
              </Image>
            </Block>
            <Block align="right">
              <Text>
                <Title>Assets</Title>
                <Description>
                  Gnosis Safe supports ETH, ERC20 (Tokens) and ERC721
                  (Collectibles). You can also see the fiat values of your
                  assets.
                </Description>
              </Text>
              <Image>
                <Img fluid={data.assets.childImageSharp.fluid} />
              </Image>
            </Block>
            <Block align="left">
              <Text>
                <Title>Use any wallet</Title>
                <Description>
                  Use your favorite wallet to sign transactions. No matter if
                  it’s a mobile wallet, browser extension, or hardware wallet.
                </Description>
              </Text>
              <Image>
                <Img fluid={data.wallets.childImageSharp.fluid} />
              </Image>
            </Block>
            <Block align="right">
              <Text>
                <Title>Safe Apps</Title>
                <Description>
                  Bringing multisig security to DeFi, you can now put your funds
                  to work directly from the Gnosis Safe interface. Use
                  your digital assets to invest, earn, borrow, invoice, do
                  payroll and more.
                  <br />
                  <a href="https://help.gnosis-safe.io/en/articles/4022022-what-are-safe-apps" target="_blank">
                  <InnerLink
                    onClick={() =>
                      trackEvent({
                        category: OVERVIEW_CATEGORY,
                        action: 'Features section',
                        label: 'Click Learn more about Safe Apps',
                      })
                    }
                  >
                    Learn more about Safe Apps
                    <SLinkIcon />
                  </InnerLink>
                </a>
                </Description>
              </Text>
              <Image>
                <Img fluid={data.apps.childImageSharp.fluid} />
              </Image>
            </Block>
            <GetNotified />
          </SWrapper>
        </Container>
      )}
    </StaticQuery>
  )
}

export default Features

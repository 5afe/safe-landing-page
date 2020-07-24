import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import ContentWrapper from '../../Layout/ContentWrapper'
import GetNotified from './GetNotified'

const Container = styled.section`
  overflow: hidden;
  color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 1240px) {
    padding: 0 12px;
  }
`

const SWrapper = styled(ContentWrapper)`
  height: 100%;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 0px 10px 40px 10px;
  }
`

const SHeading = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 44px;
  line-height: 1.18;
  padding-bottom: 50px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 1240px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

interface BlockProps {
  align?: string
}

const Block = styled.div`
  text-align: ${(p: BlockProps) => p.align};
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`

const Text = styled.div`
  max-width: 400px;
`

const Title = styled.h3`
  font-size: 32px;
  font-weight: 800;
  line-height: 1.13;
  padding-top: 80px;
`

const Description = styled.h5`
  font-size: 20px;
  line-height: 1.3;
`

const Image = styled.div`
  width: 760px;
`

const Features = () => (
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
              <Title>Multi-signature</Title>
              <Description>
                Fully customize how you manage your company crypto assets, with
                the option to require a predefined number of signatures to
                confirm transactions. Require multiple team members to confirm
                every transaction in order to execute it, which helps prevent
                unauthorized access to company crypto.
              </Description>
            </Text>
            <Image>
              <Img fluid={data.multisig.childImageSharp.fluid} />
            </Image>
          </Block>
          <Block align="right">
            <Image>
              <Img fluid={data.assets.childImageSharp.fluid} />
            </Image>
            <Text>
              <Title>Assets</Title>
              <Description>
                Gnosis Safe Multisig supports ETH,<br/> ERC20 (Tokens) and ERC721<br/>
                (Collectibles). You can also see the fiat values of your assets.
              </Description>
            </Text>
          </Block>
          <Block align="left">
            <Text>
              <Title>Use any wallet</Title>
              <Description>
                Use your favorite wallet to sign transactions. No matter if it’s
                a mobile wallet, browser extension, or hardware wallet.
              </Description>
            </Text>
            <Image>
              <Img fluid={data.wallets.childImageSharp.fluid} />
            </Image>
          </Block>
          <Block align="right">
            <Image>
              <Img fluid={data.apps.childImageSharp.fluid} />
            </Image>
            <Text>
              <Title>Safe Apps </Title>
              <Description>
                Bringing multisig security to DeFi, you can now put your funds
                to work directly from the Gnosis Safe Multisig interface. Use
                your digital assets to invest, earn, borrow, invoice, do payroll
                and more.
              </Description>
            </Text>
          </Block>
          <GetNotified />
        </SWrapper>
      </Container>
    )}
  </StaticQuery>
)

export default Features

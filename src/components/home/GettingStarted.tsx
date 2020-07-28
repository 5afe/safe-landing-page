import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
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
  padding-bottom: 50px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 1240px) {
    padding: 40px 0;
    font-size: 36px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1240px) {
    flex-flow: column;
  }
`

const Link = styled.a`
  flex-basis: 100%;
  text-decoration: none;
  color: ${(p) => p.theme.palette.navy};
`

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 1px 2px 10px 0 rgba(40, 54, 61, 0.18);
  padding: 20px;
  height: 255px;
  position: relative;
  @media screen and (max-width: 1240px) {
    height: auto;
    padding-bottom: 40px;
  }

  &:hover {
    background: ${(p) => p.theme.palette.pink};
  }
`

const CardItem = styled(Card)`
  margin-right: 20px;
  @media screen and (max-width: 1240px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

const CardItemLast = styled(Card)``

const Title = styled.h4`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 800;
  margin-bottom: 25px;
`

const Text = styled.h5`
  font-size: 20px;
  line-height: 1.3;
`

const SLinkIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
`

const TryDemo = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1240px) {
    margin-top: 40px;
  }
`

const SButtonLink = styled(ButtonLink)`
  text-align: center;
  width: 165px;
  box-shadow: none;
  @media screen and (max-width: 1240px) {
    padding: 10px 0;
    margin-bottom: 20px;
  }
`

const GettingStarted = () => (
  <Container id="getting-started">
    <SWrapper>
      <SHeading>Getting started</SHeading>
      <Row>
        <Link
          href="https://help.gnosis-safe.io/en/articles/3876456-what-is-a-multisig-wallet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardItem>
            <Title>What is a Multisig Wallet?</Title>
            <Text>
              What exactly is a multisignature wallet and what's the difference
              to other wallets?
            </Text>
            <SLinkIcon>
              <LinkIcon />
            </SLinkIcon>
          </CardItem>
        </Link>
        <Link
          href="https://help.gnosis-safe.io/en/articles/3876461-create-a-safe-multisig"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardItem>
            <Title>Create a Safe Multisig</Title>
            <Text>
              The full process of creating a new multisignature wallet in just
              60 seconds
            </Text>
            <SLinkIcon>
              <LinkIcon />
            </SLinkIcon>
          </CardItem>
        </Link>
        <Link
          href="https://help.gnosis-safe.io/en/articles/3952623-migration-from-gnosis-multisig-to-safe-multisig"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardItem>
            <Title>Migration: From Gnosis Multisig to Safe Multisig</Title>
            <Text>
              How to migrate from your legacy Gnosis Multisig to the new Safe
              Multisig
            </Text>
            <SLinkIcon>
              <LinkIcon />
            </SLinkIcon>
          </CardItem>
        </Link>
        <Link
          href="https://help.gnosis-safe.io/en/articles/4100712-migrate-from-the-legacy-safe-mobile-app-to-the-safe-multisig"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardItemLast>
            <Title>Migrate from the legacy Safe mobile app</Title>
            <Text>
              How to permanently migrate from the Gnosis Safe legacy mobile app
            </Text>
            <SLinkIcon>
              <LinkIcon />
            </SLinkIcon>
          </CardItemLast>
        </Link>
      </Row>
      <TryDemo>
        <SButtonLink
          url="https://gnosis-safe.io/app/#/safes/0xfF501B324DC6d78dC9F983f140B9211c3EdB4dc7/balances"
          target="_blank"
          explicitExternal
        >
          Try demo
        </SButtonLink>
      </TryDemo>
    </SWrapper>
  </Container>
)

export default GettingStarted

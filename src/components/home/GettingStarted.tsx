import React from 'react'
import styled from 'styled-components'
import LinkIcon from '../../assets/link.svg'
import { OVERVIEW_CATEGORY, useAnalytics } from '../../utils/googleAnalytics'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'

const Container = styled.section`
  padding: 70px 20px;
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
  padding-bottom: 50px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    padding: 40px 0;
    font-size: 36px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
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
  height: auto;
  min-height: 260px;
  position: relative;
  @media screen and (min-width: 981px) and (max-width: 1050px) {
    min-height: 320px;
  }
  @media screen and (max-width: 980px) {
    min-height: 0;
    padding-bottom: 40px;
  }
  &:hover {
    background: ${(p) => p.theme.palette.pink};
  }
`

const CardItem = styled(Card)`
  margin-right: 20px;
  @media screen and (max-width: 980px) {
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
  @media screen and (max-width: 980px) {
    margin-top: 40px;
  }
`

const SButtonLink = styled(ButtonLink)`
  text-align: center;
  width: 165px;
  box-shadow: none;
  @media screen and (max-width: 980px) {
    padding: 10px 0;
    margin-bottom: 20px;
  }
`

const GettingStarted = () => {
  const { trackEvent } = useAnalytics()

  return (
    <Container id="getting-started">
      <SWrapper>
        <SHeading>Getting started</SHeading>
        <Row>
          <Link
            href="https://help.safe.global/en/articles/3876456-what-is-gnosis-safe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              onClick={() =>
                trackEvent({
                  category: OVERVIEW_CATEGORY,
                  action: 'Getting started section',
                  label: 'Open article: What is Safe?',
                })
              }
            >
              <CardItem>
                <Title>What is Safe?</Title>
                <Text>
                  Read about the basics of Safe and how it compares to other
                  solutions
                </Text>
                <SLinkIcon>
                  <LinkIcon />
                </SLinkIcon>
              </CardItem>
            </div>
          </Link>
          <Link
            href="https://help.safe.global/en/articles/3876461-create-a-gnosis-safe-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              onClick={() =>
                trackEvent({
                  category: OVERVIEW_CATEGORY,
                  action: 'Getting started section',
                  label: 'Open article: Create a Safe account',
                })
              }
            >
              <CardItem>
                <Title>Create a Safe account</Title>
                <Text>
                  The full process of creating a new Safe account in just 60
                  seconds
                </Text>
                <SLinkIcon>
                  <LinkIcon />
                </SLinkIcon>
              </CardItem>
            </div>
          </Link>
          <Link
            href="https://help.safe.global/en/articles/4772567-what-gnosis-safe-setup-should-i-use"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              onClick={() =>
                trackEvent({
                  category: OVERVIEW_CATEGORY,
                  action: 'Getting started section',
                  label: 'Open article: What Safe setup should I use?',
                })
              }
            >
              <CardItem>
                <Title>What Safe setup should I use?</Title>
                <Text>
                  This article provides some information on what to consider
                  when setting up a Safe
                </Text>
                <SLinkIcon>
                  <LinkIcon />
                </SLinkIcon>
              </CardItem>
            </div>
          </Link>
          <Link
            href="https://help.safe.global/en/articles/4290276-costs-of-creating-a-gnosis-safe-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              onClick={() =>
                trackEvent({
                  category: OVERVIEW_CATEGORY,
                  action: 'Getting started section',
                  label: 'Open article: Costs of creating a Safe account',
                })
              }
            >
              <CardItemLast>
                <Title>Costs of creating a Safe account</Title>
                <Text>
                  This article provides an overview on how much gas it costs
                  approximately to create a Safe
                </Text>
                <SLinkIcon>
                  <LinkIcon />
                </SLinkIcon>
              </CardItemLast>
            </div>
          </Link>
        </Row>
        <TryDemo>
          <SButtonLink
            url="https://app.safe.global/eth:0xfF501B324DC6d78dC9F983f140B9211c3EdB4dc7"
            target="_blank"
            explicitExternal
          >
            <div
              onClick={() =>
                trackEvent({
                  category: OVERVIEW_CATEGORY,
                  action: 'Getting started section',
                  label: 'Try demo',
                })
              }
            >
              Try demo
            </div>
          </SButtonLink>
        </TryDemo>
      </SWrapper>
    </Container>
  )
}

export default GettingStarted

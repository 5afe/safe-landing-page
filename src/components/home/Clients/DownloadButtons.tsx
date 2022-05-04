import React from 'react'
import styled from 'styled-components'
import ArrowDownload from '../../../assets/arrow-download.svg'
import LinkIcon from '../../../assets/link.svg'
import { OVERVIEW_CATEGORY, useAnalytics } from '../../../utils/googleAnalytics'
import ContentWrapper from '../../Layout/ContentWrapper'
import ButtonLink from '../../ui/ButtonLink'

const Container = styled.div`
  padding: 50px 20px 100px;
  position: relative;
  color: ${(p) => p.theme.palette.navy};
  background: ${(p) => p.theme.palette.darkGreyBackground};
  overflow: hidden;
  @media screen and (max-width: 980px) {
    padding: 0 12px 30px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (max-width: 980px) {
    display: block;
  }
`

const Col = styled.div`
  flex-basis: 380px;
  line-height: normal;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin: 0 15px;
  @media screen and (max-width: 980px) {
    margin: 30px 0 0 0;
  }
`

const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  line-height: 1.13;
  text-align: center;
  padding-bottom: 0px;
  @media screen and (max-width: 980px) {
    font-size: 28px;
    margin-top: 10px;
  }
`

const Text = styled.div`
  margin: 20px 0 0;
  font-size: 20px;
  line-height: 1.3;
  color: ${(p) =>
    p.color === 'green' ? p.theme.palette.primary : p.theme.palette.navy};
  b {
    font-weight: 800;
  }
`

const SButtonLink = styled(ButtonLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 auto;

  font-size: 16px;
  line-height: 1.38;
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  & > div {
    padding: 8px 20px;
    width: 210px;
  }
  @media screen and (max-width: 980px) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`

const ImageWrapper = styled.div`
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Img = styled.img`
  display: block;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
`

const InnerLink = styled.div`
  display: flex;
  float: left;
  align-items: center;
  color: ${(p) => p.theme.palette.primary};
  text-decoration: underline;

  &:hover {
    color: ${(p) => p.theme.palette.primaryHover};
  }
`

const SLinkIcon = styled(LinkIcon)`
  margin-left: 5px;
  display: inline;
`

interface IDownloadButtons {
  desktopAppUrl: string | undefined
}

const chains = ['Ethereum','Gnosis Chain','Polygon','BNB Smart Chain','Energy Web Chain','Arbitrum','Aurora','Avalanche','Optimism','Goerli','Rinkeby','Volta']

const DownloadButtons = ({ desktopAppUrl }: IDownloadButtons) => {
  const { trackEvent } = useAnalytics()

  return (
    <Container>
      <ContentWrapper>
        <Row>
          <Col>
            <Title>Web</Title>
            <ImageWrapper>
              <Img src="/images/web.png" />
            </ImageWrapper>
            <SButtonLink url="/app/" target="_self" explicitExternal>
              <div
                onClick={() =>
                  trackEvent({
                    category: OVERVIEW_CATEGORY,
                    action: 'Download clients section',
                    label: 'Open web app',
                  })
                }
              >
                Open web app
              </div>
            </SButtonLink>
            <Text>
              Access the most recent version of the Gnosis Safe directly in your
              browser.
            </Text>
            <Text>
              <div>Gnosis Safe supports:</div>
              {chains.join(', ')}
            </Text>
          </Col>
          <Col>
            <Title>Desktop</Title>
            <ImageWrapper>
              <Img src="/images/desktop.png" />
            </ImageWrapper>
            <SButtonLink url={desktopAppUrl || '/app/'}>
              <div
                onClick={() =>
                  trackEvent({
                    category: OVERVIEW_CATEGORY,
                    action: 'Download clients section',
                    label: 'Download desktop app',
                  })
                }
              >
                Download (~200 Mb) <ArrowDownload />
              </div>
            </SButtonLink>
            <Text>
              Download the Gnosis Safe as a static desktop application for
              Windows, MacOS or Linux.
            </Text>
            <Text>
              <a
                href="https://github.com/safe-global/safe-react/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InnerLink
                  onClick={() =>
                    trackEvent({
                      category: OVERVIEW_CATEGORY,
                      action: 'Download clients section',
                      label: 'See releases and checksums',
                    })
                  }
                >
                  All releases and SHA256 checksums <SLinkIcon />
                </InnerLink>
              </a>
            </Text>
          </Col>
          <Col>
            <Title>Mobile</Title>
            <ImageWrapper>
              <Img src="/images/phone.png" />
            </ImageWrapper>
            <SButtonLink url="/#mobile">
              <div
                onClick={() =>
                  trackEvent({
                    category: OVERVIEW_CATEGORY,
                    action: 'Download clients section',
                    label: 'Go to mobile app links',
                  })
                }
              >
                Download
              </div>
            </SButtonLink>
            <Text>Conveniently manage your digital assets on-the-go.</Text>
          </Col>
        </Row>
      </ContentWrapper>
    </Container>
  )
}

export default DownloadButtons

import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import ButtonLink from '../../ui/ButtonLink'
import GlobeIcon from '../../../assets/download-web-client-globe.svg'
import ScreenIcon from '../../../assets/download-desktop-client-screen.svg'
import MobileIcon from '../../../assets/download-mobile-client-mobile.svg'

const Container = styled.div`
  padding: 95px 0 200px 0;
  position: relative;
  color: ${(p) => p.theme.palette.navy};
  overflow: hidden;
  @media screen and (max-width: 1240px) {
    display: none;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 0 12px;
  }
`

const Col = styled.div`
  flex-basis: 345px;
  letter-spacing: 0.36px;
  line-height: normal;
  @media screen and (max-width: 1240px) {
    margin-top: 30px;
  }
`

const Text = styled.div`
  margin-top: 20px;
  font-size: 16px;
  letter-spacing: 0.36px;
  min-height: ${(p) => p.minHeight ? '67px' : 0};
  color: ${(p) =>
    p.color === 'green' ? p.theme.palette.primary : p.theme.palette.navy};
  b {
    font-weight: 800;
  }
  a {
    color: ${(p) =>
      p.color === 'green' ? p.theme.palette.primary : p.theme.palette.navy};
  }
`

const SButtonLink = styled(ButtonLink)`
  display: flex;
  position: relative;
  padding: 0 20px;
  width: 100%;
  height: 67px;
  font-size: 25px;
  font-weight: 800;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

interface IDownloadButtons {
  desktopAppUrl: string
}

const DownloadButtons = ({ desktopAppUrl }: IDownloadButtons) => (
  <Container>
    <ContentWrapper>
      <Row>
        <Col>
          <SButtonLink url="https://gnosis-safe.io/app/#" colorScheme="green">
            Web
            <GlobeIcon />
          </SButtonLink>
          <Text minHeight={true} color="green">
            Access the most recent version of the Safe Multisig directly in your
            browser.
          </Text>
          <Text color="green">
            Do you want to do some testing first?
            <br />
            <b>
              <a href="https://rinkeby.gnosis-safe.io/app/#">
                Use the Rinkeby Web App
              </a>
            </b>
            .
          </Text>
        </Col>
        <Col>
          <SButtonLink url={desktopAppUrl} colorScheme="navy">
            Desktop
            <ScreenIcon />
          </SButtonLink>
          <Text minHeight>
            Download the Safe Multisig as a static desktop application for
            Windows, MacOS or Linux.
          </Text>
          <Text>
            <b>
              <a
                href="https://github.com/gnosis/safe-react/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                All releases and SHA256 checksums
              </a>
            </b>
            .
          </Text>
        </Col>
        <Col>
          <SButtonLink url="/#mobile" colorScheme="grey">
            Mobile
            <MobileIcon />
          </SButtonLink>
          <Text minHeight>
            Conveniently manage your digital assets
            <br />
            on-the-go.
          </Text>
          <Text>
            <b>
              <a href="/#mobile">Get early access here</a>
            </b>
            .
          </Text>
        </Col>
      </Row>
    </ContentWrapper>
  </Container>
)

export default DownloadButtons

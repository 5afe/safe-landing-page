import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import ButtonLink from '../ui/ButtonLink'
import LinesSVG from '../../assets/bg-lines-03.svg'

const Container = styled.div`
  position: relative;
  padding-top: 107px;
  padding-bottom: 20px;
  color: ${p => p.theme.palette.navy};
  @media screen and (max-width: 1240px) {
    padding: 0;
  }
  --border: 1px solid red;
`

const SHeading = styled(Heading)`
  letter-spacing: 1px;
  margin-bottom: 54px;
  @media screen and (max-width: 1240px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`

const SSmallHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  width: 130px;
  @media screen and (max-width: 1240px) {
    width: auto;
  }
`

const SRightSmallHeading = styled(SSmallHeading)`
  color: ${p => p.theme.palette.primary};
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: 0;
  stroke: #d8d8d8;
  opacity: 0.27;
  z-index: -1;
  @media screen and (max-width: 1240px) {
    display: none;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  @media screen and (max-width: 1240px) {
    display: block;
  }
`

const SubRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const Col = styled.div`
  display: flex;
`

const RCol = styled.div`
  width: 100%;
`

const SubCol = styled.p`
  flex-basis: 33%;
  letter-spacing: 0.36px;
  font-size: 16px;
  line-height: normal;
  @media screen and (max-width: 1240px) {
    flex-basis: 50%;
    text-align: center;
    padding: 0 10px;
  }
`

const SButtonLink = styled(ButtonLink)`
  width: 180px;
  text-align: center;
  margin-left: 20px;
  @media screen and (max-width: 1240px) {
    margin: 0;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const LoveMessage = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  text-align: center;
  line-height: normal;
  padding-top: 169px;
  padding-bottom: 16px;
  @media screen and (max-width: 1240px) {
    padding: 0;
    padding: 10px 0 40px 0;
  }
`

const Repositories = () => (
  <Container>
    <SLinesSVG />
    <ContentWrapper>
      <SHeading>
        We believe in open source.
        <br />
        Get inspired by our repositories!
      </SHeading>
      <Row>
        <Col>
          <RCol>
            <Row>
              <SubCol>
                <SubRow>
                  <SSmallHeading>Contracts</SSmallHeading>
                </SubRow>
              </SubCol>
              <SubRow>
                <SubCol>
                  <SButtonLink
                    url="https://github.com/gnosis/safe-contracts/blob/development/contracts/GnosisSafe.sol"
                    colorScheme="navy"
                  >
                    Core
                  </SButtonLink>
                </SubCol>
                <SubCol>
                  <SButtonLink
                    url="https://github.com/gnosis/safe-contracts/tree/development/contracts/modules"
                    colorScheme="navy"
                  >
                    Modules
                  </SButtonLink>
                </SubCol>
              </SubRow>
            </Row>
            <Row>
              <SubCol>
                <SubRow>
                  <SSmallHeading>Services</SSmallHeading>
                </SubRow>
              </SubCol>
              <SubRow>
                <SubCol>
                  <SButtonLink
                    url="https://github.com/gnosis/safe-transaction-service"
                    colorScheme="navy"
                  >
                    Transaction indexer
                  </SButtonLink>
                </SubCol>
                <SubCol>
                  <SButtonLink
                    url="https://github.com/gnosis/safe-relay-service"
                    colorScheme="navy"
                  >
                    Relay
                  </SButtonLink>
                </SubCol>
              </SubRow>
            </Row>
          </RCol>
        </Col>
        <Col>
          <RCol>
            <Row>
              <SubCol>
                <SubRow>
                  <SRightSmallHeading>Clients</SRightSmallHeading>
                </SubRow>
              </SubCol>
              <SubRow>
                <SubCol>
                  <SButtonLink
                    url="https://github.com/gnosis/safe-react"
                    colorScheme="green"
                  >
                    Web interface
                  </SButtonLink>
                </SubCol>
                <SubCol>
                  <SButtonLink
                    url="https://github.com/gnosis/contract-proxy-kit"
                    colorScheme="green"
                  >
                    Proxy kit
                  </SButtonLink>
                </SubCol>
              </SubRow>
            </Row>
            <Row>
              <SubCol>
                <SubRow></SubRow>
              </SubCol>
              <SubRow>
                <SubCol>
                  <SButtonLink
                    url="https://github.com/gnosis/safe-android"
                    colorScheme="green"
                  >
                    Android app
                  </SButtonLink>
                </SubCol>
                <SubCol>
                  <SButtonLink
                    url="https://github.com/gnosis/safe-ios"
                    colorScheme="green"
                  >
                    iOS app
                  </SButtonLink>
                </SubCol>
              </SubRow>
            </Row>
          </RCol>
        </Col>
      </Row>
      <LoveMessage>Gnosis &hearts; Developers</LoveMessage>
    </ContentWrapper>
  </Container>
)

export default Repositories

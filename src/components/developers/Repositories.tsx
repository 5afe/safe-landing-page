import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import ButtonLink from '../ui/ButtonLink'
import LinesSVG from '../../assets/bg-lines-03.svg'

const SHeading = styled(Heading)`
  letter-spacing: 1px;
  margin-bottom: 54px;
`

const SSmallHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  width: 130px;
`

const SRightSmallHeading = styled(SSmallHeading)`
  color: ${p => p.theme.palette.primary}
`

const Container = styled.div`
  position: relative;
  padding-top: 107px;
  padding-bottom: 122px;
  color: ${p => p.theme.palette.navy};
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: 0;
  stroke: #d8d8d8;
  opacity: 0.27;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const Col = styled.div`
  display: flex;
`

const RCol = styled.div`

`

const SubCol = styled.p`
  flex-basis: 33%;
  letter-spacing: 0.36px;
  font-size: 16px;
  line-height: normal;
`

const SButtonLink = styled(ButtonLink)`
  width: 180px;
  text-align: center;
  margin-left: 20px;
`

const SContentWrapper = styled(ContentWrapper)`
  position: relative;
  z-index: 100;
`

const Repositories = () => (
  <Container>
    <SLinesSVG />
    <SContentWrapper>
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
                <Row>
                  <SSmallHeading>Contracts</SSmallHeading>
                </Row>
              </SubCol>
              <SubCol>
                <Row>
                  <SButtonLink url="https://github.com/gnosis/safe-contracts/blob/development/contracts/GnosisSafe.sol" colorScheme="navy">
                    Core
                  </SButtonLink>
                </Row>
              </SubCol>
              <SubCol>
                <Row>
                  <SButtonLink url="https://github.com/gnosis/safe-contracts/tree/development/contracts/modules" colorScheme="navy">
                    Modules
                  </SButtonLink>
                </Row>
              </SubCol>
            </Row>
            <Row>
              <SubCol>
                <Row>
                  <SSmallHeading>Services</SSmallHeading>
                </Row>
              </SubCol>
              <SubCol>
                <Row>
                  <SButtonLink url="https://github.com/gnosis/safe-transaction-service" colorScheme="navy">
                    Transaction indexer
                  </SButtonLink>
                </Row>
              </SubCol>
              <SubCol>
                <Row>
                  <SButtonLink url="https://github.com/gnosis/safe-relay-service" colorScheme="navy">
                    Relay
                  </SButtonLink>
                </Row>
              </SubCol>
            </Row>
          </RCol>
        </Col>
        <Col>
          <RCol>
            <Row>
              <SubCol>
                <Row>
                  <SRightSmallHeading>Clients</SRightSmallHeading>
                </Row>
              </SubCol>
              <SubCol>
                <Row>
                  <SButtonLink url="https://github.com/gnosis/safe-react" colorScheme="green">
                    Web interface
                  </SButtonLink>
                </Row>
              </SubCol>
              <SubCol>
                <Row>
                  <SButtonLink url="https://github.com/gnosis/contract-proxy-kit" colorScheme="green">
                    Proxy kit
                  </SButtonLink>
                </Row>
              </SubCol>
            </Row>
            <Row>
              <SubCol>
                <Row>
                </Row>
              </SubCol>
              <SubCol>
                <Row>
                  <SButtonLink url="https://github.com/gnosis/safe-android" colorScheme="green">
                    Android app
                  </SButtonLink>
                </Row>
              </SubCol>
              <SubCol>
                <Row>
                  <SButtonLink url="https://github.com/gnosis/safe-ios" colorScheme="green">
                    iOS app
                  </SButtonLink>
                </Row>
              </SubCol>
            </Row>
          </RCol>
        </Col>
      </Row>
    </SContentWrapper>
  </Container>
)

export default Repositories

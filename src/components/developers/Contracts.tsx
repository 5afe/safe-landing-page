import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import LinesSVG from '../../assets/bg-lines-03.svg'

const Container = styled.div`
  position: relative;
  color: ${p => p.theme.palette.navy};
  padding-top: 112px;
  background-color: rgba(0, 140, 115, 0.88);
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const LCol = styled.div`
  flex-basis: 25%;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  margin-bottom: 60px;
`

const SubLCol = styled.p`
  flex-basis: 67%;
  letter-spacing: 0.36px;
  font-size: 16px;
  line-height: normal;
`

const SubRCol = styled.p`
  flex-basis: 178px;
  letter-spacing: 0.36px;
  font-size: 16px;
  line-height: normal;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const SButtonLink = styled(ButtonLink)`
  width: 100%;
  text-align: center;
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: 0;
  stroke: #d8d8d8;
  opacity: 0.27;
  z-index: -1;
`

const Contracts = () => (
  <Container>
    <SLinesSVG />
    <ContentWrapper>
      <Row>
        <LCol>
          <SHeading>Smart Contracts</SHeading>
        </LCol>
        <RCol>
          <Row>
            <SubLCol>
              The smart contracts enable developers to make interactions with
              decentralized protocols more user-friendly, enabling features such
              as batched transactions, recovery mechanisms, and gas abstraction.
            </SubLCol>
            <SubRCol>
              <Row>
                <SButtonLink
                  url="https://gnosis-safe.readthedocs.io/en/latest/contracts/index.html"
                  colorScheme="white"
                >
                  Documentation
                </SButtonLink>
              </Row>
              <Row>
                <SButtonLink
                  url="https://github.com/gnosis/safe-contracts/releases"
                  colorScheme="navy"
                >
                  Releases
                </SButtonLink>
              </Row>
            </SubRCol>
          </Row>
        </RCol>
      </Row>
      <Row>
        <LCol>
          <SHeading>Contract Proxy Kit</SHeading>
        </LCol>
        <RCol>
          <Row>
            <SubLCol>
              The Contract Proxy Kit (CPK) lets your users benefit from a smart
              contract account that is tied to their regular wallet. Use this
              plug-and-play solution to deploy a smart contract account under
              the hood for every one of your users and build a better
              experience.
            </SubLCol>
            <SubRCol>
              <Row>
                <SButtonLink
                  url="https://github.com/gnosis/contract-proxy-kit"
                  colorScheme="white"
                >
                  Integrate Proxy Kit
                </SButtonLink>
              </Row>
            </SubRCol>
          </Row>
        </RCol>
      </Row>
    </ContentWrapper>
  </Container>
)

export default Contracts

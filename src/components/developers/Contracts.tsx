import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import LinesSVG from '../../assets/bg-lines-03.svg'

const Container = styled.div`
  position: relative;
  color: ${(p) => p.theme.palette.navy};
  padding-top: 112px;
  background-color: rgba(0, 140, 115, 0.88);
  overflow: hidden;
  @media screen and (max-width: 1240px) {
    padding: 20px 12px 30px 12px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (max-width: 1240px) {
    display: block;
    margin-bottom: 0;
  }
`

const LCol = styled.div`
  flex-basis: 25%;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  margin-bottom: 60px;
  @media screen and (max-width: 1240px) {
    margin-bottom: 0;
  }
`

const SubLCol = styled.div`
  flex-basis: 67%;
  letter-spacing: 0.36px;
  font-size: 16px;
  line-height: normal;
  @media screen and (max-width: 1240px) {
    padding-bottom: 30px;
  }
`

const SubRCol = styled.div`
  flex-basis: 178px;
  letter-spacing: 0.36px;
  font-size: 16px;
  line-height: normal;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 1240px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const SButtonLink = styled(ButtonLink)`
  width: 100%;
  text-align: center;
  box-shadow: 1px 2px 10px 0 rgba(40, 54, 61, 0.18);
  @media screen and (max-width: 1240px) {
    width: 178px;
    margin-bottom: 20px;
  }
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
                  url="https://docs.gnosis.io/safe/docs/contracts_intro"
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
                  url="https://docs.gnosis.io/safe/docs/cpktutorial1/"
                  colorScheme="white"
                >
                  Integrate Proxy Kit
                </SButtonLink>
              </Row>
            </SubRCol>
          </Row>
        </RCol>
      </Row>
      <Row>
        <LCol>
          <SHeading>Safe-CLI</SHeading>
        </LCol>
        <RCol>
          <Row>
            <SubLCol>
              The Safe Command Line Interface allows experienced users and
              developers to perform operations and query data right from the
              console.
            </SubLCol>
            <SubRCol>
              <Row>
                <SButtonLink
                  url="https://github.com/gnosis/safe-cli"
                  colorScheme="white"
                >
                  Use Safe-CLI
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

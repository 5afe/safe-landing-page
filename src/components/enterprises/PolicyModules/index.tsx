import React from 'react'
import styled from 'styled-components'
import BgGray from '../../../assets/bg-gray.svg'
import ContentWrapper from '../../Layout/ContentWrapper'
import Card from './Card'

const Container = styled.section`
  padding: 112px 0;
  position: relative;
  z-index: 1;
  color: ${(p) => p.theme.palette.white};
  background-color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 980px) {
    padding: 0 12px 10px 12px;
  }
`

const Block = styled.div`
  padding: 0 20px;
  @media screen and (max-width: 980px) {
    padding: 0;
  }
`

const SContentWrapper = styled(ContentWrapper)`
  width: 100%;
  padding: 0;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 0px;
  padding-bottom: 80px;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 0;
    height: auto;
  }
`

const LCol = styled.div`
  flex-basis: 26%;
  padding-right: 60px;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    display: block;
  }
`

const Col = styled.div`
  flex-basis: 31.1%;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  padding-bottom: 29px;
  color: ${(p) => p.theme.palette.grey};
  @media screen and (max-width: 980px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const Text = styled.p`
  letter-spacing: 0.36px;
  line-height: normal;
  color: ${(p) => p.theme.palette.grey};
  @media screen and (max-width: 980px) {
    letter-spacing: normal;
    font-size: 16px;
    padding-bottom: 10px;
  }
`

const SBgGray = styled(BgGray)`
  position: absolute;
  bottom: 100px;
  z-index: -2;
  @media screen and (max-width: 980px) {
    top: 0;
    display: none;
  }
  fill: rgba(93, 109, 116, 0.1);
`

const PolicyModules = () => (
  <Container>
    <SBgGray />
    <Block>
      <SContentWrapper>
        <Row>
          <LCol>
            <SHeading>Policy modules</SHeading>
            <Text>
              While the core contract has been formally verified, every change to
              the smart contract goes through a careful audit by external security
              experts.
            </Text>
          </LCol>
          <RCol>
            <Col>
              <SHeading>Moderation</SHeading>
              <Card title="Velocity limits">
                set fund caps for single-handed transaction authorizations
              </Card>
              <Card title="Time-bound limits">
                define fund access for specific operating hours
              </Card>
              <Card title="Token allowance">
                set specific token budgets for individuals or groups
              </Card>
              <Card title="Scheduling">
                pre-confirm transactions and schedule recurring transactions
              </Card>
            </Col>
            <Col>
              <SHeading>Consensus</SHeading>
              <Card title="Thresholds">
                define required signatures per transaction category
              </Card>
              <Card title="Roles">
                define user hierarchies for role-based access control
              </Card>
              <Card title="Sequences">define process requirements</Card>
            </Col>
            <Col>
              <SHeading>Risk mitigation</SHeading>
              <Card title="Whitelisting">approve trusted counterparties</Card>
              <Card title="Emergency rules">
                pre-authorized actions in cases of suspicious activities
              </Card>
              <Card title="Capital efficiency">
                automatic rebalancing across interest-bearing fund deployments
              </Card>
            </Col>
          </RCol>
        </Row>
      </SContentWrapper>
    </Block>
  </Container>
)

export default PolicyModules

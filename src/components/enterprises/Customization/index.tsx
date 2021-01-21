import React from 'react'
import styled from 'styled-components'
import LinesSVG from '../../../assets/lines.svg'
import ContentWrapper from '../../Layout/ContentWrapper'
import Card from './Card'

const Container = styled.section`
  padding: 112px 20px;
  position: relative;
  overflow: hidden;
  color: ${(p) => p.theme.palette.navy};
  background-color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 980px) {
    padding: 0 12px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 80px;
  @media screen and (max-width: 980px) {
    display: block;
    margin-bottom: 40px;
  }
`

const LCol = styled.div`
  flex-basis: 25%;
  padding-right: 60px;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  @media screen and (max-width: 980px) {
    display: block;
  }
`

const SubRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  margin-bottom: 36px;
  color: ${(p) => p.theme.palette.grey};
  @media screen and (max-width: 980px) {
    margin: 30px 0;
    font-size: 28px;
  }
`

const SHeadingServices = styled(SHeading)`
  margin-top: 120px;
  @media screen and (max-width: 980px) {
    margin-top: 50px;
  }
`

const Text = styled.p`
  letter-spacing: 0.36px;
  line-height: normal;
  color: ${(p) => p.theme.palette.grey};
  @media screen and (max-width: 980px) {
    letter-spacing: normal;
    margin-bottom: 30px;
    font-size: 16px;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  top: 100px;
  transform: translateY(-20%);
  opacity: 0.27;
  stroke: #d8d8d8;
`

const SContentWrapper = styled(ContentWrapper)`
  position: relative;
  z-index: 100;
`

const PolicyModules = () => (
  <Container>
    <SLinesSVG />
    <SContentWrapper>
      <Row>
        <LCol>
          <SHeading>Customization</SHeading>
          <Text>
            The Gnosis Safe Multisig prioritizes extensive customization for
            enterprise-ready solutions. In order to ensure enterprises’
            individual needs are met, Gnosis offers customized development of
            new features and services.
          </Text>
        </LCol>
        <RCol>
          <SHeading>Solutions</SHeading>
          <SubRow>
            <Card title="Integration">
              Integrate the Gnosis Safe Multisig into existing software.
            </Card>
            <Card title="Whitelabel">
              Tailor the interface to your corporate identity or integrate it
              into an existing interface.
            </Card>
            <Card title="Hosting">
              Choose between self-hosted, hybrid, and third-party-managed
              solutions.
            </Card>
            <Card title="HSM support">
              Confirm your transactions with HSM for enhanced security. Offline
              signatures are also supported.
            </Card>
            <Card title="Advanced fund recovery">
              Concerned about losing your keys? We offer different methods that
              simplify key recovery while still guaranteeing fund security.
            </Card>
          </SubRow>
          <SHeadingServices>Services</SHeadingServices>
          <SubRow>
            <Card title="Set-up assistance">
              We help enterprises get started with the Gnosis Safe Multisig,
              from deployment to integration into existing services and
              processes.
            </Card>
            <Card title="Customer support">
              Depending on customer needs we can offer continuous (technical)
              support, including 24/7 phone support.
            </Card>
            <Card title="Insurance">
              We work with insurance providers and underwriters to offer you
              coverage for stored funds, liquidity issues, and software failure.
            </Card>
          </SubRow>
        </RCol>
      </Row>
    </SContentWrapper>
  </Container>
)

export default PolicyModules

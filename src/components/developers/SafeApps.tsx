import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import LinesSVG from '../../assets/lines.svg'

const Container = styled.div`
  margin-top: 127px;
  margin-bottom: 211px;
  position: relative;
  color: ${p => p.theme.palette.navy};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const LRow = styled.div`
  margin-top: 60px;
`

const LCol = styled.div`
  flex-basis: 25%;
`

const RCol = styled.div`
  flex-basis: 72.5%;
`

const SubCol = styled.p`
  flex-basis: 43%;
  margin-top: 38px;
  letter-spacing: 0.36px;
  font-size: 16px;
  line-height: normal;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: -250px;
  stroke: #008c73;
  opacity: 0.4;
  z-index: -1;
`

const SafeApps = () => (
  <Container>
    <SLinesSVG />
    <ContentWrapper>
      <Row>
        <LCol>
          <SHeading>Safe Apps</SHeading>
          <LRow>
            <ButtonLink url="https://t.me/GnosisSafe" colorScheme="navy">
              Build your first Safe App
            </ButtonLink>
          </LRow>
        </LCol>
        <RCol>
          <Row>
            <SHeading>
              With over $1B worth of digital assets held in Gnosis Multisigs
              alone, it’s essential for the dapp ecosystem to access this untapped
              market.
            </SHeading>
          </Row>
          <Row>
            <SubCol>
              Safe Apps introduce a completely new way for developers to build
              their dapps right into a Multisig interface.
            </SubCol>
            <SubCol>
              Turn your Dapp into an HTML iframe component that can be accessed
              through the Safe Multisig.
            </SubCol>
          </Row>
        </RCol>
      </Row>
    </ContentWrapper>
  </Container>
)

export default SafeApps

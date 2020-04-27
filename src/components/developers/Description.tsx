import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import LinesSVG from '../../assets/lines.svg'

const SHeading = styled(Heading)`
  letter-spacing: 1px;
  @media screen and (max-width: 1240px) {
    font-size: 16px;
    padding: 0 12px;
  }
`

const Container = styled.div`
  position: relative;
  padding-top: 107px;
  padding-bottom: 122px;
  color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 1240px) {
    padding: 30px 0;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: -50px;
  stroke: #008c73;
  opacity: 0.4;
  z-index: -1;
`

const Description = () => (
  <Container>
    <SLinesSVG />
    <ContentWrapper>
      <SHeading>
        We provide you with the building blocks to build great applications that
        delight users. Whether it is account- & gas-abstraction, secure digital
        asset storage or a platform to build apps right into the user’s wallet.
      </SHeading>
    </ContentWrapper>
  </Container>
)

export default Description

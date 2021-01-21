import React from 'react'
import styled from 'styled-components'
import LinesSVG from '../../assets/lines.svg'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'


const Container = styled.div`
  position: relative;
  padding-top: 107px;
  padding-bottom: 122px;
  color: ${(p) => p.theme.palette.navy};
  padding: 0 20px;
  @media screen and (max-width: 980px) {
    padding: 30px 12px;
  }
`

const SHeading = styled(Heading)`
  letter-spacing: 1px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: -50px;
  stroke: ${(p) => p.theme.palette.primary};
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

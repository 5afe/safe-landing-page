import React from 'react'
import styled from 'styled-components'
import GnosisSafeOutline from '../../assets/gnosis-safe-outline.svg'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'

const SHeading = styled(Heading)`
  letter-spacing: -0.26px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
    padding: 0 12px;
  }
`

const SGnosisSafeOutline = styled(GnosisSafeOutline)`
  position: absolute;
  left: -150px;
  bottom: -85px;
  height: 382px;
  z-index: -1;
  @media screen and (max-width: 980px) {
    display: none;
  }
`

const Container = styled.div`
  padding: 0 20px;
  padding-top: 50px;
  padding-bottom: 241px;
  color: ${(p) => p.theme.palette.navy};
  overflow: hidden;
  @media screen and (max-width: 980px) {
    font-size: 16px;
    padding: 0;
  }
`

const SWrapper = styled(ContentWrapper)`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media screen and (max-width: 980px) {
    display: block;
    margin-top: 0;
    margin-bottom: 30px;
    padding: 0 12px;
  }
`

const LCol = styled.p`
  flex-basis: 25%;
`

const Col = styled.p`
  flex-basis: 35%;
  line-height: normal;
  letter-spacing: -0.09px;
  @media screen and (max-width: 980px) {
    margin-top: 30px;
  }
`

const Description = () => (
  <Container>
    <ContentWrapper>
      <SHeading>
        Gnosis has been developing blockchain-based financial, infrastructure
        products since 2016. In that time in the blockchain ecosystem, Gnosis
        has earned a reputation for expertise in engineering.
      </SHeading>
    </ContentWrapper>
    <SWrapper>
      <SGnosisSafeOutline />
      <LCol></LCol>
      <Col>
        There are currently more than 5,000 Gnosis wallets deployed, with the
        top 25 instances alone holding a combined volume of 1.4M Ether and more
        than $1B equivalent in digital assets.
      </Col>
      <Col>
        Our most advanced wallet solution, the Gnosis Safe Multisig, sets the
        industry-wide, highest security standards.
      </Col>
    </SWrapper>
  </Container>
)

export default Description

import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import GnosisSafeOutline from '../../assets/gnosis-safe-outline.svg'

const SHeading = styled(Heading)`
  letter-spacing: -0.26px;
`

const SGnosisSafeOutline = styled(GnosisSafeOutline)`
  position: absolute;
  left: -150px;
  bottom: -85px;
  z-index: -1;
  height: 382px;
`

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 150px;
`

const SWrapper = styled(ContentWrapper)`
  position: relative;
  display: flex;
  justify-content: flex-end;
`

const LCol = styled.p`
  flex-basis: 48%;
  line-height: normal;
  letter-spacing: -0.09px;
  padding: 30px 100px;
`

const RCol = styled.p`
  flex-basis: 35%;
  width: 100%;
  line-height: normal;
  letter-spacing: -0.09px;
  padding: 30px;
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
      <LCol>
        There are currently more than 5,000 Gnosis wallets deployed, with the
        top 25 instances alone holding a combined volume of 1.4M Ether and more
        than $1B equivalent in digital assets.
      </LCol>
      <RCol>
        Our most advanced wallet solution, the Gnosis Safe Multisig, sets the
        industry-wide, highest security standards.
      </RCol>
    </SWrapper>
  </Container>
)

export default Description

import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import ButtonLink from '../../ui/ButtonLink'
import Heading from '../../ui/Heading'
import Card from './Card'
import TimeIcon from '../../../assets/icon-time.svg'
import MoneyIcon from '../../../assets/icon-money.svg'
import MoneyBagIcon from '../../../assets/icon-moneybag.svg'
import LinesSVG from '../../../assets/lines.svg'

const Container = styled.div`
  padding: 112px 0;
  background-color: rgba(0, 140, 115, 0.88);
  color: ${p => p.theme.palette.navy};
  position: relative;
  z-index: -1;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 80px;
`

const LCol = styled.div`
  flex-basis: 25%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LHeading = styled(Heading)`
  margin-bottom: 43px;
`

const SHeading = styled(Heading)`
  margin-top: 166px;
  margin-bottom: 100px;
`

const Text = styled.p`
  letter-spacing: 0.36px;
  margin-bottom: 37px;
  line-height: normal;
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`

const BugBounty = () => (
  <Container>
    <SLinesSVG />
    <ContentWrapper>
      <Row>
        <LCol>
          <LHeading>Our biggest bug bounty program ever</LHeading>
          <ButtonLink url="/" colorScheme="white">
            Start bug hunting
          </ButtonLink>
        </LCol>
        <RCol>
          <Card img={TimeIcon} title="Running for 20 months" />
          <Card img={MoneyIcon} title="Up to $100 000 per bug" />
          <Card img={MoneyBagIcon} title="Running for 20 months" />
        </RCol>
      </Row>
      <SHeading>
        To this day, no major or critical issues have been found in the
        codebase!
      </SHeading>
    </ContentWrapper>
  </Container>
)

export default BugBounty

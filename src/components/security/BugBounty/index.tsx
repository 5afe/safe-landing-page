import React from 'react'
import styled from 'styled-components'
import MoneyIcon from '../../../assets/icon-money.svg'
import TimeIcon from '../../../assets/icon-time.svg'
import LinesSVG from '../../../assets/lines.svg'
import ContentWrapper from '../../Layout/ContentWrapper'
import ButtonLink from '../../ui/ButtonLink'
import Heading from '../../ui/Heading'
import Card from './Card'
import { SECURITY_CATEGORY, useAnalytics } from '../../../utils/googleAnalytics'

const Container = styled.div`
  padding: 112px 20px 170px 20px;
  background-color: rgba(0, 140, 115, 0.88);
  color: ${(p) => p.theme.palette.navy};
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 980px) {
    padding: 0 12px 30px;
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
  flex-basis: 41%;
  flex-direction: column;
`

const RCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  @media screen and (max-width: 980px) {
    margin-top: 40px;
  }
`

const LHeading = styled(Heading)`
  margin-bottom: 43px;
  max-width: 330px;
  @media screen and (max-width: 980px) {
    margin-bottom: 30px;
    font-size: 25px;
    padding-top: 30px;
    max-width: 100%;
  }
`

const SHeading = styled(Heading)`
  margin-top: 166px;
  margin-bottom: 100px;
  @media screen and (max-width: 980px) {
    margin-top: 0;
    margin-bottom: 70px;
    font-size: 25px;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-20%);
  opacity: 0.27;
  stroke: #d8d8d8;
  @media screen and (max-width: 980px) {
    display: none;
  }
`

const SContentWrapper = styled(ContentWrapper)`
  position: relative;
  z-index: 100;
`

const SButtonLink = styled(ButtonLink)`
  display: block;
  text-align: center;
  width: 165px;
  padding: 0;
  margin-top: 30px;
  box-shadow: none;
  & > div {
    width: 165px;
    padding: 10px 20px;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 30px;
  }
`

const BugBounty = () => {
  const { trackEvent } = useAnalytics()

  return (
    <Container>
      <SLinesSVG />
      <SContentWrapper>
        <Row>
          <LCol>
            <LHeading>Our biggest bug bounty program ever</LHeading>
            <SButtonLink
              url="https://docs.gnosis-safe.io/introduction/security/bug-bounty-program"
              colorScheme="white"
            >
              <div
                onClick={() =>
                  trackEvent({
                    category: SECURITY_CATEGORY,
                    action: 'Bug Bounty section',
                    label: 'Click Start bug hunting',
                  })
                }
              >
                Start bug hunting
              </div>
            </SButtonLink>
          </LCol>
          <RCol>
            <Card img={TimeIcon} title="Running since July 2018" />
            <Card img={MoneyIcon} title="Up to $1,000,000 per bug" />
          </RCol>
        </Row>
        <SHeading>
          To this day, no major or critical issues have been found in the
          codebase!
        </SHeading>
      </SContentWrapper>
    </Container>
  )
}

export default BugBounty

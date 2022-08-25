import React from 'react'
import styled from 'styled-components'
import LinesSVG from '../../assets/lines.svg'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import { DEVELOPERS_CATEGORY, useAnalytics } from '../../utils/googleAnalytics'

const Container = styled.div`
  padding: 200px 20px 211px;
  position: relative;
  color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 980px) {
    padding: 0 12px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    display: block;
  }
`

const LRow = styled.div`
  margin-top: 65px;
  @media screen and (max-width: 980px) {
    margin: 0 0 40px 0;
  }
`

const LCol = styled.div`
  flex-basis: 25%;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  @media screen and (max-width: 980px) {
    padding: 0 0 30px 0;
  }
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
  @media screen and (max-width: 980px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const SSubHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: -250px;
  stroke: ${(p) => p.theme.palette.primary};
  opacity: 0.4;
  z-index: -1;
  @media screen and (max-width: 980px) {
    bottom: 0;
    opacity: 0.5;
  }
`

const SButtonLink = styled(ButtonLink)`
  display: block;
  text-align: center;
  width: 165px;
  margin-top: 30px;
  box-shadow: none;
  padding: 0;
  & > div {
    padding: 10px 20px;
  }
  @media screen and (max-width: 980px) {
    margin: 0;
    margin-bottom: 30px;
  }
`

const SafeApps = () => {
  const { trackEvent } = useAnalytics()

  return (
    <Container>
      <SLinesSVG />
      <ContentWrapper>
        <Row>
          <LCol>
            <SHeading>Safe Apps</SHeading>
            <LRow>
              <SButtonLink
                url="https://docs.gnosis.io/safe/docs/sdks_safe_apps/"
                colorScheme="navy"
              >
                <div
                  onClick={() =>
                    trackEvent({
                      category: DEVELOPERS_CATEGORY,
                      action: 'Safe Apps section',
                      label: 'Click Build a Safe App',
                    })
                  }
                >
                  Build a Safe App
                </div>
              </SButtonLink>
            </LRow>
          </LCol>
          <RCol>
            <Row>
              <SSubHeading>
                With over $1B worth of digital assets held in Safes
                alone, it’s essential for the dapp ecosystem to access this
                untapped market.
              </SSubHeading>
            </Row>
            <Row>
              <SubCol>
                Safe Apps introduce a completely new way for developers to build
                their dapps right into the Safe interface.
              </SubCol>
              <SubCol>
                Turn your Dapp into an HTML iframe component that can be
                accessed through Safe.
              </SubCol>
            </Row>
          </RCol>
        </Row>
      </ContentWrapper>
    </Container>
  )
}

export default SafeApps

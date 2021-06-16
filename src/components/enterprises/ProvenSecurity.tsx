import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import { ENTERPRISES_CATEGORY, useAnalytics } from '../../utils/googleAnalytics'

const Container = styled.div`
  padding: 100px 20px;
  position: relative;
  color: ${(p) => p.theme.palette.white};
  background-color: ${(p) => p.theme.palette.navy};
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
  color: ${(p) => p.theme.palette.grey};
  @media screen and (max-width: 980px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const SSubHeading = styled.h3`
  font-size: 45px;
  font-weight: 800;
  letter-spacing: 1px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`

const SButtonLink = styled(ButtonLink)`
  box-shadow: none;
  padding: 0;
  & > div {
    padding: 10px 20px;
    border: 1px solid red;
  }
`

const ProvenSecurity = () => {
  const { trackEvent } = useAnalytics()

  return (
    <Container>
      <ContentWrapper>
        <Row>
          <LCol>
            <SHeading>Proven security</SHeading>
          </LCol>
          <RCol>
            <Row>
              <SSubHeading>
                Our wallet solution has proven itself in the industry with
                hundreds of deployed instances. Learn more about the proven
                security of the Gnosis Safe.
              </SSubHeading>
            </Row>
            <Row>
              <SubCol>
                <SButtonLink url="/security" colorScheme="green">
                  <div
                    onClick={() =>
                      trackEvent({
                        category: ENTERPRISES_CATEGORY,
                        action: 'Proven Security section',
                        label: 'Click See security properties',
                      })
                    }
                  >
                    See security properties
                  </div>
                </SButtonLink>
              </SubCol>
            </Row>
          </RCol>
        </Row>
      </ContentWrapper>
    </Container>
  )
}

export default ProvenSecurity

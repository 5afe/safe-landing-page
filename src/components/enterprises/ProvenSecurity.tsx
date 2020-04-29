import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  color: ${(p) => p.theme.palette.white};
  background-color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 1240px) {
    padding: 0;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1240px) {
    display: block;
  }
`

const LCol = styled.div`
  flex-basis: 25%;
  @media screen and (max-width: 1240px) {
    padding: 0 12px;
  }
`

const RCol = styled.div`
  flex-basis: 72.5%;
  @media screen and (max-width: 1240px) {
    padding: 0 12px 30px 12px;
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
  @media screen and (max-width: 1240px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const SSubHeading = styled.h3`
  font-size: 45px;
  font-weight: 800;
  letter-spacing: 1px;
  @media screen and (max-width: 1240px) {
    font-size: 16px;
  }
`

const SButtonLink = styled(ButtonLink)`
  box-shadow: none;
`

const ProvenSecurity = () => (
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
              security of the Gnosis Safe Multisig.
            </SSubHeading>
          </Row>
          <Row>
            <SubCol>
              <SButtonLink url="/security" colorScheme="green">
                See security properties
              </SButtonLink>
            </SubCol>
          </Row>
        </RCol>
      </Row>
    </ContentWrapper>
  </Container>
)

export default ProvenSecurity

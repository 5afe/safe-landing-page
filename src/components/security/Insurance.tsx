import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import LinesSVG from '../../assets/bg-lines-03.svg'

const Container = styled.div`
  padding: 175px 0 328px 0;
  position: relative;
  color: ${p => p.theme.palette.navy};
  overflow: hidden;
  @media screen and (max-width: 1240px) {
    padding: 90px 0 40px 0;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 0 12px;
  }
`

const LRow = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 1240px) {
    margin-top: 30px;
  }
`

const LCol = styled.div`
  flex-basis: 25%;
`

const CCol = styled.div`
  flex-basis: 35%;
  padding-right: 30px;
  letter-spacing: 0.36px;
  line-height: normal;
  @media screen and (max-width: 1240px) {
    margin-top: 30px;
  }
`

const RCol = styled.div`
  flex-basis: 35%;
  font-size: 16px;
  letter-spacing: 0.36px;
  line-height: normal;
  @media screen and (max-width: 1240px) {
    margin-top: 30px;
  }
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const Text = styled.p`
  display: inline;
  b {
    font-weight: 800;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  opacity: 0.31;
`

const Insurance = () => (
  <Container>
    <SLinesSVG />
    <ContentWrapper>
      <Row>
        <LCol>
          <SHeading>
            Insurance
            <br />
            by Nexus Mutual
          </SHeading>
        </LCol>
        <CCol>
          <Text>
            <b>Still have doubts about the smart contracts’ security?</b> You
            can insure funds stored in the Gnosis Safe against potential smart
            contract attacks, through Nexus Mutual services.
          </Text>
        </CCol>
        <RCol>
          Click below and use the smart contract address
          gnosissafe.nexusmutual.eth to get cover!
          <LRow>
            <ButtonLink url="https://nexusmutual.io/" colorScheme="navy">
              Get a quote
            </ButtonLink>
          </LRow>
        </RCol>
      </Row>
    </ContentWrapper>
  </Container>
)

export default Insurance

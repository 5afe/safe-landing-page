import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import LinesSVG from '../../assets/bg-lines-03.svg'

const Container = styled.div`
  padding: 175px 0 328px 0;
  position: relative;
  color: ${p => p.theme.palette.navy};
  overflow: hidden;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const LRow = styled.div`
  margin-top: 50px;
`

const LCol = styled.p`
  flex-basis: 25%;
`

const CCol = styled.p`
  flex-basis: 35%;
  padding-right: 30px;
  letter-spacing: 0.36px;
  line-height: normal;
`

const RCol = styled.p`
  flex-basis: 35%;
  font-size: 16px;
  letter-spacing: 0.36px;
  line-height: normal;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const BoldText = styled.p`
  font-weight: 800;
  display: inline;
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
          <BoldText>
            Still have doubts about the smart contracts’ security?
          </BoldText>
          You can insure funds stored in the Gnosis Safe against potential smart
          contract attacks, through Nexus Mutual services.
        </CCol>
        <RCol>
          Click below and use the smart contract address
          gnosissafe.nexusmutual.eth to get cover!
          <LRow>
            <ButtonLink
              url="https://app.nexusmutual.io/#/SmartContractCover"
              colorScheme="navy"
            >
              Get a quote
            </ButtonLink>
          </LRow>
        </RCol>
      </Row>
    </ContentWrapper>
  </Container>
)

export default Insurance

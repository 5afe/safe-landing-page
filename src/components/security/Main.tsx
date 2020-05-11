import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'

const Container = styled.div`
  height: calc(100vh - 56px);
  position: relative;
  color: ${(p) => p.theme.palette.navy};
  overflow: hidden;
  @media screen and (max-width: 1240px) {
    height: auto;
  }
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 0 12px;
  }
`

const SHeading = styled(Heading)`
  margin-bottom: 30px;
  @media screen and (max-width: 1240px) {
    font-size: 28px;
    margin-top: 30px;
  }
`

const Text = styled.p`
  font-size: 25px;
  line-height: normal;
  letter-spacing: 0.56px;
  @media screen and (max-width: 1240px) {
    font-size: 16px;
  }
`

const LCol = styled.div`
  flex-basis: 32%;
  flex-direction: column;
  height: 300px;
  @media screen and (max-width: 1240px) {
    height: auto;
    margin-bottom: 30px;
  }
`

const RCol = styled.div`
  flex-basis: 55%;
  position: relative;
  height: 300px;
  color: ${(p) => p.theme.palette.primary};
  @media screen and (max-width: 1240px) {
    height: auto;
    margin-bottom: 30px;
  }
`

const UsdWorthValueContainer = styled.div`
  padding: 15px 15px 0;
  border-radius: 5px;
  margin-bottom: 42px;
  border: 2px solid ${(p) => p.theme.palette.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1240px) {
    padding-bottom: 10px;
  }
`

const UsdWorthValue = styled.h1`
  font-size: 115px;
  font-weight: 800;
  letter-spacing: 2.56px;
  white-space: nowrap;
  @media screen and (max-width: 1240px) {
    font-size: 50px;
  }
`

const UsdWorthNotes = styled.p`
  height: 60px;
  font-size: 25px;
  letter-spacing: -0.24px;
  height: auto;
  margin-bottom: 10px;
  @media screen and (max-width: 1240px) {
    margin-bottom: 0;
    display: inline;
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.16px;
  }
`

const UsdWorthDate = styled.p`
  height: 19px;
  font-size: 15px;
  letter-spacing: -0.15px;
  @media screen and (max-width: 1240px) {
    display: inline;
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.16px;
  }
`

const MainSection = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>A new standard for smart contract security</SHeading>
        <Text>How we make sure your funds are safe</Text>
      </LCol>
      <RCol>
        <UsdWorthValueContainer>
          <UsdWorthValue>{process.env.GATSBY_USD_WORTH_VALUE}</UsdWorthValue>
        </UsdWorthValueContainer>
        <UsdWorthNotes>
          {'USD worth of digital assets securely stored in Gnosis Safes '}
        </UsdWorthNotes>
        <UsdWorthDate>{process.env.GATSBY_USD_WORTH_DATE}</UsdWorthDate>
      </RCol>
    </SWrapper>
  </Container>
)

export default MainSection

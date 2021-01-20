import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'

const Container = styled.div`
  height: calc(100vh - 56px);
  position: relative;
  color: ${(p) => p.theme.palette.navy};
  overflow: hidden;
  padding: 0 20px;
  @media screen and (max-width: 980px) {
    height: auto;
  }
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: stretch;
  height: 100%;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 0 12px;
  }
`

const SHeading = styled(Heading)`
  margin-bottom: 30px;
  @media screen and (max-width: 980px) {
    font-size: 28px;
    margin-top: 30px;
  }
`

const Text = styled.p`
  font-size: 25px;
  line-height: normal;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`

const LCol = styled.div`
  flex-direction: column;
  height: 350px;
  width: 420px;
  min-width: 420px;
  padding-right: 40px;
  @media screen and (max-width: 980px) {
    height: auto;
    width: auto;
    min-width: 0;
    margin-bottom: 30px;
  }
`

const RCol = styled.div`
  flex-grow: 1;
  position: relative;
  height: 350px;
  color: ${(p) => p.theme.palette.primary};
  @media screen and (max-width: 980px) {
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
  @media screen and (max-width: 980px) {
    padding-bottom: 10px;
  }
`

const UsdWorthValue = styled.h1`
  --font-size: 115px;
  font-size: 7.8vw;
  font-weight: 800;
  letter-spacing: 2.56px;
  white-space: nowrap;
  @media screen and (max-width: 980px) {
    font-size: 50px;
  }
  @media screen and (min-width: 1450px) {
    font-size: 114px;
  }
`

const UsdWorthNotes = styled.p`
  height: 60px;
  font-size: 25px;
  letter-spacing: -0.24px;
  height: auto;
  margin-bottom: 10px;
  @media screen and (max-width: 980px) {
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
  a {
    text-decoration: none;
    color: ${(p) => p.theme.palette.primary};
  }
  @media screen and (max-width: 980px) {
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
        <UsdWorthDate>
          <a
            target="_blank"
            href="https://explore.duneanalytics.com/dashboard/gnosis-safe_2"
          >
            {process.env.GATSBY_USD_WORTH_DATE}
          </a>
        </UsdWorthDate>
      </RCol>
    </SWrapper>
  </Container>
)

export default MainSection

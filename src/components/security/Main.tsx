import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import ButtonLink from '../ui/ButtonLink'

const Container = styled.div`
  height: calc(100vh - 56px);
  position: relative;
  color: ${p => p.theme.palette.navy};
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const SHeading = styled(Heading)`
  margin-bottom: 30px;
`

const Text = styled.p`
  font-size: 25px;
  line-height: normal;
  letter-spacing: 0.56px;
`

const LCol = styled.div`
  flex-basis: 32%;
  flex-direction: column;
  height: 300px;
`

const RCol = styled.div`
  flex-basis: 55%;
  position: relative;
  height: 300px;
  color: ${p => p.theme.palette.primary};
`

const UsdWorthValue = styled.h1`
  padding: 14px 18px 0;
  font-size: 115px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 2.56px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 42px;
  border: 2px solid ${p => p.theme.palette.primary};
  white-space: nowrap;
`

const UsdWorthNotes = styled.p`
  height: 60px;
  font-size: 25px;
  letter-spacing: -0.24px;
  height: auto;
  margin-bottom: 10px;
`

const UsdWorthDate = styled.p`
  height: 19px;
  font-size: 15px;
  letter-spacing: -0.15px;
`

const MainSection = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>A new standard for smart contract security</SHeading>
        <Text>How we make sure your funds are safe</Text>
      </LCol>
      <RCol>
        <UsdWorthValue>24,568,527</UsdWorthValue>
        <UsdWorthNotes>
          USD worth of digital assets securely stored in Gnosis Safes
        </UsdWorthNotes>
        <UsdWorthDate>(as of feb 21TH 2020)</UsdWorthDate>
      </RCol>
    </SWrapper>
  </Container>
)

export default MainSection

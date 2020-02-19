import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'

const Container = styled.section`
  padding-top: 50px;
  padding-bottom: 315px;
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const LCol = styled.div`
  flex-basis: 16%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 65%;
  width: 100%;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const TrustedBy = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>Trusted by</SHeading>
      </LCol>
      <RCol></RCol>
    </SWrapper>
  </Container>
)

export default TrustedBy

import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import Input from '../../ui/Input'

const Row = styled.div`
  display: flex;
  height: 100%;
`

const Container = styled.div`
  padding: 112px 0;
  background-color: rgba(0, 140, 115, 0.88);
`

const LCol = styled.div`
  flex-basis: 25%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 35%;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  margin-bottom: 29px;
`

const GetNotified = () => (
  <Row>
    <LCol>
      <SHeading>Get notified about future releases</SHeading>
    </LCol>
    <RCol>
      <Input placeholder="Your Email Address" />
    </RCol>
  </Row>
)

export default GetNotified

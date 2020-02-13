import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'

const Container = styled.div`
  padding: 112px 0;
  background-color: ${p => p.theme.palette.primary};
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
  margin-bottom: 29px;
`

const Text = styled.p`
  letter-spacing: 0.36px;
  margin-bottom: 37px;
  line-height: normal;
`

const Features = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>Features</SHeading>
        <Text>
          Missing a feature?
          <br />
          Let us know!
        </Text>
        <ButtonLink url="http://safe.cnflx.io/" colorScheme="white">
          Feature idea board
        </ButtonLink>
      </LCol>
      <RCol></RCol>
    </SWrapper>
  </Container>
)

export default Features

import React from 'react'
import styled from 'styled-components'
import Legal from './Legal'
import ContentWrapper from '../ContentWrapper'

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`

const Footer: React.FC = () => (
  <Container>
    <ContentWrapper>
      <Legal />
    </ContentWrapper>
  </Container>
)

export default Footer

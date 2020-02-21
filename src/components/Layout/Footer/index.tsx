import React from 'react'
import styled from 'styled-components'
import Social from './Social'
import Legal from './Legal'

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`

const SNList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`

const Footer: React.FC<{}> = () => (
  <Container>
    <Social />
    <Legal />
  </Container>
)

export default Footer

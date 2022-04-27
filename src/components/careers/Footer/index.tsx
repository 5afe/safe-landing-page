import React from 'react'
import styled from 'styled-components'

import Social from '../../home/Social'

const Title = styled.h3`
  font-size: 45px;
  line-height: 52px;
  font-weight: bolder;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }
`

const Container = styled.div`
  background-color: white;
  padding: 80px 0;
  text-align: center;
`

const Footer = () => {
  return (
    <Container>
      <Title>Find out more about us</Title>
      <Social />
    </Container>
  )
}

export default Footer

import React from 'react'
import styled from 'styled-components'

import Social from '../../home/Social'
import { SectionTitle } from '../styled'
import { sizes } from '../../../styles/styleUtils'

const Section = styled.div`
  background-color: white;
  padding: 80px 0;
  text-align: center;

  @media screen and (max-width: ${sizes.md}px) {
    padding: 64px 0;
  }
`

const Footer = () => {
  return (
    <Section>
      <SectionTitle>Find out more about us</SectionTitle>
      <Social />
    </Section>
  )
}

export default Footer

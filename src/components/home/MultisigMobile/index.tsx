import React from 'react'
import styled from 'styled-components'
import SignUpBox from './SignUpBox'
import ContentWrapper from '../../Layout/ContentWrapper'
import LinesSVG from '../../../assets/lines.svg'

const SectionContainer = styled.section`
  padding: 135px 0 407px;
  position: relative;
  @media screen and (max-width: 1240px) {
    padding: 0;
  }
`

const SRow = styled(ContentWrapper)`
  display: flex;
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: 150px;
  width: 100%;
`

const MultisigMobile = () => (
  <SectionContainer>
    <SLinesSVG />
    <SRow>
      <SignUpBox />
    </SRow>
  </SectionContainer>
)

export default MultisigMobile

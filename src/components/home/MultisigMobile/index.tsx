import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import SignUpBox from './SignUpBox'

const SectionContainer = styled.section`
  padding: 135px 0 170px;
  background-color: ${p => p.theme.palette.pink};
`

const SRow = styled(ContentWrapper)`
  display: flex;
`

const MultisigMobile = () => (
  <SectionContainer>
    <SRow>
      <SignUpBox />
    </SRow>
  </SectionContainer>
)

export default MultisigMobile

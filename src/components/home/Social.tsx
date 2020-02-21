import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'

const SectionContainer = styled.div`
  background-color: ${p => p.theme.palette.pink};
`

const Social: React.FC = () => {
  return (
    <SectionContainer>
      <ContentWrapper></ContentWrapper>
    </SectionContainer>
  )
}

export default Social

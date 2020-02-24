import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'

const Container = styled.section`
  padding: 145px 0;
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const LCol = styled.div`
  flex-basis: 25%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  width: 100%;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  line-height: normal;
`

const Projects = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>Projects building on Gnosis Safe</SHeading>
      </LCol>
      <RCol></RCol>
    </SWrapper>
  </Container>
)

export default Projects

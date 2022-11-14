import React from 'react'
import styled from 'styled-components'
import LinesSVG from '../../assets/bg-lines-03.svg'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'

const Container = styled.main`
  height: calc(100vh - 56px);
  position: relative;
  padding: 0 20px;
  background-color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 980px) {
    height: auto;
    padding: 0 12px;
  }
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  z-index: 10;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 30px 0 40px 0;
  }
`

const SHeading = styled(Heading)`
  margin-bottom: 50px;
  color: ${(p) => p.theme.palette.grey};
  @media screen and (max-width: 980px) {
    max-width: 100%;
    font-size: 28px;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: -100px;
  stroke: #d8d8d8;
  opacity: 0.27;
  z-index: 1;
  @media screen and (max-width: 980px) {
    bottom: -50px;
  }
`

const LCol = styled.div`
  flex-basis: 50%;
  flex-direction: column;
`

const MainSection = () => {
  return (
    <Container>
      <SLinesSVG />
      <SWrapper>
        <LCol>
          <SHeading>
            The digital asset management solution for enterprises
          </SHeading>
        </LCol>
      </SWrapper>
    </Container>
  )
}

export default MainSection

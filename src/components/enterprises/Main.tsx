import React from 'react'
import styled from 'styled-components'
import LinesSVG from '../../assets/bg-lines-03.svg'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
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

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 410px;
  @media screen and (max-width: 980px) {
    display: block;
    width: 180px;
  }
`

const SButtonLink = styled(ButtonLink)`
  text-align: center;
  width: 185px;
  box-shadow: none;
  @media screen and (max-width: 980px) {
    padding: 10px 0;
    margin-bottom: 20px;
  }
`

const MainSection = () => (
  <Container>
    <SLinesSVG />
    <SWrapper>
      <LCol>
        <SHeading>
          The digital asset management solution for enterprises
        </SHeading>
        <ButtonsRow>
          <SButtonLink
            colorScheme="white"
            url="https://drive.google.com/file/d/1n1b6bV9zrruFwZnayNDvwCbXE2FluABK/view"
            target="_blank"
            explicitExternal
          >
            Download brochure
          </SButtonLink>
          <SButtonLink
            colorScheme="green"
            url="https://calendly.com/c/GDFSZXFSETPU6LQH" //TO-DO: Replace with typeform link
            target="_blank"
            explicitExternal
          >
            Get in touch
          </SButtonLink>
        </ButtonsRow>
      </LCol>
    </SWrapper>
  </Container>
)

export default MainSection

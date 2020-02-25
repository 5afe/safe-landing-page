import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import ButtonLink from '../ui/ButtonLink'
import SafeLogo from '../../assets/safe-logo.svg'

const Container = styled.div`
  height: calc(100vh - 56px);
  position: relative;
  color: ${p => p.theme.palette.navy};
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const SHeading = styled(Heading)`
  margin-bottom: 30px;
`

const Text = styled.p`
  font-size: 25px;
  line-height: normal;
  letter-spacing: 0.56px;
`

const LCol = styled.div`
  flex-basis: 29%;
  flex-direction: column;
  height: 300px;
`

const RCol = styled.div`
  flex-basis: 55%;
  position: relative;
  height: 300px;
  color: ${p => p.theme.palette.primary};
`

const Triangle = styled.span`
  width: 164px;
  height: 164px;
  transform: rotate(25deg);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #979797;
  background-color: ${p => p.theme.palette.navy};
  position: absolute;
  left: 0;
  top: -40px;
`

const SmallRectangle = styled.span`
  width: 161px;
  height: 48px;
  border-radius: 4px;
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.12);
  background-color: ${p => p.theme.palette.greyGreen};
  position: absolute;
  left: 70px;
  bottom: 0;
`

const BigRectangle = styled.span`
  width: 134px;
  height: 122px;
  transform: rotate(-25deg);
  border-radius: 4px;
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.12);
  background-color: ${p => p.theme.palette.greyGreen};
  position: absolute;
  right: 0;
  top: -50px;
`

const Circle = styled.span`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #979797;
  background-color: ${p => p.theme.palette.navy};
  position: absolute;
  right: 100px;
  bottom: 50px;
`

const SSafeLogo = styled(SafeLogo)`
  width: 192px;
  height: 192px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 260px;
`

const MainSection = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>Build with Gnosis Safe</SHeading>
        <Text>
          The tools you need to build world-class applications on Ethereum
        </Text>
      </LCol>
      <RCol>
        <Triangle />
        <BigRectangle />
        <SSafeLogo />
        <SmallRectangle />
        <Circle />
      </RCol>
    </SWrapper>
  </Container>
)

export default MainSection

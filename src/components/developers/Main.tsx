//import { ButtonLink } from '@gnosis.pm/safe-react-components'
import React from 'react'
import styled from 'styled-components'
import SafeLogo from '../../assets/safe-logo.svg'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import Heading from '../ui/Heading'

const Container = styled.div`
  height: calc(100vh - 56px);
  position: relative;
  color: ${(p) => p.theme.palette.navy};
  overflow: hidden;
  @media screen and (max-width: 980px) {
    height: auto;
  }
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 980px) {
    padding: 0 12px;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const SHeading = styled(Heading)`
  margin-bottom: 30px;
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    font-size: 28px;
    max-width: 180px;
    padding: 30px 0 45px 0;
  }
`

const Text = styled.p`
  font-size: 25px;
  line-height: normal;
  letter-spacing: 0.56px;
  margin-bottom: 30px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
    letter-spacing: 0.36px;
    max-width: 230px;
  }
`

const LCol = styled.div`
  flex-basis: 29%;
  flex-direction: column;
  height: 320px;
  min-width: 350px;
  @media screen and (max-width: 980px) {
    height: auto;
    flex-basis: 60%;
    min-width: 0;
  }
`

const RCol = styled.div`
  flex-basis: 55%;
  position: relative;
  height: 320px;
  color: ${(p) => p.theme.palette.primary};
  @media screen and (max-width: 980px) {
    flex-basis: 60%;
    max-width: 120px;
    margin-top: 10px;
    height: 130px;
  }
`

const Triangle = styled.span`
  width: 164px;
  height: 164px;
  transform: rotate(25deg);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #979797;
  background-color: ${(p) => p.theme.palette.navy};
  position: absolute;
  left: 0;
  top: -40px;
  @media screen and (max-width: 980px) {
    width: 50px;
    height: 50px;
    top: 20px;
    left: -15px;
  }
`

const SmallRectangle = styled.span`
  width: 161px;
  height: 48px;
  border-radius: 4px;
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.12);
  background-color: ${(p) => p.theme.palette.greyGreen};
  position: absolute;
  left: 70px;
  bottom: 0;
  @media screen and (max-width: 980px) {
    height: 14px;
    width: 44px;
    left: 10px;
  }
`

const BigRectangle = styled.span`
  width: 134px;
  height: 122px;
  transform: rotate(-25deg);
  border-radius: 4px;
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.12);
  background-color: ${(p) => p.theme.palette.greyGreen};
  position: absolute;
  right: 30px;
  top: -50px;
  @media screen and (max-width: 980px) {
    display: none;
  }
`

const Circle = styled.span`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #979797;
  background-color: ${(p) => p.theme.palette.navy};
  position: absolute;
  right: 100px;
  bottom: 50px;
  @media screen and (max-width: 980px) {
    display: none;
  }
`

const SSafeLogo = styled(SafeLogo)`
  width: 192px;
  height: 192px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 34%;
  @media screen and (max-width: 980px) {
    width: 52px;
    height: 52px;
    right: 0;
    left: auto;
    top: 50px;
  }
`

const MainSection = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>Build with Gnosis Safe</SHeading>
        <Text>
          The tools you need to build world-class applications on Ethereum
        </Text>
        <ButtonLink url="https://docs.gnosis.io/safe" colorScheme="green">
          Dev Portal
        </ButtonLink>
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

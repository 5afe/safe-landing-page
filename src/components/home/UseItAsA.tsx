import React from 'react'
import styled from 'styled-components'
import IndividualIcon from '../../assets/individual.svg'
import TeamIcon from '../../assets/team.svg'
import ContentWrapper from '../Layout/ContentWrapper'

const Container = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  color: ${(p) => p.theme.palette.navy};
  overflow: hidden;
  @media screen and (max-width: 1240px) {
    padding: 0;
  }
`

const SWrapper = styled(ContentWrapper)`
  height: 100%;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 0px 10px 20px 10px;
  }
`

const SHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 44px;
  line-height: 1.18;
  padding-bottom: 50px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 1240px) {
    padding: 30px 0;
    font-size: 36px;
  }
`

const UseOptions = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1240px) {
    flex-flow: column;
  }
`

const Team = styled.div`
  width: 50%;
  padding: 0 0 0 100px;
  @media screen and (max-width: 1240px) {
    padding: 0;
    width: 100%;
    border: none;
  }
`
  
const Individual = styled.div`
  border-left: 2px solid ${(p) => p.theme.palette.lightGrey};
  width: 50%;
  padding: 0 100px 0 0;
  @media screen and (max-width: 1240px) {
    padding: 0;
    width: 100%;
    border: none;
  }
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 32px;
  line-height: 1.13;
  padding-bottom: 40px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 1240px) {
    font-size: 28px;
    padding: 20px 0;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1240px) {
    flex-flow: column;
    align-items: center;
  }
`

const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  @media screen and (max-width: 1240px) {
    width: 100%;
  }
  & > svg {
    height: 70px;
  }
`

const Text = styled.div`
  font-size: 20px;
  line-height: 1.3;
  text-align: center;
  padding-top: 25px;
  @media screen and (max-width: 1240px) {
    padding: 20px 0 30px;
  }
`

const UseItAsA = () => (
  <Container>
    <SWrapper>
      <SHeading>Use it as a...</SHeading>
      <UseOptions>
        <Team>
          <Title>Team</Title>
          <Content>
            <Element>
              <TeamIcon />
              <Text>For company crypto assets</Text>
            </Element>
          </Content>
        </Team>
        <Individual>
          <Title>Individual</Title>
          <Content>
            <Element>
              <IndividualIcon />
              <Text>For private crypto assets</Text>
            </Element>
          </Content>
        </Individual>
      </UseOptions>
    </SWrapper>
  </Container>
)

export default UseItAsA

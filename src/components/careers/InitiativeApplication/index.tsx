import React from 'react'
import styled from 'styled-components'

import ContentWrapper from '../../Layout/ContentWrapper'
import Arrow from '../../../assets/arrow.svg'

const Section = styled.section`
  background-color: ${(p) => p.theme.palette.navy};
`

const Wrapper = styled.div`
  color: white;
  padding: 100px 0;
`

const Title = styled.h3`
  font-size: 45px;
  font-weight: bolder;
  margin-bottom: 24px;
`

const Text = styled.p`
  font-size: 24px;
  line-height: 32px;
`

const Link = styled.a`
  font-size: 16px;
  color: ${(p) => p.theme.palette.navy};
  line-height: 22px;
  font-weight: bold;
  background-color: ${(p) => p.theme.palette.white};
  padding: 15px 24px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin-top: 56px;

  &:hover {
    background-color: ${(p) => p.theme.palette.lightGreyBackground};
  }
`

const StyledArrow = styled(Arrow)`
  position: relative;
  margin-left: 32px;
  top: 12px;
`

const LinkContainer = styled.div`
  position: relative;
`

const InitiativeApplication = () => {
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <Title>Couldn’t find what you were looking for?</Title>
          <Text>Send us an initiative application!</Text>
          <LinkContainer>
            <Link href="mailto:jobs@gnosis.pm">jobs@gnosis.pm</Link>
            <StyledArrow />
          </LinkContainer>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}

export default InitiativeApplication

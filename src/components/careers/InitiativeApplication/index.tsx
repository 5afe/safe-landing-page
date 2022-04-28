import React from 'react'
import styled from 'styled-components'

import ContentWrapper from '../../Layout/ContentWrapper'
import Arrow from '../../../assets/arrow.svg'
import { SectionTitle } from '../styled'
import { sizes } from '../../../styles/styleUtils'

const Section = styled.section`
  background-color: ${(p) => p.theme.palette.navy};
  color: white;
  padding: 100px 0;

  @media screen and (max-width: ${sizes.md}px) {
    padding: 64px 0;
  }
`

const Text = styled.p`
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: ${sizes.md}px) {
    font-size: 20px;
    line-height: 28px;
    text-align: center;
  }
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

  @media screen and (max-width: ${sizes.md}px) {
    display: none;
  }
`

const LinkContainer = styled.div`
  position: relative;

  @media screen and (max-width: ${sizes.md}px) {
    display: flex;
    justify-content: center;
  }
`

const InitiativeApplication = () => {
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle noCenter>
          Couldn’t find what you were looking for?
        </SectionTitle>
        <Text>Send us an initiative application!</Text>
        <LinkContainer>
          <Link href="mailto:jobs@gnosis.pm">jobs@gnosis.pm</Link>
          <StyledArrow />
        </LinkContainer>
      </ContentWrapper>
    </Section>
  )
}

export default InitiativeApplication

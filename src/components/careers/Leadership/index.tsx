import { SectionTitle } from '../styled'
import * as React from 'react'
import styled from 'styled-components'

import ContentWrapper from '../../Layout/ContentWrapper'
import LeadershipCard from './Card'
import { sizes } from '../../../styles/styleUtils'

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media screen and (max-width: ${sizes.md}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 48px;
    grid-column-gap: 16px;
  }
`

const Section = styled.section`
  padding: 150px 0;
  background-color: ${(p) => p.theme.palette.white};

  @media screen and (max-width: ${sizes.md}px) {
    padding: 64px 0;
  }
`

const Leadership = () => {
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Meet our Leadership Team</SectionTitle>
        <Grid>
          <LeadershipCard
            imageURL="/images/richard.png"
            name="Richard Meissner"
            position="Tech Lead"
            social={{
              twitter: 'https://twitter.com/rimeissner',
              github: 'https://github.com/rmeissner',
            }}
          />
          <LeadershipCard
            imageURL="/images/tobias.png"
            name="Tobias Schubotz"
            position="Product & Operations"
            social={{
              twitter: 'https://twitter.com/tschubotz',
            }}
          />
          <LeadershipCard
            imageURL="/images/lukas.png"
            name="Lukas Schor"
            position="Ecosystem"
            social={{
              twitter: 'https://twitter.com/SchorLukas',
            }}
          />
          <LeadershipCard
            imageURL="/images/christoph.png"
            name="Christoph Simmchen"
            position="Governance & Operations"
            social={{
              twitter: 'https://twitter.com/CSimmchen',
            }}
          />
        </Grid>
      </ContentWrapper>
    </Section>
  )
}

export default Leadership

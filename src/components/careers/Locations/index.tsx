import * as React from 'react'
import styled from 'styled-components'

import ContentWrapper from '../../Layout/ContentWrapper'
import { offices } from './locations'
import LocationCard from './Card'
import { SectionTitle } from '../styled'
import { sizes } from '../../../styles/styleUtils'

const Section = styled.section`
  padding: 100px 0;
  background-color: ${(p) => p.theme.palette.white};

  @media screen and (max-width: ${sizes.md}px) {
    padding: 64px 0;
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: ${sizes.md}px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`

const Locations = () => {
  return (
    <Section>
      <SectionTitle>Our hubs</SectionTitle>
      <ContentWrapper>
        <Grid>
          {offices.map((office) => (
            <LocationCard key={office.city} address={office} />
          ))}
        </Grid>
      </ContentWrapper>
    </Section>
  )
}

export default Locations

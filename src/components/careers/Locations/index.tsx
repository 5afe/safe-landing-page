import * as React from 'react'
import styled from 'styled-components'

import ContentWrapper from '../../Layout/ContentWrapper'
import { offices } from './locations'
import LocationCard from './Card'
import { SectionTitle } from '../styled'

const Section = styled.section`
  padding: 100px 0;
  background-color: ${(p) => p.theme.palette.white};
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: 768px) {
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
            <LocationCard address={office} />
          ))}
        </Grid>
      </ContentWrapper>
    </Section>
  )
}

export default Locations

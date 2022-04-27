import * as React from 'react'
import styled from 'styled-components'

import ContentWrapper from '../../Layout/ContentWrapper'
import { offices } from './locations'
import LocationCard from './Card'

const Locations = () => {
  const Section = styled.section`
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

  return (
    <Section>
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

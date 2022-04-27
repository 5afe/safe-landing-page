import * as React from 'react'
import styled from 'styled-components'
import LocationCard from './Card'

export interface OfficeAddress {
  city: string
  street: string
  postcode: string
  country: string
}
const Locations = () => {
  const Section = styled.section`
    background-color: ${(p) => p.theme.palette.white};

    //remove
    height: 100vh;
    padding: 20px;
  `

  const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  `

  const offices: OfficeAddress[] = [
    {
      city: 'Berlin',
      street: 'Skalitzer Str.85',
      postcode: '10997',
      country: 'Germany',
    },
    {
      city: 'Lisboa',
      street: 'Skalitzer Str.85',
      postcode: '10997',
      country: 'Portugal',
    },
    {
      city: 'A Coruña',
      street: 'Skalitzer Str.85',
      postcode: '10997',
      country: 'Spain',
    },
  ]

  return (
    <Section>
      <Grid>
        {offices.map((office) => (
          <LocationCard address={office} />
        ))}
      </Grid>
    </Section>
  )
}

export default Locations

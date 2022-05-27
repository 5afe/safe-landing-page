import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

import { Card } from './Card'
import ContentWrapper from '../../Layout/ContentWrapper'
import { SectionTitle } from '../styled'
import { sizes } from '../../../styles/styleUtils'

const Text = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  max-width: 730px;
  margin: 0 auto;

  strong {
    font-weight: bold;
  }
`

export type Job = {
  id: string
  friendly_id: string
  name: string
  url: string
  published_date: string
  type: {
    id: string
    name: string
  }
  location: {
    country: {
      name: string
      id: string
    }
    city: string
    is_remote: boolean
    name: string
  }
  department: string
  company: {
    name: string
    logo_url: string | null
    friendly_id: string
  }
}

const Section = styled.section`
  padding: 100px 0;

  @media screen and (max-width: ${sizes.md}px) {
    padding: 64px 0;
  }
`

const Positions = ({ positions }: { positions: Job[] | undefined }) => {
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle id="positions">Open positions</SectionTitle>
        {!positions ? (
          <Text>
            Unfortunately, there are <strong>no positions available</strong> at
            the moment. However, you can always send us your CV and we will get
            in touch if a matching position opens up.
          </Text>
        ) : (
          <Grid container spacing={3}>
            {positions.map((job) => {
              return (
                <Grid key={job.id} item xs={12} sm={6} md={4}>
                  <Card
                    location={job.location.name}
                    title={job.name}
                    url={job.url}
                  />
                </Grid>
              )
            })}
          </Grid>
        )}
      </ContentWrapper>
    </Section>
  )
}

export default Positions

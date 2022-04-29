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

export type Department = {
  id: number
  name: string
  jobs: Job[]
  parent_id: unknown
  child_ids: number[]
}

type JobMeta = {
  id: number
  name: string
  value: unknown
  value_type: string
}

export type Job = {
  absolute_url: string
  data_compliance: {
    type: string
    requires_consent: boolean
    retention_period: number
  }[]
  id: number
  internal_job_id: number
  location: {
    name: string
  }
  metadata: JobMeta[]
  requisition_id: unknown
  title: string
  updated_at: string
}

export type Jobs = {
  jobs: Job[]
  meta: {
    total: number
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
                    title={job.title}
                    url={job.absolute_url}
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

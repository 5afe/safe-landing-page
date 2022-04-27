import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

import { Card } from './Card'
import ContentWrapper from '../../Layout/ContentWrapper'
import { usePositions } from './usePositions'

const SectionTitle = styled.h2`
  font-size: 45px;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 56px;
`

const Text = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  max-width: 730px;
  margin: 0 auto;

  & strong {
    font-weight: bold;
  }
`

type JobMeta = {
  id: number
  name: string
  value: unknown
  value_type: string
}

type Job = {
  absolute_url: string
  data_compliance: unknown[]
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

const Positions = ({ positions }: { positions: Job[] | undefined }) => {
  return (
    <ContentWrapper>
      <SectionTitle id="positions">Open positions</SectionTitle>
      {!positions ? (
        <Text>
          Unfortunately, there are <strong>no positions available</strong> at
          the moment. However, you can always send us your CV and we will get in
          touch if a matching position opens up.
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
  )
}

export default Positions

import React from 'react'
import { Grid } from '@material-ui/core'
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

export const Positions = () => {
  const positions = usePositions()

  return (
    <ContentWrapper>
      <SectionTitle>Open positions</SectionTitle>
      <Grid container spacing={3}>
        {positions &&
          positions.jobs.map((job) => {
            return (
              <Grid key={job.id} item xs={12} md={4}>
                <Card
                  location={job.location.name}
                  title={job.title}
                  url={job.absolute_url}
                />
              </Grid>
            )
          })}
      </Grid>
    </ContentWrapper>
  )
}

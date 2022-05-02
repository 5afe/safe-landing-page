import * as React from 'react'

import Layout from '../components/Layout'
import MostTrusted from '../components/careers/MostTrusted'
import Header from '../components/careers/Header'
import Benefits from '../components/careers/Benefits'
import Leadership from '../components/careers/Leadership'
import Positions from '../components/careers/Positions'
import Locations from '../components/careers/Locations'
import InitiativeApplication from '../components/careers/InitiativeApplication'
import Footer from '../components/careers/Footer'
import { usePositions } from '../components/careers/Positions/usePositions'
import { Box } from '@material-ui/core'

export default () => {
  const positions = usePositions()

  return (
    <Layout title="Careers">
      <Box overflow="hidden">
        <Header openPositions={positions.length} />
        <MostTrusted />
        <Benefits />
        <Leadership />
        <Positions positions={positions} />
        <InitiativeApplication />
        <Locations />
        <Footer />
      </Box>
    </Layout>
  )
}

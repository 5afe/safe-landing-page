import * as React from 'react'

import Layout from '../components/Layout'
import Header from '../components/careers/Header'
import Benefits from '../components/careers/Benefits'
import Leadership from '../components/careers/Leadership'
import Positions from '../components/careers/Positions'
import Locations from '../components/careers/Locations'
import InitiativeApplication from '../components/careers/InitiativeApplication'
import Footer from '../components/careers/Footer'
import { usePositions } from '../components/careers/Positions/usePositions'

export default () => {
  const positions = usePositions()

  return (
    <Layout title="Careers">
      <Header openPositions={positions?.meta.total} />
      <Benefits />
      <Leadership />
      <Positions positions={positions?.jobs} />
      <InitiativeApplication />
      <Locations />
      <Footer />
    </Layout>
  )
}

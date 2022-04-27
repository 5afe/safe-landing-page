import * as React from 'react'

import Layout from '../components/Layout'
import Benefits from '../components/careers/Benefits'
import Leadership from '../components/careers/Leadership'
import Positions from '../components/careers/Positions'
import Locations from '../components/careers/Locations'
import CallToAction from '../components/careers/CTA'

export default () => (
  <Layout title="Careers">
    <Benefits />
    <Leadership />
    <Positions />
    <CallToAction />
    <Locations />
  </Layout>
)

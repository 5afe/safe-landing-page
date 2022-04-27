import * as React from 'react'

import Layout from '../components/Layout'
import MostTrusted from '../components/careers/MostTrusted'
import Benefits from '../components/careers/Benefits'
import Leadership from '../components/careers/Leadership'
import Positions from '../components/careers/Positions'
import Locations from '../components/careers/Locations'

export default () => (
  <Layout title="Careers">
    <MostTrusted />
    <Benefits />
    <Leadership />
    <Positions />
    <Locations />
  </Layout>
)

import * as React from 'react'

import Layout from '../components/Layout'
import Benefits from '../components/careers/Benefits'
import Leadership from '../components/careers/Leadership'
import {Positions} from "../components/careers/Positions";

export default () => (
  <Layout title="Careers">
    <Benefits />
    <Leadership />
    <Positions />
    <Locations />
  </Layout>
)

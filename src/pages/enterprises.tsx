import * as React from 'react'
import Layout from '../components/Layout'
import MainSection from '../components/enterprises/Main'
import Projects from '../components/enterprises/Projects'
import Description from '../components/enterprises/Description'
import PolicyModules from '../components/enterprises/PolicyModules'

export default () => (
  <Layout title="Enterprises">
    <MainSection />
    <Projects />
    <Description />
    <PolicyModules />
  </Layout>
)

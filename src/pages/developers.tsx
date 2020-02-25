import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import MainSection from '../components/developers/Main'
import Description from '../components/developers/Description'
import Projects from '../components/developers/Projects'
import SafeApps from '../components/developers/SafeApps'
import Contracts from '../components/developers/Contracts'
import Repositories from '../components/developers/Repositories'

export default ({ location }) => (
  <Layout location={location}>
    <MainSection />
    <Description />
    <Projects />
    <Contracts />
    <SafeApps />
    <Repositories />
  </Layout>
)

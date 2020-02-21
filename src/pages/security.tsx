import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import MainSection from '../components/security/Main'
import Description from '../components/security/Description'
import FormallyVerified from '../components/security/FormallyVerified'
import Insurance from '../components/security/Insurance'
import Audits from '../components/security/Audits'
import BugBounty from '../components/security/BugBounty'

export default () => {
  return (
    <Layout location={location}>
      <MainSection />
      <Description />
      <FormallyVerified />
      <Audits />
      <Insurance />
      <BugBounty />
    </Layout>
  )
}

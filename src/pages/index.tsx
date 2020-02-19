import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import MainSection from '../components/home/Main'
import TrustedBy from '../components/home/TrustedBy'
import Features from '../components/home/Features'
import Testimonials from '../components/home/Testimonials'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.spacing.unit * 3}px;
`

export default () => {
  return (
    <Layout location={location}>
      <MainSection />
      <TrustedBy />
      <Features />
      <Testimonials />
    </Layout>
  )
}

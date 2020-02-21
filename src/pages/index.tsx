import * as React from 'react'
import Layout from '../components/Layout'
import MainSection from '../components/home/Main'
import TrustedBy from '../components/home/TrustedBy'
import Features from '../components/home/Features'
import Testimonials from '../components/home/Testimonials'
import MultisigMobile from '../components/home/MultisigMobile'

export default () => {
  return (
    <Layout location={location}>
      <MainSection />
      <TrustedBy />
      <Features />
      <Testimonials />
      <MultisigMobile />
    </Layout>
  )
}

import * as React from 'react'
import Layout from '../components/Layout'
import MainSection from '../components/home/Main'
import Clients from '../components/home/Clients'
import TrustedBy from '../components/home/TrustedBy'
import Features from '../components/home/Features'
import Testimonials from '../components/home/Testimonials'
import MultisigMobile from '../components/home/MultisigMobile'
import Social from '../components/home/Social'
import { loadIntercom } from '../utils/intercom'

loadIntercom()

export default () => (
  <Layout title="Overview">
    <MainSection />
    <Clients />
    <TrustedBy />
    <Features />
    <Testimonials />
    <MultisigMobile />
    <Social />
  </Layout>
)

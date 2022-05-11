import * as React from 'react'
import Layout from '../components/Layout'
import MainSection from '../components/home/Main'
import Clients from '../components/home/Clients'
import TrustedBy from '../components/home/TrustedBy'
import Features from '../components/home/Features'
import StorageComparison from '../components/home/StorageComparison'
import GettingStarted from '../components/home/GettingStarted'
import Testimonials from '../components/home/Testimonials'
import MultisigMobile from '../components/home/MultisigMobile'
import Social from '../components/home/Social'
import Chains from "../components/home/Chains";

export default () => (
  <Layout title="Overview">
    <MainSection />
    <TrustedBy />
    <Clients />
    <Chains />
    <Features />
    <StorageComparison />
    <GettingStarted />
    <Testimonials />
    <MultisigMobile />
    <Social />
  </Layout>
)

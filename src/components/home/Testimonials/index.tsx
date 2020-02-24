import React from 'react'
import styled from 'styled-components'
import Testimonial from './Testimonial'
import ContentWrapper from '../../Layout/ContentWrapper'
import BgGraySVG from '../../../assets/bg-gray-half.svg'

const SectionContainer = styled.section`
  padding: 240px 0 144px;
  position: relative;
`

const SBgSVG = styled(BgGraySVG)`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
`

const SectionHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const TestimonialsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 278px);
  grid-template-rows: repeat(3, 168px);
  grid-row-gap: 32px;
  justify-content: space-between;
`

const STestimonial1 = styled(Testimonial)`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;
`

const STestimonial2 = styled(Testimonial)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
`

const STestimonial3 = styled(Testimonial)`
  grid-column-start: 4;
  grid-row-start: 2;
  grid-row-end: 4;
`

const Testimonials = () => (
  <SectionContainer>
    <ContentWrapper>
      <TestimonialsContainer>
        <SectionHeading>Testimonials</SectionHeading>
        <Testimonial
          author="Jason Goldberg, Founder & CEO, Pepo/OST"
          colorScheme="white"
        >
          The Pepo team decided to build on the Gnosis Safe stack because of its
          modularity, flexibility, and security, allowing Pepo to take advantage
          of session keys, multi-device management, and account recovery —
          granting our users peace of mind while using a new social network.
        </Testimonial>
        <Testimonial
          author="Eric Conner, EthHub / Into The Ether Podcast"
          colorScheme="navy"
        >
          We use the Gnosis Safe Multisig to manage EthHub's funds and love it.
          The track record of Gnosis and their commitment to security is what
          led us to it. It gives us peace of mind while running our crypto
          business
        </Testimonial>
        <Testimonial author="Runtime Verification">
          From October 2018 to February 2019, we were engaged in the formal
          verification of the Gnosis Safe smart contract. We loved working with
          Gnosis developers, and we’re very impressed by their commitment to
          security in general, and formal verification in particular.
        </Testimonial>
        <STestimonial1
          author="Taylor Monahan, Founder & CEO, MyCrypto"
          colorScheme="white"
        >
          The Gnosis Safe Multisig is the clear leader when it comes to a
          product that balances usability, security, and self-custody. The
          longevity of their smart contracts is evidence of the Gnosis team’s
          comprehensive dedication to security, which is the most important
          thing when choosing a place to store your crypto assets. It cannot be
          matched
        </STestimonial1>
        <STestimonial2
          author="Christophe Lassuyt, Co-Founder & CFO, Request Network"
          colorScheme="navy"
        >
          The old Gnosis Multisig is a strong technology that lacked fluidity,
          while the new Gnosis Safe Multisig is easy, modern and strong. The
          team behind Gnosis is great technically, inspires confidence and is
          composed of persons that we trust. We're making the transition to the
          Safe Multisig over the next few months.
        </STestimonial2>
        <STestimonial3
          author="Manuel Garcia, CEO, Protofire"
          colorScheme="white"
        >
          Protofire has been using the Gnosis Multisig wallet for years. We
          recently migrated to the new Gnosis Safe Multisig which has become our
          single interface for internal and external crypto-financial
          activities. As Protofire provides professional services exclusively to
          companies in the crypto space, most of our income arrives to the Safe
          Mulltisig. That's how important the Gnosis Safe Multisig is to us and
          how much we trust the technology and the team behind its development.
        </STestimonial3>
      </TestimonialsContainer>
    </ContentWrapper>
    <SBgSVG />
  </SectionContainer>
)

export default Testimonials
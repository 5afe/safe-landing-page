import React from 'react'
import styled from 'styled-components'
import Testimonial from './Testimonial'
import ContentWrapper from '../../Layout/ContentWrapper'
import BgGraySVG from '../../../assets/bg-gray.svg'

const SectionContainer = styled.section`
  padding: 240px 0 279px;
  color: ${p => p.theme.palette.bgPrimary};
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

const Testimonials = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TestimonialsContainer>
          <SectionHeading>Testimonials</SectionHeading>
          <Testimonial author="Jacques-Yves Cousteau" colorScheme="white">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”
          </Testimonial>
          <Testimonial author="Jacques-Yves Cousteau" colorScheme="navy">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”
          </Testimonial>
          <Testimonial author="Jacques-Yves Cousteau">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”
          </Testimonial>
          <Testimonial author="Jacques-Yves Cousteau">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”
          </Testimonial>
          <Testimonial author="Jacques-Yves Cousteau" colorScheme="white">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”
          </Testimonial>
          <STestimonial1 author="Jacques-Yves Cousteau" colorScheme="white">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”“Lorem ipsum dolor sit amet,
          </STestimonial1>
          <STestimonial2 author="Jacques-Yves Cousteau" colorScheme="navy">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”
          </STestimonial2>
          <STestimonial3 author="Jacques-Yves Cousteau" colorScheme="white">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod
          </STestimonial3>
        </TestimonialsContainer>
      </ContentWrapper>
      <SBgSVG />
    </SectionContainer>
  )
}

export default Testimonials

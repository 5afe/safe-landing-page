import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftSVG from '../../assets/arrow-left.svg'
import ArrowRightSVG from '../../assets/arrow-right.svg'
import BgGraySVG from '../../assets/background.svg'
import { ITheme } from '../../styles/theme'
import ContentWrapper from '../Layout/ContentWrapper'

const Container = styled.section`
  padding: 50px 0 0;
  position: relative;
  @media screen and (max-width: 980px) {
    padding: 0px;
  }
`

const SBgSVG = styled(BgGraySVG)`
  position: absolute;
  fill: white;
  bottom: -80px;
  width: 100%;
  z-index: -1;
`

const SectionHeading = styled.h2`
  font-size: 44px;
  font-weight: 800;
  line-height: 1.18;
  text-align: center;
  padding-bottom: 60px;
  @media screen and (max-width: 980px) {
    font-size: 36px;
    padding-bottom: 30px;
  }
`

const TestimonialsContainer = styled.div`
  width: 750px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 980px) {
    width: 100%;
    padding: 10px;
    height: auto;
  }
`

const LeftArrow = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media screen and (max-width: 980px) {
    width: 24px;
    height: 24px;
    left: 10px;
    border-radius: 12px;
  }

  &:hover {
    background: #e8e7e6;
    opacity: 0.5;
  }
`

const RightArrow = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media screen and (max-width: 980px) {
    width: 24px;
    height: 24px;
    right: 10px;
    border-radius: 12px;
  }

  &:hover {
    background: #e8e7e6;
    opacity: 0.5;
  }
`

const Testimonial = styled.div`
  width: 500px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 980px) {
    position: relative;
    width: auto;
  }
`

const Img = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 40px auto 26px;
  @media screen and (max-width: 980px) {
    margin: 20px auto;
  }
`

const Quote = styled.h4`
  line-height: 30px;
  font-size: 24px;
  font-weight: bold;
  @media screen and (max-width: 980px) {
    font-size: 20px;
    margin: 0 auto;
    padding: 0 25px;
    max-width: 400px;
  }
`

const Author = styled.p`
  font-size: 20px;
  line-height: 26px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }

  & > a {
    text-decoration: none;
    color: ${(p) => p.theme.palette.primary};

    &:hover {
      color: ${(p) => p.theme.palette.primaryHover};
    }
  }
`

const DotContainer = styled.div`
  margin: 30px auto 0;
  width: 55px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    margin: 15px auto 20px;
  }
`

interface DotProps {
  active?: boolean
  theme: ITheme
}

const Dot = styled.div`
  border-radius: 6px;
  height: 12px;
  width: 12px;
  background: ${(p: DotProps) =>
    p.active ? p.theme.palette.primary : p.theme.palette.darkGrey};
  cursor: pointer;

  &:hover {
    background: ${(p: DotProps) =>
      p.active ? p.theme.palette.primary : p.theme.palette.darkGreyHover};
  }
`

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const slidesLength = 3

  const handleSelect = (selectedIndex: number) => {
    showSlide(selectedIndex)
  }

  const nextSlide = () => {
    showSlide(slideIndex + 1)
  }

  const previousSlide = () => {
    showSlide(slideIndex - 1)
  }

  const showSlide = (selectedIndex: number) => {
    if (selectedIndex > slidesLength) {
      setSlideIndex(1)
      return
    }
    if (selectedIndex < 1) {
      setSlideIndex(slidesLength)
      return
    }
    setSlideIndex(selectedIndex)
  }

  return (
    <Container>
      <ContentWrapper>
        <SectionHeading>Why our users trust us</SectionHeading>
        <TestimonialsContainer>
          <LeftArrow onClick={previousSlide}>
            <ArrowLeftSVG />
          </LeftArrow>
          {slideIndex === 1 && (
            <Testimonial>
              <Quote>
                "The Gnosis Safe Multisig is the clear leader when it comes to a
                product that balances usability, security, and self-custody."
              </Quote>
              <Img src="/images/testimonial-mycrypto.jpg" />
              <Author>
                Taylor Monahan{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/tayvano_"
                >
                  @tayvano
                </a>
                <br />
                Founder & CEO, MyCrypto
              </Author>
            </Testimonial>
          )}
          {slideIndex === 2 && (
            <Testimonial>
              <Quote>
                "The team behind Gnosis is great technically, inspires
                confidence and is composed of persons that we trust."
              </Quote>
              <Img src="/images/testimonial-request.jpg" />
              <Author>
                Christophe Lassuyt{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/LassuytChristop"
                >
                  @LassuytChristop
                </a>
                <br />
                Co-Founder & CFO, Request Network
              </Author>
            </Testimonial>
          )}
          {slideIndex === 3 && (
            <Testimonial>
              <Quote>
                "We loved working with Gnosis developers, and we’re very
                impressed by their commitment to security in general, and formal
                verification in particular."
              </Quote>
              <Img src="/images/testimonial-rv.jpg" />
              <Author>
                Runtime Verification{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/rv_inc"
                >
                  @rv_inc
                </a>
                <br />
                <br />
              </Author>
            </Testimonial>
          )}
          <RightArrow onClick={nextSlide}>
            <ArrowRightSVG />
          </RightArrow>
        </TestimonialsContainer>
        <DotContainer>
          <Dot onClick={() => handleSelect(1)} active={slideIndex === 1}></Dot>
          <Dot onClick={() => handleSelect(2)} active={slideIndex === 2}></Dot>
          <Dot onClick={() => handleSelect(3)} active={slideIndex === 3}></Dot>
        </DotContainer>
      </ContentWrapper>
      <SBgSVG />
    </Container>
  )
}

export default Testimonials

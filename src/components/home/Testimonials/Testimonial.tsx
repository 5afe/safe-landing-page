import React from 'react'
import styled, { css } from 'styled-components'
import { ITheme } from '../../../styles/theme'

interface STestimonialProps {
  theme: ITheme
  colorScheme?: ColorScheme
}

const colorsCSS = css`
  background-color: ${(p: STestimonialProps) => {
    const { colorScheme } = p

    if (colorScheme === 'navy') {
      return p.theme.palette.navy
    }

    if (colorScheme === 'white') {
      return p.theme.palette.pink
    }

    return p.theme.palette.primary
  }};
  color: ${(p: STestimonialProps) => {
    const { colorScheme } = p

    if (colorScheme === 'navy') {
      return p.theme.palette.pink
    }

    return p.theme.palette.navy
  }};
`

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 2px 10px 0 rgba(212, 212, 211, 0.59);

  padding: 13px;
  border-radius: 4px;

  ${colorsCSS}
`

const Quote = styled.p`
  line-height: normal;
  letter-spacing: 0.36px;
`

const Author = styled.p`
  font-weight: bold;
  text-align: end;
`

type ColorScheme = 'navy' | 'green' | 'white'

interface TestimonialProps {
  author: string
  children: React.ReactNode
  className?: string
  colorScheme?: ColorScheme
}

const Testimonial: React.FC<TestimonialProps> = ({
  author,
  children,
  className,
  colorScheme,
}) => (
  <TestimonialContainer className={className} colorScheme={colorScheme}>
    <Quote>{children}</Quote>
    <Author>{author}</Author>
  </TestimonialContainer>
)

export default Testimonial

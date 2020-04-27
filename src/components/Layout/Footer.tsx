import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  width: 100%;
  text-align: center;
  font-size: 11px;
  color: ${p =>
    p.title === 'Enterprises' ? p.theme.palette.white : p.theme.palette.navy};
  letter-spacing: 0.24px;
  position: absolute;
  bottom: 10px;
  background-color: transparent;
  overflow: hidden;
`

const Copyright = styled.p`
  display: inline;
`

const Link = styled.a`
  text-decoration: none;
  color: ${p =>
    p.title === 'Enterprises' ? p.theme.palette.white : p.theme.palette.navy};
`

interface FooterProps {
  title: string
}

const Footer: React.FC<FooterProps> = ({ title }) => (
  <Container title={title}>
    <Copyright>© Gnosis {new Date().getFullYear()}</Copyright>
    {' | '}
    <Link href="/terms" target="_blank" rel="noopener noreferrer" title={title}>
      Terms
    </Link>
    {' | '}
    <Link
      href="/privacy"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      Privacy
    </Link>
    {' | '}
    <Link
      href="/licenses"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      Licenses
    </Link>
    {' | '}
    <Link
      href="/imprint"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      Imprint
    </Link>
  </Container>
)

export default Footer

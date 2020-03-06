import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  width: 100%;
  text-align: center;
  font-size: 11px;
  color: ${p => p.theme.palette.navy};
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
  color: ${p => p.theme.palette.navy};
`

const Footer: React.FC = () => (
  <Container>
    <Copyright>© Gnosis {new Date().getFullYear()}</Copyright>
    {' | '}
    <Link href="/terms" target="_blank" rel="noopener noreferrer">
      Terms
    </Link>
    {' | '}
    <Link href="/privacy" target="_blank" rel="noopener noreferrer">
      Privacy
    </Link>
    {' | '}
    <Link href="/licenses" target="_blank" rel="noopener noreferrer">
      Licenses
    </Link>
    {' | '}
    <Link href="/imprint" target="_blank" rel="noopener noreferrer">
      Imprint
    </Link>
  </Container>
)

export default Footer

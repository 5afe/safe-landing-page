import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  width: 100%;
  text-align: center;
  font-size: 11px;
  padding-bottom: 20px;
  color: ${p => p.theme.palette.navy};
  letter-spacing: 0.24px;
`

const Copyright = styled.p`
  display: inline;
`

const Link = styled.a`
  text-decoration: none;
  color: ${p => p.theme.palette.navy};
`

const Legal: React.FC = () => {
  return (
    <Container>
      <Copyright>© Gnosis {new Date().getFullYear()}</Copyright>
      {' | '}
      <Link
        href="https://safe.gnosis.io/terms"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms
      </Link>
      {' | '}
      <Link
        href="https://safe.gnosis.io/privacy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy
      </Link>
      {' | '}
      <Link
        href="https://safe.gnosis.io/licenses"
        target="_blank"
        rel="noopener noreferrer"
      >
        Licenses
      </Link>
      {' | '}
      <Link
        href="https://safe.gnosis.io/imprint"
        target="_blank"
        rel="noopener noreferrer"
      >
        Imprint
      </Link>
    </Container>
  )
}

export default Legal

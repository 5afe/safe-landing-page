import React from 'react'
import styled from 'styled-components'
import Link from '../ui/Link'

const FooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  text-align: center;
  font-size: 13px;
  background-color: transparent;
  letter-spacing: 0.24px;
  position: absolute;
  bottom: 20px;
  overflow: hidden;
`

const Item = styled.div`
  color: ${(p) =>
    p.title === 'Enterprises' ? p.theme.palette.white : p.theme.palette.navy};
  font-size: 13px;
`

const Sep = styled.span`
  color: ${(p) =>
    p.title === 'Enterprises' ? p.theme.palette.white : p.theme.palette.navy};
  margin: 0 10px;
`

const SLink = styled(Link)`
  color: ${(p) =>
    p.title === 'Security' ? p.theme.palette.navy : p.theme.palette.primary};
  text-decoration: none;
  &:hover: {
    text-decoration: underline;
  }
`
const Preferences = styled.div`
  color: ${(p) =>
    p.title === 'Security' ? p.theme.palette.navy : p.theme.palette.primary};
  cursor: pointer;
`

interface FooterProps {
  title: string
}

const Footer = ({ title }: FooterProps) => {
  const date = new Date()

  const openCookiesHandler = () => {
    window.postMessage('OPEN_COOKIE_BANNER')
  }

  return (
    <FooterContainer>
      <Item title={title}>©{date.getFullYear()} Gnosis</Item>
      <Sep title={title}>|</Sep>
      <SLink
        to="/terms"
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        Terms
      </SLink>
      <Sep title={title}>|</Sep>
      <SLink
        to="/privacy"
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        Privacy
      </SLink>
      <Sep title={title}>|</Sep>
      <SLink
        to="/imprint"
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        Licenses
      </SLink>
      <Sep title={title}>|</Sep>
      <SLink
        to="/imprint"
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        Imprint
      </SLink>
      <Sep title={title}>|</Sep>
      <SLink
        to="/cookie"
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        Cookie Policy
      </SLink>
      <Sep title={title}>-</Sep>
      <Preferences title={title} onClick={openCookiesHandler}>
        Preferences
      </Preferences>
    </FooterContainer>
  )
}

export default Footer

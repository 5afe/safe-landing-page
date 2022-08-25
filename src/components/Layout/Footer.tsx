import React from 'react'
import styled from 'styled-components'
import { FOOTER_CATEGORY, useAnalytics } from '../../utils/googleAnalytics'
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
  padding: 0 10px;
  line-height: 25px;
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
  &:hover {
    color: ${(p) => p.title !== 'Security' && p.theme.palette.primaryHover};
  }
`
const Preferences = styled.div`
  color: ${(p) =>
    p.title === 'Security' ? p.theme.palette.navy : p.theme.palette.primary};
  cursor: pointer;

  &:hover {
    color: ${(p) => p.title !== 'Security' && p.theme.palette.primaryHover};
  }
`

interface FooterProps {
  title: string
}

const Footer = ({ title }: FooterProps) => {
  const { trackEvent } = useAnalytics()
  const date = new Date()

  const openCookiesHandler = () => {
    window.postMessage('OPEN_COOKIE_BANNER')
  }

  return (
    <FooterContainer>
      <Item title={title}>©{date.getFullYear()} Safe Ecosystem Foundation</Item>
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
        to="https://www.notion.so/Gnosis-Safe-Media-Kit-9b1fca2a566e40b8ac86396d788635b4"
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        <div
          onClick={() =>
            trackEvent({
              category: FOOTER_CATEGORY,
              action: 'Footer section',
              label: 'Click Press kit',
            })
          }
        >
          Press Kit
        </div>
      </SLink>
      <Sep title={title}>|</Sep>
      <SLink
        to="/licenses"
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

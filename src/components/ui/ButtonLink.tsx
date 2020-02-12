import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

interface ELProps {
  to: string
  children: React.ReactNode
  target?: string
}

const ButtonLinkCSS = css``

const ExternalLink: React.FC<ELProps> = ({ to, children, target }) => (
  <a href={to} rel="noopener noreferrer" target={target}>
    {children}
  </a>
)

interface Props {
  url: string
  children: React.ReactNode
  target?: string
}

const ButtonLink: React.FC<Props> = ({ url, children, target = '_blank' }) => {
  const internalLink = /^\/(?!\/)/.test(url)
  const LinkComponent = internalLink ? Link : ExternalLink

  const SLink = React.useMemo(
    () => styled(LinkComponent)`
      background-color: red;
    `,
    []
  )

  return (
    <SLink to={url} target={target}>
      {children}
    </SLink>
  )
}

export default ButtonLink

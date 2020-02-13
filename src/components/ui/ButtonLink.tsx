import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

interface ELProps {
  to: string
  children: React.ReactNode
  target?: string
  className: string
}

const ExternalLink: React.FC<ELProps> = ({
  to,
  children,
  target,
  className,
}) => (
  <a href={to} rel="noopener noreferrer" target={target} className={className}>
    {children}
  </a>
)

interface Props {
  url: string
  children: React.ReactNode
  target?: string
  className?: string
}

const ButtonLink: React.FC<Props> = ({
  url,
  children,
  target = '_blank',
  className = '',
}) => {
  const internalLink = /^\/(?!\/)/.test(url)
  const LinkComponent = internalLink ? Link : ExternalLink

  return (
    <LinkComponent to={url} target={target} className={className}>
      {children}
    </LinkComponent>
  )
}

const SButtonLink = styled(ButtonLink)`
  background-color: ${p => p.theme.palette.primary};
  color: ${p => p.theme.palette.pink};
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 1px 2px 10px 0 rgba(212, 212, 211, 0.59);

  &:hover {
    background-color: ${p => p.theme.palette.pink};
    color: ${p => p.theme.palette.navy};
  } 
`

export default SButtonLink

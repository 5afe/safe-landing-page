import React from 'react'
import styled from 'styled-components'
import { HEADER_CATEGORY, useAnalytics } from '../../../../utils/googleAnalytics'

export interface DropdownOption {
  title: string
  link: string
}

export const DropdownWrapper = styled.div`
  background: ${(p) => p.theme.palette.white};
`

const Entry = styled.div`
  text-align: center;
  padding: 25px;
  & > a {
    text-decoration: none;
    color: ${(p) => p.theme.palette.navy};
  }
`

const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.palette.navy};
`

interface DropdownProps {
  options: DropdownOption[]
}

const Dropdown = ({ options }: DropdownProps) => {
  const { trackEvent } = useAnalytics()

  return (
    <DropdownWrapper>
      {options &&
        options.map((option) => (
          <Link
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            key={option.title}
          >
            <Entry
              onClick={() =>
                trackEvent({
                  category: HEADER_CATEGORY,
                  action: 'Header section',
                  label: `Click Community > ${option.title}`,
                })
              }
            >
              {option.title}
            </Entry>
          </Link>
        ))}
    </DropdownWrapper>
  )
}

export default Dropdown

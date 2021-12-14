import React from 'react'
import styled from 'styled-components'
import { HEADER_CATEGORY, useAnalytics } from '../../../utils/googleAnalytics'

export interface DropdownOption {
  title: string
  link: string
}

export const DropdownWrapper = styled.div`
  display: none;
  position: absolute;
  width: 130px;
  left: -20px;
`

const Content = styled.div`
  margin-top: 30px;
  box-shadow: 0 0 10px 0 rgba(33, 48, 77, 0.1);
  border-radius: 8px;
  background: ${(p) => p.theme.palette.white};
  padding: 15px 0;
`

const Entry = styled.div`
  text-align: center;
  padding: 15px;
  & > a {
    text-decoration: none;
    color: ${(p) => p.theme.palette.navy};
  }
  :hover {
    background: ${(p) => p.theme.palette.pink};
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
      <Content>
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
      </Content>
    </DropdownWrapper>
  )
}

export default Dropdown

import styled, { css } from 'styled-components'
import { ITheme } from '../../styles/theme'

interface BtnProps {
  colorScheme?: ColorScheme
  theme: ITheme
}

type ColorScheme = 'navy' | 'green' | 'white'

const colorsCSS = css`
  background-color: ${(p: BtnProps) => {
    const { colorScheme } = p

    if (colorScheme === 'navy') {
      return p.theme.palette.navy
    }

    if (colorScheme === 'white') {
      return p.theme.palette.pink
    }

    return p.theme.palette.primary
  }};
  color: ${(p: BtnProps) => {
    const { colorScheme } = p

    if (colorScheme === 'navy') {
      return p.theme.palette.pink
    }

    if (colorScheme === 'white') {
      return p.theme.palette.navy
    }

    return p.theme.palette.pink
  }};
  box-shadow: ${(p: BtnProps) => {
    const { colorScheme } = p

    if (colorScheme === 'white') {
      return '1px 2px 10px 0 rgba(40, 54, 61, 0.18)'
    }

    return '1px 2px 10px 0 rgba(212, 212, 211, 0.59)'
  }};

  &:hover {
    background-color: ${(p: BtnProps) => {
      const { colorScheme } = p

      if (colorScheme === 'white') {
        return p.theme.palette.greyGreen
      }

      if (colorScheme === 'navy') {
        return p.theme.palette.slateGray
      }

      return p.theme.palette.darkGreenBlue
    }};
  }
`

const SButton = styled.button<BtnProps>`
  ${colorsCSS}

  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`

export default SButton

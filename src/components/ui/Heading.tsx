import styled from 'styled-components'
import { ITheme } from '../../styles/theme'

interface HProps {
  small?: boolean
  theme: ITheme
}

const SHeading = styled.h1`
  font-size: ${(p: HProps) => (p.small ? '25px' : '45px')};
  font-weight: 800;
  line-height: normal;
  color: ${(p: HProps) => p.theme.palette.navy};
`

export default SHeading

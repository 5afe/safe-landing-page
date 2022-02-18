import { Link } from 'gatsby'
import styled from 'styled-components'

const SLink = styled(Link)`
  color: ${(p) => p.theme.palette.navy};
  text-decoration: none;
`

export default SLink

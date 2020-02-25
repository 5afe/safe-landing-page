import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: Averta, sans-serif;
    background-color: #f4f4f4;
    position: relative;
  }
`

export default GlobalStyles

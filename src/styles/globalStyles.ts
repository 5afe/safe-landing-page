import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: Averta, sans-serif;
    background-color: #f5f5f5;
    position: relative;
  }
`

export default GlobalStyles

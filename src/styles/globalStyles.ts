import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    min-height: 100% !important;
    position: relative;
  }

  body {
    font-family: Averta, sans-serif;
    background-color: #f5f5f5;
    height: 100%;
    min-height: 100% !important;
  }
`

export default GlobalStyles

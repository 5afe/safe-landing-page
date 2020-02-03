import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyles from '../styles/globalStyles'
import Head from '../components/Layout/Head'

interface ILayoutProps {
  children: any
  location: {
    pathname: string
  }
}

const Wrapper = styled.div`
  display: flex;
`

const Layout: React.FC<ILayoutProps> = ({ children, location }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Head pathname={location.pathname} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Wrapper>
  )
}

export default Layout

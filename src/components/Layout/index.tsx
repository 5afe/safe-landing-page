import React from 'react'
import { ThemeProvider } from 'styled-components'
import HTMLHead from './HTMLHead'
import Header from './Header'
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/globalStyles'

interface ILayoutProps {
  children: any
  location: {
    pathname: string
  }
}

const Layout: React.FC<ILayoutProps> = ({ children, location }) => {
  return (
    <>
      <GlobalStyles />
      <HTMLHead pathname={location.pathname} />
      <ThemeProvider theme={theme}>
        <Header />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout

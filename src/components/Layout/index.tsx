import React from 'react'
import { ThemeProvider } from 'styled-components'
import HTMLHead from './HTMLHead'
import Header from './Header'
import Footer from './Footer'
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/globalStyles'

interface ILayoutProps {
  children: any
}

const Layout: React.FC<ILayoutProps> = ({ location, children }) => (
  <>
    <GlobalStyles />
    <HTMLHead />
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer location={location} />
    </ThemeProvider>
  </>
)

export default Layout

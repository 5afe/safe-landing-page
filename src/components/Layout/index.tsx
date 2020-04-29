import React from 'react'
import { ThemeProvider } from 'styled-components'
import HTMLHead from './HTMLHead'
import Header from './Header'
import Footer from './Footer'
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/globalStyles'
import CookiesBanner from '../../utils/CookiesBanner'

interface ILayoutProps {
  children: any
  title: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title }) => (
  <>
    <GlobalStyles />
    <HTMLHead title={title} />
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer title={title} />
      <CookiesBanner />
    </ThemeProvider>
  </>
)

export default Layout

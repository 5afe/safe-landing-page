import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import HTMLHead from './HTMLHead'
import Header from './Header'
import Footer from './Footer'
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/globalStyles'
import CookiesBanner from '../../utils/CookiesBanner'
import { useAnalytics } from '../../utils/googleAnalytics'

interface ILayoutProps {
  children: any
  title: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title }) => {
  const { trackPage } = useAnalytics()

  useEffect(() => {
    const checkGA = async () => {
      const page = typeof window !== 'undefined' && window.location.pathname
      const search = typeof window !== 'undefined' && window.location.search
      if (page && search) {
        await trackPage(page + search)
      }
    }
    checkGA()
  }, [typeof window !== 'undefined' && window.location.pathname, trackPage])

  return (
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
}

export default Layout

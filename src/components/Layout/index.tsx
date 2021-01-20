import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/globalStyles'
import theme from '../../styles/theme'
import CookiesBanner from '../../utils/CookiesBanner'
import { useAnalytics } from '../../utils/googleAnalytics'
import Footer from './Footer'
import Header from './Header'
import HTMLHead from './HTMLHead'

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
      if (page) {
        let fullPage = search ? page + search : page
        await trackPage(fullPage)
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

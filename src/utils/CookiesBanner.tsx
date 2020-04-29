import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { loadGoogleAnalytics } from './googleAnalytics'
import { loadIntercom } from './intercom'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import Link from '../components/ui/Link'
import {
  CookiesProps,
  saveCookie,
  loadFromCookie,
  COOKIES_KEY,
} from './cookies'

const Container = styled.div`
  background-color: #fff;
  bottom: 0;
  box-shadow: 0 2px 4px 0 rgba(212, 212, 211, 0.59);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  left: 0;
  min-height: 200px;
  padding: 27px 15px;
  position: fixed;
  width: 100%;
  z-index: 999;
`

const Content = styled.div`
  max-width: 100%;
  width: 830px;
`

const Text = styled.p`
  color: #001428;
  font-family: Averta, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.38;
  margin: 0 0 25px;
  text-align: center;
`

const Form = styled.div`
  column-gap: 10px;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 30px;
  row-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 0;
  }
`

const FormItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const SLink = styled(Link)`
  text-decoration: underline;
  &:hover: {
    text-decoration: none;
  }
`

const AcceptPreferences = styled.span`
  bottom: -20px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  text-decoration: underline;
  color: #001428;
  font-family: Averta, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.38;
  margin: 0 0 25px;
  text-align: center;

  @media (min-width: 768px) {
    bottom: -10px;
  }
  &:hover: {
    text-decoration: none;
  }
`

const SCheckbox = withStyles({
  root: {
    color: '#008c73',
    '&$checked': {
      color: '#008c73',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

const CookiesBanner = () => {
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [localNecessary, setLocalNecessary] = useState(true)
  const [localAnalytics, setLocalAnalytics] = useState(false)

  const [showBanner, setShowBanner] = useState(false)
  //const showBanner = useSelector(cookieBannerOpen)

  const handleOpenCookieBanner = (event: any) => {
    setShowBanner(event.data === 'OPEN_COOKIE_BANNER')
  }

  useEffect(() => {
    typeof window !== 'undefined' &&
      window.addEventListener('message', handleOpenCookieBanner)

    return () => {
      typeof window !== 'undefined' &&
        window.removeEventListener('message', handleOpenCookieBanner)
    }
  }, [])

  const openCookieBanner = (open: boolean) => {
    setShowBanner(open)
  }

  useEffect(() => {
    async function fetchCookiesFromStorage() {
      const cookiesState: CookiesProps = await loadFromCookie(COOKIES_KEY)
      if (cookiesState) {
        const { acceptedAnalytics, acceptedNecessary } = cookiesState
        setLocalAnalytics(acceptedAnalytics)
        setLocalNecessary(acceptedNecessary)
        const openBanner = acceptedNecessary === false || showBanner
        openCookieBanner(openBanner)
        setShowAnalytics(acceptedAnalytics)
      } else {
        openCookieBanner(true)
      }
    }
    fetchCookiesFromStorage()
  }, [showBanner])

  const acceptCookiesHandler = async () => {
    const newState = {
      acceptedNecessary: true,
      acceptedAnalytics: true,
    }
    await saveCookie(COOKIES_KEY, newState, 365)
    openCookieBanner(false)
    setShowAnalytics(true)
  }

  const closeCookiesBannerHandler = async () => {
    const newState = {
      acceptedNecessary: true,
      acceptedAnalytics: localAnalytics,
    }
    const expDays = localAnalytics ? 365 : 7
    await saveCookie(COOKIES_KEY, newState, expDays)
    setShowAnalytics(localAnalytics)
    openCookieBanner(false)
  }

  const cookieBannerContent = (
    <Container>
      <AcceptPreferences
        onClick={closeCookiesBannerHandler}
        onKeyDown={closeCookiesBannerHandler}
        role="button"
        tabIndex="0"
      >
        Accept preferences &gt;
      </AcceptPreferences>
      <Content>
        <Text>
          We use cookies to give you the best experience and to help improve our
          website. Please read our{' '}
          <SLink to="https://safe.gnosis.io/cookie">Cookie Policy</SLink> for
          more information. By clicking &quot;Accept all&quot;, you agree to the
          storing of cookies on your device to enhance site navigation, analyze
          site usage and provide customer support.
        </Text>
        <Form>
          <FormItem>
            <FormControlLabel
              checked={localNecessary}
              control={<Checkbox disabled />}
              disabled
              label="Necessary"
              name="Necessary"
              onChange={() => setLocalNecessary((prev) => !prev)}
              value={localNecessary}
            />
          </FormItem>
          <FormItem>
            <FormControlLabel
              control={<SCheckbox checked={localAnalytics} />}
              label="Analytics"
              name="Analytics"
              onChange={() => setLocalAnalytics((prev) => !prev)}
              value={localAnalytics}
            />
          </FormItem>
          <FormItem>
            <Button
              color="primary"
              component={Link}
              minWidth={180}
              onClick={() => acceptCookiesHandler()}
              variant="outlined"
            >
              Accept All
            </Button>
          </FormItem>
        </Form>
      </Content>
    </Container>
  )

  if (showAnalytics) {
    console.log('SHOW INTERCOM AND LOAD ANALYTICS')
    loadIntercom()
    loadGoogleAnalytics()
  }

  return showBanner ? cookieBannerContent : null
}

export default CookiesBanner

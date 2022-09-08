import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import Link from '../components/ui/Link'
import {
  CookiesProps,
  COOKIES_KEY,
  loadFromCookie,
  saveCookie,
} from './cookies'
import { loadGoogleAnalytics } from './googleAnalytics'
import { CookieAttributes } from 'js-cookie'

const Container = styled.div``

const SCookieBanner = styled.div`
  background-color: #fff;
  bottom: 0;
  box-shadow: 0 2px 4px 0 rgba(212, 212, 211, 0.59);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  left: 0;
  min-height: 200px;
  padding: 30px 15px 45px;
  position: fixed;
  width: 100%;
  z-index: 999;
`

const Content = styled.div`
  max-width: 100%;
`

const Text = styled.p`
  color: #001428;
  font-family: Averta, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.38;
  margin: 0 auto 35px;
  text-align: center;
  max-width: 810px;
`

const Form = styled.div`
  column-gap: 20px;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 50px;
  row-gap: 15px;
  @media (min-width: 1050px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding-bottom: 0;
    row-gap: 5px;
  }
  margin: 0 auto;
`

const FormItem = styled.div`
  align-items: center;
  min-width: 180px;
  display: flex;
  justify-content: center;
`

const SLink = styled(Link)`
  color: ${(p) => p.theme.palette.primary};
  text-decoration: underline;
`

const SButton = styled(Button)`
  min-width: 180px;
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

interface CookiesBannerFormProps {
  alertMessage: boolean
}

const CookiesBanner = () => {
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [localNecessary, setLocalNecessary] = useState(true)
  const [localAnalytics, setLocalAnalytics] = useState(false)

  const [showBanner, setShowBanner] = useState(false)
  const [showAlertMessage, setShowAlertMessage] = useState(false)

  const handleOpenCookieBanner = (event: any) => {
    if (event.data !== 'OPEN_COOKIE_BANNER') return
    setShowBanner(true)
  }

  useEffect(() => {
    typeof window !== 'undefined' &&
      window.addEventListener('message', handleOpenCookieBanner)

    return () => {
      typeof window !== 'undefined' &&
        window.removeEventListener('message', handleOpenCookieBanner)
    }
  }, [])

  const openCookieBanner = (open: boolean, alertMessage = false) => {
    if (alertMessage) {
      setShowAlertMessage(alertMessage)
    }
    setShowBanner(open)
  }

  useEffect(() => {
    const fetchCookiesFromStorage = async () => {
      const cookiesState: CookiesProps = await loadFromCookie(COOKIES_KEY)
      if (cookiesState) {
        const {
          acceptedSupportAndUpdates,
          acceptedAnalytics,
          acceptedNecessary,
        } = cookiesState
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
    setShowAlertMessage(false)
    const newState = {
      acceptedNecessary: true,
      acceptedAnalytics: true,
      acceptedSupportAndUpdates: true,
    }
    const cookieConfig: CookieAttributes = {
      expires: 365,
    }
    await saveCookie(COOKIES_KEY, newState, cookieConfig)
    setShowAnalytics(true)
    openCookieBanner(false)
  }

  const closeCookiesBannerHandler = async () => {
    setShowAlertMessage(false)
    const newState = {
      acceptedNecessary: true,
      acceptedAnalytics: localAnalytics,
    }
    const cookieConfig: CookieAttributes = {
      expires: localAnalytics ? 365 : 7,
    }
    await saveCookie(COOKIES_KEY, newState, cookieConfig)
    setShowAnalytics(localAnalytics)
    openCookieBanner(false)
  }

  if (showAnalytics) {
    loadGoogleAnalytics()
  }

  const CookiesBannerForm = (props: CookiesBannerFormProps) => {
    const { alertMessage } = props
    return (
      <SCookieBanner>
        <Content>
          <Text>
            We use cookies to provide you with the best experience and to help
            improve our website and application.
            <br />
            Please read our <SLink to="/cookie">Cookie Policy</SLink> for more
            information. By clicking "Accept all", you agree to the storing of
            cookies on your device to enhance site navigation, analyze site
            usage and provide customer support.
          </Text>
          <Form>
            <FormItem>
              <FormControlLabel
                checked={localNecessary}
                control={<SCheckbox disabled />}
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
              <SButton
                colorScheme="emptyWhite"
                component={Link}
                onClick={() => closeCookiesBannerHandler()}
                variant="outlined"
              >
                Accept selection
              </SButton>
            </FormItem>
            <FormItem>
              <SButton component={Link} onClick={() => acceptCookiesHandler()}>
                Accept all
              </SButton>
            </FormItem>
          </Form>
        </Content>
      </SCookieBanner>
    )
  }

  return (
    <Container>
      {showBanner && <CookiesBannerForm alertMessage={showAlertMessage} />}
    </Container>
  )
}

export default CookiesBanner

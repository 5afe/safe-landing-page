import GoogleAnalytics, { EventArgs } from 'react-ga'
import { CookiesProps, COOKIES_KEY, loadFromCookie } from './cookies'

export const HEADER_CATEGORY = 'HEADER_CATEGORY'
export const OVERVIEW_CATEGORY = 'OVERVIEW'
export const SECURITY_CATEGORY = 'SECURITY'
export const ENTERPRISES_CATEGORY = 'ENTERPRISES'
export const DEVELOPERS_CATEGORY = 'DEVELOPERS'
export const FOOTER_CATEGORY = 'FOOTER_CATEGORY'

const getGoogleAnalyticsTrackingID = () => {
  return typeof window !== 'undefined' &&
    (window.location.hostname === 'safe.global' ||
      window.location.hostname === 'gnosis-safe.io')
    ? process.env.GATSBY_GA_PROD
    : process.env.GATSBY_GA_STAGING
}

let analyticsLoaded = false
export const loadGoogleAnalytics = () => {
  if (analyticsLoaded) {
    return
  }
  // eslint-disable-next-line no-console
  const trackingID = getGoogleAnalyticsTrackingID()
  if (!trackingID) {
    console.error(
      '[GoogleAnalytics] - In order to use google analytics you need to add an trackingID'
    )
  } else {
    GoogleAnalytics.initialize(trackingID)
    GoogleAnalytics.set({ anonymizeIp: true })
    analyticsLoaded = true
  }
}

type UseAnalyticsResponse = {
  trackPage: (path: string) => void
  trackEvent: (event: EventArgs) => void
}

export const useAnalytics = (): UseAnalyticsResponse => {
  const trackPage = async (page: string, options = {}) => {
    const cookiesState: CookiesProps = await loadFromCookie(COOKIES_KEY)
    if (!cookiesState || !cookiesState.acceptedAnalytics || !analyticsLoaded) {
      return
    }
    GoogleAnalytics.set({
      page,
      ...options,
    })
    GoogleAnalytics.pageview(page)
  }

  const trackEvent = async (event: EventArgs) => {
    const cookiesState: CookiesProps = await loadFromCookie(COOKIES_KEY)
    if (!cookiesState || !cookiesState.acceptedAnalytics || !analyticsLoaded) {
      return
    }
    GoogleAnalytics.event(event)
  }

  return { trackPage, trackEvent }
}

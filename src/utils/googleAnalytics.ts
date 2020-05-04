import { useCallback, useEffect, useState } from 'react'
import GoogleAnalytics from 'react-ga'
import { CookiesProps, loadFromCookie, COOKIES_KEY } from './cookies'

const getGoogleAnalyticsTrackingID = () => {
  return typeof window !== 'undefined' &&
    window.location.hostname.split('.')[0] === 'gnosis-safe'
    ? process.env.GATSBY_GA_MAINNET
    : process.env.GATSBY_GA_RINKEBY
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

export const useAnalytics = () => {
  const trackPage = async (page: string, options = {}) => {
    const cookiesState: CookiesProps = await loadFromCookie(COOKIES_KEY)
    if (
      !cookiesState ||
      (cookiesState && !cookiesState.acceptedAnalytics) ||
      !analyticsLoaded
    ) {
      return
    }
    GoogleAnalytics.set({
      page,
      ...options,
    })
    GoogleAnalytics.pageview(page)
  }

  return { trackPage }
}

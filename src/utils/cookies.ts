import Cookies, { CookieAttributes } from 'js-cookie'

export const COOKIES_KEY = 'COOKIES'
export const COOKIES_KEY_INTERCOM = `${COOKIES_KEY}_INTERCOM`

export type CookiesProps = {
  acceptedNecessary: boolean
  acceptedAnalytics: boolean
  acceptedIntercom: boolean
  cookieBannerOpen: boolean
}

const VERSION_PREFIX = 'v1_'
const PREFIX = `${VERSION_PREFIX}MAINNET__`

export const loadFromCookie = async (key: string, withoutPrefix = false): Promise<any> => {
  const prefix = withoutPrefix ? '' : PREFIX
  try {
    const stringifiedValue = await Cookies.get(`${prefix}${key}`)
    if (stringifiedValue === null || stringifiedValue === undefined) {
      return undefined
    }

    return JSON.parse(stringifiedValue)
  } catch (err) {
    console.error(`Failed to load ${key} from cookies:`, err)
    return undefined
  }
}

export const saveCookie = async (
  key: string,
  value: any,
  options: CookieAttributes,
  withoutPrefix = false,
): Promise<void> => {
  const prefix = withoutPrefix ? '' : PREFIX
  try {
    const stringifiedValue = JSON.stringify(value)
    await Cookies.set(`${prefix}${key}`, stringifiedValue, options)
  } catch (err) {
    console.error(`Failed to save ${key} in cookies:`, err)
  }
}

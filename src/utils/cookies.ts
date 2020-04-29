import Cookies from 'js-cookie'

export const COOKIES_KEY = 'COOKIES'

export type CookiesProps = {
  acceptedNecessary: boolean
  acceptedAnalytics: boolean
  cookieBannerOpen: boolean
}

export const getNetwork = () => {
  return typeof window !== 'undefined' &&
    window.location.hostname.split('.')[0] === 'gnosis-safe'
    ? 'MAINNET'
    : 'RINKEBY'
}

const PREFIX = `v1_${getNetwork()}`

export const loadFromCookie = async (key: string): Promise<any> => {
  try {
    const stringifiedValue = await Cookies.get(`${PREFIX}__${key}`)
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
  expirationDays: number
): Promise<any> => {
  try {
    const stringifiedValue = JSON.stringify(value)
    const expiration = expirationDays ? { expires: expirationDays } : undefined
    await Cookies.set(`${PREFIX}__${key}`, stringifiedValue, expiration)
  } catch (err) {
    console.error(`Failed to save ${key} in cookies:`, err)
  }
}

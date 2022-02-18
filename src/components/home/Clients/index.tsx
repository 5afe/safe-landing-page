import React, { useEffect, useState } from 'react'
import DownloadButtons from './DownloadButtons'

const Clients = () => {
  const [desktopAppUrl, setDesktopAppUrl] = useState<string | undefined>(
    undefined
  )

  // Uncomment when the safe-react files are available:
  useEffect(() => {
    if (navigator.appVersion.indexOf('Win') !== -1) {
      setDesktopAppUrl(process.env.GATSBY_URL_DOWNLOAD_WINDOWS)
    }
    if (navigator.appVersion.indexOf('Mac') !== -1) {
      setDesktopAppUrl(process.env.GATSBY_URL_DOWNLOAD_MAC)
    }
    if (navigator.appVersion.indexOf('X11') !== -1) {
      setDesktopAppUrl(process.env.GATSBY_URL_DOWNLOAD_LINUX)
    }
    if (navigator.appVersion.indexOf('Linux') !== -1) {
      setDesktopAppUrl(process.env.GATSBY_URL_DOWNLOAD_LINUX)
    }
  }, [])

  return <DownloadButtons desktopAppUrl={desktopAppUrl} />
}

export default Clients

import React, { /* useEffect,*/ useState } from 'react'
import DownloadButtons from './DownloadButtons'

const Clients = () => {
  const [desktopAppUrl, setDesktopAppUrl] = useState(
    'https://github.com/gnosis/safe-react/releases'
  )

  /*
  // Uncomment when the safe-react files are available:
  useEffect(() => {
    if (navigator.appVersion.indexOf('Win') !== -1) {
      setDesktopAppUrl('<WINDOWS_APP_URL>')
    }
    if (navigator.appVersion.indexOf('Mac') !== -1) {
      setDesktopAppUrl('<MAC_APP_URL>')
    }
    if (navigator.appVersion.indexOf('X11') !== -1) {
      setDesktopAppUrl('<UNIX_APP_URL>')
    }
    if (navigator.appVersion.indexOf('Linux') !== -1) {
      setDesktopAppUrl('<LINUX_APP_URL>')
    }
  }, [])
  */

  return <DownloadButtons desktopAppUrl={desktopAppUrl} />
}

export default Clients

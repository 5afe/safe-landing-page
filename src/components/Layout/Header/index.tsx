import React, { useState } from 'react'
import Header from './Header'
import MobileMenu from './MobileMenu'

const HeaderMenu: React.FC<{}> = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpened(!mobileMenuOpened)
  }

  return (
    <>
      <Header toggleMobileMenu={toggleMobileMenu} mobileMenuOpened={mobileMenuOpened} />
      {mobileMenuOpened && (
        <MobileMenu toggleMobileMenu={toggleMobileMenu} mobileMenuOpened={mobileMenuOpened} />
      )}
    </>
  )
}

export default HeaderMenu

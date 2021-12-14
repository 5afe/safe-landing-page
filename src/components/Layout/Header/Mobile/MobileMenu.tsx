import React, { useState } from 'react'
import styled from 'styled-components'
import { HEADER_CATEGORY, useAnalytics } from '../../../../utils/googleAnalytics'
import ButtonLink from '../../../ui/ButtonLink'
import Link from '../../../ui/Link'
import Header, { communityMenu } from '../Header'
import Dropdown from './Dropdown'

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  z-index: 1000;
  background-color: ${(p) => p.theme.palette.pink};
`

const SMobileMenu = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  padding-top: 20px;
`
const NavList = styled.ul`
  display: block;
  width: 100%;
  font-weight: 800;
  text-align: center;
  color: ${(p) => p.theme.palette.navy};
  font-size: 28px;
`

const NavListItem = styled.li`
  padding: 25px 0;
  position: relative;
  & > div {
    cursor: pointer;
  }
`

const NavListLink = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.palette.navy};
`

const NavLink = styled(Link)`
  text-decoration: none;
  &.active {
    color: ${(p) => p.theme.palette.primary};
  }
`

const SButtonLink = styled(ButtonLink)`
  padding: 0;
  & > div {
    padding: 10px 20px;
  }
`

interface MobileMenuProps {
  toggleMobileMenu: Function
  mobileMenuOpened: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  toggleMobileMenu,
  mobileMenuOpened,
}) => {
  const { trackEvent } = useAnalytics()
  const [showCommunityMenu, setShowCommunityMenu] = useState<boolean>(false)

  const toggleCommunityMenu = () => {
    setShowCommunityMenu(!showCommunityMenu)
  }

  return (
    <Container>
      <Header
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuOpened={mobileMenuOpened}
      />
      <SMobileMenu>
        <NavList>
          <NavListItem>
            <NavLink activeClassName="active" to="/">
              Overview
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink activeClassName="active" to="/security">
              Security
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink activeClassName="active" to="/enterprises">
              Enterprises
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavListLink href="https://docs.gnosis-safe.io" target="_blank">
              <div
                onClick={() =>
                  trackEvent({
                    category: HEADER_CATEGORY,
                    action: 'Header section',
                    label: 'Click Developers',
                  })
                }
              >
                Developers
              </div>
            </NavListLink>
          </NavListItem>
          <NavListItem>
            <div onClick={toggleCommunityMenu}>Community</div>
          </NavListItem>
          {showCommunityMenu && <Dropdown options={communityMenu} />}
          <NavListItem>
            <NavListLink href="https://help.gnosis-safe.io" target="_blank">
              <div
                onClick={() =>
                  trackEvent({
                    category: HEADER_CATEGORY,
                    action: 'Header section',
                    label: 'Click Help',
                  })
                }
              >
                Help
              </div>
            </NavListLink>
          </NavListItem>
          <NavListItem>
            <SButtonLink url="/app/" target="_self" explicitExternal>
              <div
                onClick={() =>
                  trackEvent({
                    category: HEADER_CATEGORY,
                    action: 'Header section',
                    label: 'Click Open app',
                  })
                }
              >
                Open app
              </div>
            </SButtonLink>
          </NavListItem>
        </NavList>
      </SMobileMenu>
    </Container>
  )
}

export default MobileMenu

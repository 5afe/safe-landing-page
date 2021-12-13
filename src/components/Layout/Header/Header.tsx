import React from 'react'
import Headroom from 'react-headroom'
import styled, { css } from 'styled-components'
import Logo from '../../../assets/multisig-logo-centered.svg'
import { HEADER_CATEGORY, useAnalytics } from '../../../utils/googleAnalytics'
import ButtonLink from '../../ui/ButtonLink'
import Link from '../../ui/Link'
import Divider from './Divider'
import Dropdown, { DropdownOption, DropdownWrapper } from './Dropdown'
import Spacer from './Spacer'

const HeaderItemMargin = css`
  margin-left: 16px;
  margin-right: 16px;
  @media screen and (max-width: 980px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

const SHeadroom = styled(Headroom)`
  position: relative;
  z-index: 1000;
`

interface ContainerProps {
  mobileMenuOpened: boolean
}
const Container = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(p) => (!p.mobileMenuOpened ? '55px' : '53px')};
  box-shadow: ${(p) =>
    !p.mobileMenuOpened ? '0 2px 4px 0 rgba(212, 212, 211, 0.59)' : 'none'};
  border-bottom: ${(p) =>
    !p.mobileMenuOpened ? `solid 2px ${p.theme.palette.greyPale}` : 'none'};
  background-color: ${(p) => p.theme.palette.white};
`

const NavContainer = styled.nav`
  font-weight: 800;
  color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 980px) {
    display: none;
  }
`

const MobileNavContainer = styled.nav`
  display: none;
  width: 60px;
  height: 100%;
  @media screen and (max-width: 980px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    cursor: pointer;
  }
`
const BurgerLine = styled.div`
  height: 2px;
  width: 18px;
  background-color: ${(p) => p.theme.palette.navy};
  margin-bottom: 3px;
  display: block;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
`

const NavListItem = styled.li`
  ${HeaderItemMargin}
  position: relative;
  cursor: default;
  &:hover ${DropdownWrapper} {
    display: block;
  }
`

const NavListLink = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.palette.navy};
`

const NavLink = styled(Link)`
  &.active {
    color: ${(p) => p.theme.palette.primary};
  }
`

const SLogo = styled(Logo)`
  height: 32px;
  ${HeaderItemMargin}
  width: 172px;
  margin-top: 2px;
`

const SButtonLink = styled(ButtonLink)`
  box-shadow: none;
  padding: 0;
  & > div {
    padding: 10px 20px;
  }
`

export const communityMenu: DropdownOption[] = [
  { title: 'Forum', link: 'https://forum.gnosis-safe.io/' },
  { title: 'Chat', link: 'https://discord.gg/7nuNQQQT' },
]

interface HeaderProps {
  toggleMobileMenu: Function
  mobileMenuOpened: boolean
}

const Header: React.FC<HeaderProps> = ({
  toggleMobileMenu,
  mobileMenuOpened,
}) => {
  const { trackEvent } = useAnalytics()

  return (
    <SHeadroom>
      <Container mobileMenuOpened={mobileMenuOpened}>
        <Link to="/">
          <SLogo />
        </Link>
        <Spacer />
        <MobileNavContainer onClick={() => toggleMobileMenu()}>
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </MobileNavContainer>
        <NavContainer>
          <NavList>
            <Divider />
            <NavListItem>
              <NavLink activeClassName="active" to="/">
                Overview
              </NavLink>
            </NavListItem>
            <Divider />
            <NavListItem>
              <NavLink activeClassName="active" to="/security">
                Security
              </NavLink>
            </NavListItem>
            <Divider />
            <NavListItem>
              <NavLink activeClassName="active" to="/enterprises">
                Enterprises
              </NavLink>
            </NavListItem>
            <Divider />
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
              <div>Community</div>
              <Dropdown options={communityMenu} />
            </NavListItem>
            <Divider />
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
            <Divider />
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
        </NavContainer>
      </Container>
    </SHeadroom>
  )
}

export default Header

import React from 'react'
import Headroom from 'react-headroom'
import styled, { css } from 'styled-components'
import ButtonLink from '../../ui/ButtonLink'
import Divider from './Divider'
import Spacer from './Spacer'
import Link from '../../ui/Link'
import MobileMenu from './MobileMenu'
import Logo from '../../../assets/multisig-logo.svg'

const HeaderItemPadding = css`
  padding-left: 16px;
  padding-right: 16px;
`

const SHeadroom = styled(Headroom)`
  z-index: 1000;
  position: relative;
`

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  box-shadow: ${p => !p.mobileMenuOpened ? "3px 4px 14px 0 rgba(0, 0, 0, 0.15)" : "none"};
  border-bottom: ${p => !p.mobileMenuOpened ? "solid 1px #b3b5b3" : "none"};
  background-color: ${p => p.theme.palette.pink};
  overflow: hidden;
`

const NavContainer = styled.nav`
  font-weight: 800;
  color: ${p => p.theme.palette.navy};
  @media screen and (max-width: 1240px) {
    display: none;
  }
`

const MobileNavContainer = styled.nav`
  display: none;
  width: 60px;
  height: 100%;
  @media screen and (max-width: 1240px) {
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
  background-color: ${p => p.theme.palette.navy};
  margin-bottom: 3px;
  display: block;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`

const NavListItem = styled.li`
  ${HeaderItemPadding}
`

const NavLink = styled(Link)`
  &.active {
    color: ${p => p.theme.palette.primary};
  }
`

const SLogo = styled(Logo)`
  height: 40px;
  ${HeaderItemPadding}
`

const LogoDivider = styled(Divider)`
  @media screen and (max-width: 1240px) {
    display: none;
  }
`

const Header: React.FC<{}> = ({ toggleMobileMenu, mobileMenuOpened }) => (
  <Container mobileMenuOpened={mobileMenuOpened}>
    <Link to="/">
      <SLogo />
    </Link>
    <LogoDivider />
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
          <NavLink activeClassName="active" to="/developers">
            Developers
          </NavLink>
        </NavListItem>
        <Divider />
        <NavListItem>
          <ButtonLink url="https://gnosis-safe.io/app" target="_self">
            Open App
          </ButtonLink>
        </NavListItem>
      </NavList>
    </NavContainer>
  </Container>
)

export default Header

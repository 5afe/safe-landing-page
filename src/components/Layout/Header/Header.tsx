import React from 'react'
import Headroom from 'react-headroom'
import styled, { css } from 'styled-components'
import ButtonLink from '../../ui/ButtonLink'
import Divider from './Divider'
import Spacer from './Spacer'
import Link from '../../ui/Link'
import Logo from '../../../assets/multisig-logo.svg'

const HeaderItemPadding = css`
  padding-left: 16px;
  padding-right: 16px;
  @media screen and (max-width: 1240px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const SHeadroom = styled(Headroom)`
  position: relative;
  z-index: 1000;
`

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(p) => (!p.mobileMenuOpened ? '55px' : '53px')};
  box-shadow: ${(p) =>
    !p.mobileMenuOpened ? '0 2px 4px 0 rgba(212, 212, 211, 0.59)' : 'none'};
  border-bottom: ${(p) =>
    !p.mobileMenuOpened ? `solid 2px ${p.theme.palette.greyPale}` : 'none'};
  background-color: ${(p) => p.theme.palette.white};
  overflow: hidden;
`

const NavContainer = styled.nav`
  font-weight: 800;
  color: ${(p) => p.theme.palette.navy};
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
  background-color: ${(p) => p.theme.palette.navy};
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
    color: ${(p) => p.theme.palette.primary};
  }
`

const SLogo = styled(Logo)`
  height: 32px;
  ${HeaderItemPadding}
  margin-right: 2px;
`

const LogoDivider = styled(Divider)`
  @media screen and (max-width: 1240px) {
    display: none;
  }
`

interface HeaderProps {
  toggleMobileMenu: Function
  mobileMenuOpened: boolean
}

const Header: React.FC<HeaderProps> = ({
  toggleMobileMenu,
  mobileMenuOpened,
}) => (
  <SHeadroom>
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
            <NavLink activeClassName="active" to="/enterprises">
              Enterprises
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
            <ButtonLink url="/app/#" target="_self" explicitExternal>
              Open App
            </ButtonLink>
          </NavListItem>
        </NavList>
      </NavContainer>
    </Container>
  </SHeadroom>
)

export default Header

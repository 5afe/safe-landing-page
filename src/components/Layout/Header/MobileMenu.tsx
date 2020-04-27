import React from 'react'
import styled from 'styled-components'
import Link from '../../ui/Link'
import ButtonLink from '../../ui/ButtonLink'
import Header from './Header'

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
  padding: 0 20px;
  font-weight: 800;
  text-align: center;
  color: ${(p) => p.theme.palette.navy};
  font-size: 28px;
`

const NavListItem = styled.li`
  padding: 25px 0;
`

const NavLink = styled(Link)`
  text-decoration: none;
  &.active {
    color: ${(p) => p.theme.palette.primary};
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
            <NavLink activeClassName="active" to="/developers">
              Developers
            </NavLink>
          </NavListItem>
          <NavListItem>
            <ButtonLink url="/app/#" target="_self" explicitExternal>
              Open App
            </ButtonLink>
          </NavListItem>
        </NavList>
      </SMobileMenu>
    </Container>
  )
}

export default MobileMenu

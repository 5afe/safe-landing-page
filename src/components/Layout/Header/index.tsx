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
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.15);
  border-bottom: ${p => `solid 1px ${p.theme.palette.greyGreen}`};
  background-color: ${p => p.theme.palette.pink};
`

const NavContainer = styled.nav`
  height: 100%;
  font-weight: 800;
  color: ${p => p.theme.palette.navy};
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

const Header: React.FC<{}> = () => (
  <SHeadroom>
    <Container>
      <Link to="/">
        <SLogo />
      </Link>
      <Divider />
      <Spacer />
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
          {/*<Divider />
          <NavListItem>
            <Link to="/enterprises">Enterprises</Link>
          </NavListItem>*/}
          <Divider />
          <NavListItem>
            <NavLink activeClassName="active" to="/developers">
              Developers
            </NavLink>
          </NavListItem>
          <Divider />
          <NavListItem>
            <ButtonLink
              url="/app"
              target="_self"
              explicitExternal
            >
              Open App
            </ButtonLink>
          </NavListItem>
        </NavList>
      </NavContainer>
    </Container>
  </SHeadroom>
)

export default Header

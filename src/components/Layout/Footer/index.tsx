import React from 'react'
import Headroom from 'react-headroom'
import styled, { css } from 'styled-components'

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.15);
`

const NavContainer = styled.nav`
  height: 100%;
  font-weight: 800;
  color: ${p => p.theme.palette.navy};
`

const SNList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`

const SNListItem = styled.li``

const NavLink = styled.a``

const Footer: React.FC<{}> = () => (
  <Container>
    <SLogo />
    <Divider />
    <Spacer />
    <NavContainer>
      <NavList>
        <Divider />
        <NavListItem>
          <Link to="/security">Security</Link>
        </NavListItem>
        <Divider />
        <NavListItem>
          <ButtonLink url="/gnosis-safe.io">Open App</ButtonLink>
        </NavListItem>
        <Divider />
      </NavList>
    </NavContainer>
  </Container>
)

export default Footer

import React from 'react'
import styled from 'styled-components'
import { Box, Grid } from '@material-ui/core'

import LinesSVG from '../../../assets/bg-lines-03.svg'
import ContentWrapper from '../../Layout/ContentWrapper'

const Container = styled.main`
  height: calc(100vh - 56px);
  position: relative;
  background-color: ${(p) => p.theme.palette.navy};

  @media screen and (max-width: 980px) {
    height: auto;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100%;
  color: white;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 980px) {
    padding-top: 135px;
    padding-bottom: 65px;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: -100px;
  stroke: #d8d8d8;
  opacity: 0.27;
  z-index: 1;

  @media screen and (max-width: 980px) {
    bottom: -50px;
  }
`

const Title = styled.h1`
  font-size: 60px;
  line-height: 65px;
  color: white;
  font-weight: bolder;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (max-width: 980px) {
    margin-bottom: 16px;
    font-size: 42px;
    line-height: 46px;
  }
`

const Text = styled.p`
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 45px;

  strong {
    font-weight: bold;
  }

  @media screen and (max-width: 980px) {
    margin-bottom: 24px;
  }
`

const FeatureText = styled.p`
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: 980px) {
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 28px;
  }
`

const AnchorLink = styled.a`
  font-size: 16px;
  line-height: 22px;
  color: white;
  font-weight: bold;
  background-color: ${(p) => p.theme.palette.primary};
  padding: 15px 24px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${(p) => p.theme.palette.primaryHover};
  }
`

const Header = ({ openPositions }: { openPositions: number | undefined }) => {
  return (
    <Container>
      <SLinesSVG />
      <Wrapper>
        <ContentWrapper>
          <div>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Title>
                  Join us
                  <br />
                  at Gnosis Safe
                </Title>
                <Grid item xs={12}>
                  <Text>
                    <strong>{openPositions}</strong> Open Positions
                  </Text>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <FeatureText>
                  By designing fairer markets, we aim to build a more evenly
                  distributed future, together. Be a part of a team building
                  leading decentralized finance products.
                </FeatureText>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AnchorLink href="#positions">Explore positions</AnchorLink>
            </Grid>
          </div>
        </ContentWrapper>
      </Wrapper>
    </Container>
  )
}

export default Header

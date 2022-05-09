import React from 'react'
import styled from "styled-components";
import {Box, Grid} from "@material-ui/core";

import Ethereum from "../../../assets/ethereum.svg"
import EnergyWeb from "../../../assets/energy-web.svg"
import Polygon from "../../../assets/polygon.svg"
import GnosisChain from "../../../assets/gnosischain.svg"
import Avax from "../../../assets/avax.svg"
import BSC from "../../../assets/bsc.svg"
import Arbitrum from "../../../assets/arbitrum.svg"
import Optimism from "../../../assets/optimism.svg"
import Aurora from "../../../assets/aurora.svg"
import ContentWrapper from "../../Layout/ContentWrapper";

const Container = styled.div`
  padding: 50px 20px 100px;
  position: relative;
  color: ${(p) => p.theme.palette.navy};
  background: ${(p) => p.theme.palette.darkGreyBackground};
  overflow: hidden;
  @media screen and (max-width: 980px) {
    padding: 0 12px 30px;
  }
`

const SHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 44px;
  line-height: 1.18;
  padding-bottom: 70px;
  font-weight: 800;
  letter-spacing: 0.56px;
  
  @media screen and (max-width: 980px) {
    padding: 50px 0 30px;
    font-size: 36px;
  }
`

const StyledGnosisChain = styled(GnosisChain)`
  max-height: 60px;
  width: auto;
`

const StyledEthereum = styled(Ethereum)`
  max-height: 60px;
  width: auto;
`


const Chains = () => {
  return (
    <Container>
      <ContentWrapper>
        <Box textAlign="center">
          <SHeading>Gnosis Safe Supports</SHeading>
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <StyledEthereum />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <EnergyWeb />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Polygon />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledGnosisChain />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Avax />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <BSC />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Arbitrum />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Optimism />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Aurora />
            </Grid>
          </Grid>
        </Box>
      </ContentWrapper>
    </Container>
  )
}

export default Chains
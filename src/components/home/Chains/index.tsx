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
  max-height: 45px;
  width: auto;
`

const StyledEthereum = styled(Ethereum)`
  max-height: 50px;
  width: auto;
`

const StyledGridItem = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`


const Chains = () => {
  return (
    <Container>
      <ContentWrapper>
          <SHeading>Safe Supports</SHeading>
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <StyledGridItem item xs={12} sm={6} md={3}>
              <StyledEthereum />
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={6} md={3}>
              <EnergyWeb />
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={6} md={3}>
              <Polygon />
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={6} md={3}>
              <StyledGnosisChain />
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={6} md={3}>
              <Avax />
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={6} md={3}>
              <BSC />
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={6} md={3}>
              <Arbitrum />
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={6} md={3}>
              <Optimism />
            </StyledGridItem>
            <StyledGridItem item xs={12} sm={6} md={3}>
              <Aurora />
            </StyledGridItem>
          </Grid>
      </ContentWrapper>
    </Container>
  )
}

export default Chains

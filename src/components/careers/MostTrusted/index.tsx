import * as React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

import ContentWrapper from '../../Layout/ContentWrapper'
import { Text, SecondaryText, SectionTitle } from '../styled'

const Section = styled.section`
  width: 100%;
  padding: 170px 0;
  background-color: ${(p) => p.theme.palette.white};

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 64px 0;
  }
`

const Image = styled.img`
  height: 360px;
  width: auto;
  position: absolute;
  right: 0;

  @media screen and (max-width: 960px) {
    position: relative;
    margin-top: 40px;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-end;
  }

  @media screen and (max-width: 480px) {
    align-items: flex-start;
  }
`

const MostTrusted = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Grid container style={{ position: 'relative' }}>
            <Grid item xs={12} md={6}>
              <SectionTitle noCenter>
                The most trusted wallet on Ethereum
              </SectionTitle>
              <Text>
                Gnosis Safe is the most trusted platform to manage digital
                assets on Ethereum and other leading protocols.
              </Text>
              <SecondaryText>
                Believing in the power of decentralisation and open-source
                software development, we are building the Safe web and mobile
                applications, developer tools and an inclusive online community
                to foster the core building blocks of the Web3 ecosystem.
              </SecondaryText>
            </Grid>
          </Grid>
        </ContentWrapper>
        <Image src="/images/Illustration-wallet.png" />
      </Container>
    </Section>
  )
}

export default MostTrusted

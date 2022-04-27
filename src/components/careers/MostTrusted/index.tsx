import * as React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import { Grid } from '@material-ui/core'

const Section = styled.section`
  width: 100%;
  padding: 170px 0;
  background-color: ${(p) => p.theme.palette.white};

  @media screen and (max-width: 768px) {
    height: auto;
  }
`

const Title = styled.p`
  font-weight: bold;
  font-size: 45px;
  line-height: 52px;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 32px;
  }
`

const Text = styled.p`
  flex: 1;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 24px;
  }
`

const SecondaryText = styled.p`
  flex: 1;
  font-size: 16px;
  line-height: 24px;
`

const Image = styled.img`
  height: 360px;
  position: absolute;
  right: 0;

  @media screen and (max-width: 960px) {
    width: auto;
    height: 360px;
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
              <Title>The most trusted wallet on Ethereum</Title>
              <Text>
                Gnosis Safe is the most trusted platform to manage digital
                assets on Ethereum and other leading protocols.
              </Text>
              <SecondaryText>
                Believing in the power of decentralisation and open-source
                software development, we are building the Safe web and mobile
                application, developer tools and an inclusive online community
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

import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(p) => p.theme.palette.white};

  @media screen and (max-width: 768px) {
    height: auto;
  }
`

const Content = styled.div`
  width: 542px;
  margin-top: 180px;
  margin-left: 200px;

  @media screen and (max-width: 768px) {
    margin-top: 64px;
    margin-left: 0;
    width: 100%;
    padding: 0 16px;
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
  line-height: normal;
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
  line-height: normal;
  flex: 1;
  font-size: 16px;
  line-height: 24px;
`

const Image = styled.img`
  height: 360px;
  margin-left: 60px;
  margin-top: 160px;
  object-fit: cover;
  object-position: right;

  @media screen and (max-width: 768px) {
    margin: 40px 0;
    padding-right: 0px;
    margin-left: 16px;
    height: 300px;

    object-fit: cover;
    object-position: left;
    width: 100%;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const MostTrusted = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>The most trusted wallet on Ethereum</Title>
          <Text>
            Gnosis Safe is the most trusted platform to manage digital assets on
            Ethereum and other leading protocols.
          </Text>
          <SecondaryText>
            Believing in the power of decentralisation and open-source software
            development, we are building the Safe web and mobile application,
            developer tools and an inclusive online community to foster the core
            building blocks of the Web3 ecosystem.
          </SecondaryText>
        </Content>
        <Image src="/images/Illustration-wallet.png" />
      </Container>
    </Section>
  )
}

export default MostTrusted

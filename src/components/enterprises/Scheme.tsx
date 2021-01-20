import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'

const Container = styled.div`
  padding: 100px 20px;
  position: relative;
  color: ${(p) => p.theme.palette.white};
  background-color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 980px) {
    padding: 0 0 30px 0;
  }
  overflow: hidden;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    display: block;
  }
`

const RowLevel = styled.div`
  display: flex;
  justify-content: space-between;
`

const LCol = styled.div`
  flex-basis: 24%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    padding: 0 12px;
  }
`

const RCol = styled.div`
  flex-basis: 59.5%;
  font-size: 21.8px;
  font-weight: 800;
  line-height: normal;
  @media screen and (max-width: 980px) {
    padding: 0 12px 30px 12px;
  }
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.11px;
  color: ${(p) => p.theme.palette.grey};
  @media screen and (max-width: 980px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const Level = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  @media screen and (max-width: 980px) {
    margin-bottom: 10px;
    height: 30px;
    font-size: 12px;
  }
`

const Level1 = styled(Level)`
  border: 2px solid #fefefe;
  @media screen and (max-width: 980px) {
    border: 1px solid #fefefe;
  }
`

const Level2 = styled.div`
  border: 2px solid ${(p) => p.theme.palette.slateGray};
  color: ${(p) => p.theme.palette.slateGray};
  flex-basis: 29%;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 980px) {
    height: 30px;
    font-size: 12px;
  }
  @media screen and (max-width: 980px) {
    border: 1px solid ${(p) => p.theme.palette.slateGray};
  }
`

const Level3 = styled(Level)`
  background-color: ${(p) => p.theme.palette.primary};
  flex-basis: 29%;
`

const Level4 = styled(Level)`
  border: 2px solid ${(p) => p.theme.palette.slateGray};
  color: ${(p) => p.theme.palette.slateGray};
  @media screen and (max-width: 980px) {
    border: 1px solid ${(p) => p.theme.palette.slateGray};
  }
`

const Level5 = styled(Level)`
  border: 2px solid ${(p) => p.theme.palette.slateGray};
  color: ${(p) => p.theme.palette.slateGray};
  flex-basis: 46.5%;
  @media screen and (max-width: 980px) {
    border: 1px solid ${(p) => p.theme.palette.slateGray};
  }
`

const LevelArrow = styled.div`
  flex-flow: column;
  flex-basis: 29%;
  margin: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 980px) {
    height: 30px;
    font-size: 12px;
  }
`

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid ${(p) => p.theme.palette.grey};
  @media screen and (max-width: 980px) {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid ${(p) => p.theme.palette.grey};
  }
`
const ArrowLine = styled.div`
  border-left: 2px solid ${(p) => p.theme.palette.grey};
  height: 21px;
  @media screen and (max-width: 980px) {
    height: 10px;
    border-left: 1px solid ${(p) => p.theme.palette.grey};
  }
`

const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid ${(p) => p.theme.palette.grey};
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  @media screen and (max-width: 980px) {
    border-top: 4px solid ${(p) => p.theme.palette.grey};
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
`

const LegendContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 120px;
  justify-content: space-between;
  margin-bottom: 20px;
  color: ${(p) => p.theme.palette.pink};
  @media screen and (max-width: 980px) {
    height: 80px;
  }
`

const RowLegend = styled(RowLevel)`
  @media screen and (max-width: 980px) {
    justify-content: flex-start;
  }
`

const LegendBox = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 4px;
  @media screen and (max-width: 980px) {
    height: 32px;
    width: 32px;
    justify-content: flex-start;
  }
`

const LegendBox1 = styled(LegendBox)`
  background-color: ${(p) => p.theme.palette.primary};
`

const LegendBox2 = styled(LegendBox)`
  border: 2px solid ${(p) => p.theme.palette.pink};
`

const LegendText = styled.p`
  font-size: 20px;
  font-weight: 800;
  line-height: normal;
  width: 240px;
  align-self: center;
  padding-left: 20px;
  @media screen and (max-width: 980px) {
    font-size: 12px;
    max-width: 150px;
  }
`

const Scheme = () => (
  <Container>
    <ContentWrapper>
      <Row>
        <LCol>
          <SHeading>
            We offer custom deployment solutions that range from completely
            self-hosted to fully managed.
          </SHeading>
          <LegendContainer>
            <RowLegend>
              <LegendBox1 />
              <LegendText>Operated by Clients / Gnosis / 3rd Party</LegendText>
            </RowLegend>
            <RowLegend>
              <LegendBox2 />
              <LegendText>Customized solutions</LegendText>
            </RowLegend>
          </LegendContainer>
        </LCol>
        <RCol>
          <Level1>Services</Level1>
          <RowLevel>
            <Level2>Cold Wallets</Level2>
            <Level2>HSM</Level2>
            <Level2>Hot Wallets</Level2>
          </RowLevel>
          <RowLevel>
            <LevelArrow>
              <ArrowUp />
              <ArrowLine />
              <ArrowDown />
            </LevelArrow>
            <LevelArrow>
              <ArrowUp />
              <ArrowLine />
              <ArrowDown />
            </LevelArrow>
            <LevelArrow>
              <ArrowUp />
              <ArrowLine />
              <ArrowDown />
            </LevelArrow>
          </RowLevel>
          <Level1>Interface</Level1>
          <RowLevel>
            <Level3>Indexers</Level3>
            <Level3>Relay</Level3>
            <Level3>Nodes</Level3>
          </RowLevel>
          <Level1>Policy Modules</Level1>
          <Level4>Gnosis Safe Smart Contracts</Level4>
          <RowLevel>
            <Level5>Ethereum</Level5>
            <Level5>Quorum</Level5>
          </RowLevel>
        </RCol>
      </Row>
    </ContentWrapper>
  </Container>
)

export default Scheme

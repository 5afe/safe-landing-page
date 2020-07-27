import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'

const Container = styled.section`
  color: ${(p) => p.theme.palette.navy};
  background: ${(p) => p.theme.palette.white};
  padding: 70px 0;
  overflow: hidden;
  @media screen and (max-width: 1240px) {
    padding: 0;
  }
`

const SWrapper = styled(ContentWrapper)`
  height: 100%;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 0px 10px 40px 10px;
  }
`

const SHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 44px;
  line-height: 1.18;
  padding-bottom: 50px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 1240px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-areas: '. . . . . .';
`

const GridTitle = styled.div`
  grid-area: title;
  font-weight: 800;
  border: 1px solid red;
`

const GridContent = styled.div`
  grid-area: content;
  font-weight: 800;
  border: 1px solid blue;
`

const StorageComparison = () => (
  <Container>
    <SWrapper>
      <SHeading>Compare storage solutions</SHeading>
      <Grid>
        <div></div>
        <div>Gnosis Safe Multisig</div>
        <div>'Old' Multisig</div>
        <div>Software wallet ("EOA")</div>
        <div>Hardware wallet</div>
        <div>Centralised exchange</div>
        <div>asdf4</div>
        <div>asdf5</div>
        <div>asdf6</div>
        <div>asdf7</div>
        <div>asdf8</div>
      </Grid>
    </SWrapper>
  </Container>
)

export default StorageComparison

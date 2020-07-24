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

const StorageComparison = () => (
  <Container>
    <SWrapper>
      <SHeading>Compare storage solutions</SHeading>
    </SWrapper>
  </Container>
)

export default StorageComparison

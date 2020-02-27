import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import { TRUSTED_BY_COMPANIES } from './companies'

const Container = styled.section`
  padding-top: 50px;
  padding-bottom: 315px;
  color: ${p => p.theme.palette.navy};
  overflow: hidden;
  @media screen and (max-width: 1240px) {
    padding: 0;
  }
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 0px 10px 40px 10px;
  }
`

const LCol = styled.div`
  flex-basis: 16%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 65%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 160px);
  grid-column-gap: 91px;
  grid-row-gap: 51px;
  @media screen and (max-width: 1240px) {
    grid-template-columns: repeat(auto-fill, 160px);
  }
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 1240px) {
    padding: 30px 0;
  }
`

const ImageAnchor = styled.a`
  max-width: 160px;
  max-height: 54px;
`

const Image = styled.img`
  max-width: 160px;
  max-height: 54px;
  width: auto;
  height: auto;
`

const TrustedBy = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>Trusted by</SHeading>
      </LCol>
      <RCol>
        {TRUSTED_BY_COMPANIES.map(company => (
          <ImageAnchor
            key={company.name}
            title={company.name}
            href={company.websiteURL}
            target="_blank"
          >
            <Image src={company.imageURL}></Image>
          </ImageAnchor>
        ))}
      </RCol>
    </SWrapper>
  </Container>
)

export default TrustedBy

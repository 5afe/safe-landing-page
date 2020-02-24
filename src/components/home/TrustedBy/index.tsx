import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import { TRUSTED_BY_COMPANIES } from './companies'

const Container = styled.section`
  padding-top: 50px;
  padding-bottom: 315px;
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const ImageAnchor = styled.a`
  max-width: 160px;
  max-height: 54px;
`

const Image = styled.img`
  max-width: 160px;
  width: auto;
  height: auto;
  max-height: 54px;
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

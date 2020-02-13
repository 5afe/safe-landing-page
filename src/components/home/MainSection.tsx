import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import ButtonLink from '../../components/ui/ButtonLink'
import LinesSVG from '../../assets/lines.svg'

const Container = styled.div`
  height: calc(100vh - 56px);
  position: relative;
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`

const LCol = styled.div`
  flex-basis: 48%;
  flex-direction: column;
`

const SHeading = styled(Heading)`
  margin-bottom: 50px;
`

const MainSection = () => (
  <Container>
    <SLinesSVG />
    <SWrapper>
      <LCol>
        <SHeading>
          The most trusted platform to store digital assets on Ethereum
        </SHeading>
        <ButtonLink
          url="https://gnosis-safe.io"
          colorScheme="navy"
          target="_self"
        >
          Get started in 60 seconds!
        </ButtonLink>
      </LCol>
    </SWrapper>
  </Container>
)

export default MainSection

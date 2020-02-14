import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import ButtonLink from '../ui/ButtonLink'
import LinesSVG from '../../assets/lines.svg'

const Container = styled.div`
  height: calc(100vh - 56px);
  position: relative;
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const SHeading = styled(Heading)`
  margin-bottom: 50px;
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

const RCol = styled.div`
  flex-basis: 42%;
  width: 100%;
  position: relative;
`

const SImg = styled(Img)`
  border-radius: 8px;
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.15);
`

const Screenshot2Container = styled.div`
  position: absolute;
  top: -63%;
  right: -20%;
  width: 100%;
  z-index: -1;
`

const MainSection = () => (
  <StaticQuery
    query={graphql`
      query {
        screenshot1: file(relativePath: { eq: "screenshot-1.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        screenshot2: file(relativePath: { eq: "screenshot-2.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
  >
    {data => (
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
          <RCol>
            <SImg fluid={data.screenshot1.childImageSharp.fluid} />
            <Screenshot2Container>
              <SImg fluid={data.screenshot2.childImageSharp.fluid} />
            </Screenshot2Container>
          </RCol>
        </SWrapper>
      </Container>
    )}
  </StaticQuery>
)

export default MainSection

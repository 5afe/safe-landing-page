import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import ButtonLink from '../ui/ButtonLink'
import LinesSVG from '../../assets/lines2.svg'

const Container = styled.main`
  height: calc(100vh - 56px);
  background: ${(p) => p.theme.palette.darkGreyBackground};
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1240px) {
    height: auto;
  }
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  z-index: 2;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 30px 10px 40px 10px;
  }
`

const SHeading = styled(Heading)`
  margin-bottom: 50px;
  max-width: 400px;
  @media screen and (max-width: 1240px) {
    font-size: 36px;
    margin: 0 auto;
    max-width: 300px;
    margin-bottom: 20px;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    text-align: left;
  }
`

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin: 0 auto;
  @media screen and (max-width: 1240px) {
    width: 100%;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
`

const SButtonLink = styled(ButtonLink)`
  text-align: center;
  width: 165px;
  box-shadow: none;
  @media screen and (max-width: 1240px) {
    width: auto;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  top: 230px;
  stroke: ${(p) => p.theme.palette.primary};
  z-index: 1;
  @media screen and (max-width: 1240px) {
    top: 170px;
  }
`

const LCol = styled.div`
  flex-basis: 30%;
  flex-direction: column;
`

const RCol = styled.div`
  width: 750px;
  position: relative;
  @media screen and (max-width: 1240px) {
    max-width: 700px;
    width: auto;
    margin: 0 auto;
  }
`

const SImg = styled(Img)`
  border-radius: 8px;
  padding: 0;
`

const Word = styled.span`
  color: ${(p) => p.theme.palette.primary};
`

function useInterval(callback: any, delay: number | undefined) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    if (delay) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const MainSection = () => {
  const words = [
    'funds',
    'companies',
    'DAOs',
    'hodlers',
    'investors',
    'developers',
  ]
  const [currentWord, setCurrentWord] = useState(0)

  useInterval(() => {
    if (currentWord < 5) {
      setCurrentWord(currentWord + 1)
    } else {
      setCurrentWord(0)
    }
  }, 2000)

  return (
    <StaticQuery
      query={graphql`
        query {
          background: file(relativePath: { eq: "background.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
    >
      {(data) => (
        <Container>
          <SLinesSVG />
          <SWrapper>
            <LCol>
              <SHeading>
                The most trusted <br /> platform to store <br /> digital assets{' '}
                <br />
                on Ethereum <br /> for <Word>{words[currentWord]}</Word>
              </SHeading>
              <ButtonsRow>
                <SButtonLink url="/app/#" target="_self" explicitExternal>
                  Open app
                </SButtonLink>
                <SButtonLink
                  colorScheme="green"
                  url="/#getting-started"
                  target="_self"
                  explicitExternal
                >
                  How it works
                </SButtonLink>
              </ButtonsRow>
            </LCol>
            <RCol>
              <SImg fluid={data.background.childImageSharp.fluid} />
            </RCol>
          </SWrapper>
        </Container>
      )}
    </StaticQuery>
  )
}

export default MainSection

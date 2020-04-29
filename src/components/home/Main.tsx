import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'
import LinesSVG from '../../assets/lines2.svg'

const Container = styled.main`
  height: calc(100vh - 56px);
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
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 30px 10px 40px 10px;
  }
`

const SHeading = styled(Heading)`
  margin-bottom: 50px;
  max-width: 400px;
  @media screen and (max-width: 1240px) {
    max-width: 100%;
    font-size: 28px;
  }
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  top: 230px;
  stroke: ${(p) => p.theme.palette.primary};
  z-index: -1;
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
    margin-left: 40px;
    max-width: 500px;
  }
`

const Slider = styled.div`
  position: relative;
`

const SImg = styled(Img)`
  border-radius: 8px;
  padding: 0;
`

const BalancesContainer = styled.div`
  position: absolute;
  top: 50px;
  left: -50px;
  width: 200px;
  z-index: 10;
  display: ${(p) => (p.active ? 'block' : 'none')};
`

const WalletOptionsContainer = styled.div`
  position: absolute;
  bottom: -10px;
  left: 120px;
  width: 380px;
  z-index: 10;
  display: ${(p) => (p.active ? 'block' : 'none')};
`

const TransactionsContainer = styled.div`
  position: absolute;
  top: -45px;
  left: 130px;
  width: 240px;
  z-index: 10;
  display: ${(p) => (p.active ? 'block' : 'none')};
`

const AddressBookContainer = styled.div`
  position: absolute;
  top: 85px;
  right: -40px;
  width: 452px;
  z-index: 10;
  display: ${(p) => (p.active ? 'block' : 'none')};
`

const NftContainer = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 266px;
  z-index: 10;
  display: ${(p) => (p.active ? 'block' : 'none')};
`

const SliderMenu = styled.div`
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 10px;
  display: flex;
`

const Feature = styled.div`
  border-top: 2px solid
    ${(p) => (p.active ? p.theme.palette.primary : '#b2b5b2')};
  color: ${(p) => (p.active ? p.theme.palette.primary : '#b2b5b2')};
  width: 128px;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
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
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useInterval(
    () => {
      if (currentFeature < 4) {
        setCurrentFeature(currentFeature + 1)
      } else {
        setCurrentFeature(0)
      }
    },
    isRunning ? 5000 : undefined
  )

  const activateFeature = (featureNumber: number) => {
    setIsRunning(false)
    setCurrentFeature(featureNumber)
  }

  const deactivateFeature = () => {
    setIsRunning(true)
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          background: file(relativePath: { eq: "background.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          balances: file(relativePath: { eq: "balances.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          walletOptions: file(relativePath: { eq: "wallet-options.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          transactions: file(relativePath: { eq: "transaction-timeline.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          addressBook: file(relativePath: { eq: "address-book.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          nft: file(relativePath: { eq: "nft.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600) {
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
                The most trusted platform to store digital assets on Ethereum
              </SHeading>
            </LCol>
            <RCol>
              <Slider>
                <SImg fluid={data.background.childImageSharp.fluid} />
                <BalancesContainer active={currentFeature === 0}>
                  <SImg fluid={data.balances.childImageSharp.fluid} />
                </BalancesContainer>
                <WalletOptionsContainer active={currentFeature === 1}>
                  <SImg fluid={data.walletOptions.childImageSharp.fluid} />
                </WalletOptionsContainer>
                <TransactionsContainer active={currentFeature === 2}>
                  <SImg fluid={data.transactions.childImageSharp.fluid} />
                </TransactionsContainer>
                <AddressBookContainer active={currentFeature === 3}>
                  <SImg fluid={data.addressBook.childImageSharp.fluid} />
                </AddressBookContainer>
                <NftContainer active={currentFeature === 4}>
                  <SImg fluid={data.nft.childImageSharp.fluid} />
                </NftContainer>
              </Slider>
              <SliderMenu>
                <Feature
                  active={currentFeature === 0}
                  onMouseEnter={() => activateFeature(0)}
                  onMouseLeave={deactivateFeature}
                >
                  Balances
                </Feature>
                <Feature
                  active={currentFeature === 1}
                  onMouseEnter={() => activateFeature(1)}
                  onMouseLeave={deactivateFeature}
                >
                  Wallet options
                </Feature>
                <Feature
                  active={currentFeature === 2}
                  onMouseEnter={() => activateFeature(2)}
                  onMouseLeave={deactivateFeature}
                >
                  Transactions
                </Feature>
                <Feature
                  active={currentFeature === 3}
                  onMouseEnter={() => activateFeature(3)}
                  onMouseLeave={deactivateFeature}
                >
                  Address book
                </Feature>
                <Feature
                  active={currentFeature === 4}
                  onMouseEnter={() => activateFeature(4)}
                  onMouseLeave={deactivateFeature}
                >
                  NFTs
                </Feature>
              </SliderMenu>
            </RCol>
          </SWrapper>
        </Container>
      )}
    </StaticQuery>
  )
}

export default MainSection

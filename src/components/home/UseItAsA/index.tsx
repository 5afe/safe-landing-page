import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import DocIcon from '../../../assets/light-doc.svg'
import GraphIcon from '../../../assets/light-graph.svg'
import LockIcon from '../../../assets/light-lock.svg'
import SafeIcon from '../../../assets/light-safe.svg'
import WalletIcon from '../../../assets/light-wallet.svg'

const Container = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  color: ${(p) => p.theme.palette.navy};
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

const UseOptions = styled.div`
  display: flex;
  justify-content: space-between;
`

const Team = styled.div`
  width: 50%;
  padding: 0 20px 0 0;
`

const Individual = styled.div`
  border-left: 2px solid ${(p) => p.theme.palette.lightGrey};
  width: 50%;
  padding: 0 0 0 20px;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 32px;
  line-height: 1.13;
  padding-bottom: 40px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 175px;

  & > svg {
    height: 70px;
  }
`

const Text = styled.div`
  font-size: 20px;
  line-height: 1.3;
  text-align: center;
  padding-top: 25px;
`

const UseItAsA = () => (
  <Container>
    <SWrapper>
      <SHeading>Use it as a...</SHeading>
      <UseOptions>
        <Team>
          <Title>Team</Title>
          <Content>
            <Element>
              <SafeIcon />
              <Text>Store, receive and send company crypto assets</Text>
            </Element>
            <Element>
              <LockIcon />
              <Text>
                Secure company crypto assets by requiring multiple signatures
                and managing team members access
              </Text>
            </Element>
            <Element>
              <DocIcon />
              <Text>Interact with smart contracts</Text>
            </Element>
          </Content>
        </Team>
        <Individual>
          <Title>Individual</Title>
          <Content>
            <Element>
              <WalletIcon />
              <Text>Store, receive and send private crypto assets</Text>
            </Element>
            <Element>
              <LockIcon />
              <Text>
                Secure private crypto assets by requiring signatures from
                multiple wallets
              </Text>
            </Element>
            <Element>
              <GraphIcon />
              <Text>Interact with Dapps and invest in DeFi</Text>
            </Element>
          </Content>
        </Individual>
      </UseOptions>
    </SWrapper>
  </Container>
)

export default UseItAsA

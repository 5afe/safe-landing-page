import React from 'react'
import styled from 'styled-components'
import DiscordIcon from '../../assets/discord.svg'
import GithubIcon from '../../assets/github.svg'
import MediumIcon from '../../assets/medium.svg'
import TwitterIcon from '../../assets/twitter.svg'
import ContentWrapper from '../Layout/ContentWrapper'

const SectionContainer = styled.div`
  padding-bottom: 80px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  margin: 0 auto;
  @media screen and (max-width: 980px) {
    max-width: 230px;
  }

  & > a {
    &:hover {
      opacity: 0.8;
    }
  }
`

const Social: React.FC = () => (
  <SectionContainer>
    <ContentWrapper>
      <Row>
        <a
          href="https://twitter.com/gnosisSafe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://blog.gnosis.pm/tagged/safe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediumIcon />
        </a>
        <a
          href="https://discord.gg/FPMRAwK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon />
        </a>
        <a
          href="https://github.com/gnosis?utf8=%E2%9C%93&q=safe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </Row>
    </ContentWrapper>
  </SectionContainer>
)

export default Social

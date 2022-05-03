import React from 'react'
import styled from 'styled-components'
import DiscordIcon from '../../assets/discord.svg'
import GithubIcon from '../../assets/github.svg'
import MirrorIcon from '../../assets/mirror.svg'
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
          href="https://safe.mirror.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MirrorIcon />
        </a>
        <a
          href="https://discord.gg/AjG7AQD9Qn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon />
        </a>
        <a
          href="https://github.com/safe-global"
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

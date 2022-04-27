import React from 'react'
import styled from 'styled-components'

import DiscordIcon from '../../../assets/discord.svg'
import GithubIcon from '../../../assets/github.svg'
import MediumIcon from '../../../assets/medium.svg'
import TwitterIcon from '../../../assets/twitter.svg'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  letter-spacing: 0.33px;
  min-height: 80px;
  color: ${(p) => p.theme.palette.navy};
  margin-bottom: 16px;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 125px;
    height: 125px;
  }
`

const Name = styled.p`
  margin-top: 24px;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  white-space: nowrap;
`

const Role = styled.p`
  line-height: normal;
  flex: 1;
  margin-top: 8px;
  line-height: 24px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  @media screen and (max-width: 980px) {
    max-width: 230px;
  }

  & > a {
    &:hover {
      opacity: 0.8;
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

interface CardProps {
  imageURL: string
  name: string
  position: string
  social: Partial<Record<'twitter' | 'medium' | 'discord' | 'github', string>>
}

const Card: React.FC<CardProps> = ({ imageURL, name, position, social }) => (
  <CardContainer>
    <Image src={imageURL} />
    <Name>{name}</Name>
    <Role>{position}</Role>
    <Row>
      {social.twitter && (
        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
      )}
      {social.medium && (
        <a href={social.medium} target="_blank" rel="noopener noreferrer">
          <MediumIcon />
        </a>
      )}
      {social.discord && (
        <a href={social.discord} target="_blank" rel="noopener noreferrer">
          <DiscordIcon />
        </a>
      )}
      {social.github && (
        <a href={social.github} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
      )}
    </Row>
  </CardContainer>
)

export default Card

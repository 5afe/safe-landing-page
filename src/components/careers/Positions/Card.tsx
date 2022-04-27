import React from 'react'

import MapPin from '../../../assets/map-pin.svg'
import ArrowRight from '../../../assets/arrow-right.svg'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  color: white;
  background-color: ${(p) => p.theme.palette.primary};
  border-radius: 15px;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 350px;

  @media screen and (max-width: 768px) {
    min-height: 250px;
  }

  &:hover {
    background-color: #0e7361;
  }
`

const StyledMapPin = styled(MapPin)`
  margin-right: 10px;
`

const StyledArrowRight = styled(ArrowRight)`
  margin-left: 10px;
  & path {
    fill: white;
  }
`

const Location = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Title = styled.p`
  font-size: 32px;
  line-height: 42px;
  font-weight: bold;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }
`

const JobLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  justify-self: flex-end;
  margin-top: auto;
  color: white;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`

type Props = {
  location: string
  title: string
  url: string
}

export const Card = ({ location, title, url }: Props) => {
  return (
    <Container>
      <Location>
        <StyledMapPin />
        {location}
      </Location>
      <Title>{title}</Title>
      <JobLink href={url} target="_blank">
        See position <StyledArrowRight />
      </JobLink>
    </Container>
  )
}

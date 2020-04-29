import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 2px 10px 0 rgba(40, 54, 61, 0.18);
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 0.33px;
  flex-basis: 31.1%;
  min-height: 80px;
  color: ${(p) => p.theme.palette.navy};
  background-color: ${(p) => p.theme.palette.greyPale};
  margin-bottom: 16px;
  margin-right: 19px;
  @media screen and (max-width: 1240px) {
    margin-right: 0;
  }
`

const Title = styled.p`
  font-weight: bold;
  padding-bottom: 3px;
`

const Text = styled.p`
  line-height: normal;
  flex: 1;
`

interface CardProps {
  title: string
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, children }) => (
  <CardContainer>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </CardContainer>
)

export default Card

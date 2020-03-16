import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 2px 10px 0 rgba(212, 212, 211, 0.59);
  padding: 10px;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 0.33px;
  min-height: 80px;
  color: ${p => p.theme.palette.navy};
  background-color: ${p => p.theme.palette.greyPale};
  margin-bottom: 16px;
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

import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 15px;
  letter-spacing: 0.33px;
  min-height: 80px;
  color: ${(p) => p.theme.palette.navy};
  margin-bottom: 16px;
`

const Title = styled.p`
  margin-top: 20px;
  font-weight: bold;
  font-size: 25px;
  line-height: 32px;
`

const Text = styled.p`
  line-height: normal;
  flex: 1;
  margin-top: 16px;
`

interface CardProps {
  icon: React.FC
  title: string
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, children }) => (
  <CardContainer>
    <Icon />
    <Title>{title}</Title>
    <Text>{children}</Text>
  </CardContainer>
)

export default Card

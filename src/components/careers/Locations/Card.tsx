import { OfficeAddress } from 'components/careers/Locations'
import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  padding-bottom: 64px;
  border-radius: 15px;
  background-color: ${(p) => p.theme.palette.pink};
`

const Title = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }
`

const Text = styled.p`
  flex: 1;
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`

interface CardProps {
  address: OfficeAddress
}

const Card: React.FC<CardProps> = ({ address }) => (
  <CardContainer>
    <Title>{address.city}</Title>
    <Text>{address.street},</Text>
    <Text>
      {address.postcode} {address.city}
    </Text>
    <Text>{address.country}</Text>
  </CardContainer>
)

export default Card

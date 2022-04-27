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
  max-width: 354px;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 16px;
`

const Text = styled.p`
  line-height: normal;
  flex: 1;
  font-size: 25px;
  line-height: 32px;
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

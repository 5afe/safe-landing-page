import React from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
  display: flex;
  color: ${(p) => p.theme.palette.navy};
  padding: 10px 0;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

const STitle = styled.h6`
  font-size: 25px;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`

const ImageContainer = styled.div`
  width: 70px;
  margin-right: 20px;
`

interface CardProps {
  img: React.Component
  title: string
}

const Card: React.FC<CardProps> = ({ img, title }) => {
  const Image = img || null

  return (
    <SContainer>
      {Image && (
        <ImageContainer>
          <Image />
        </ImageContainer>
      )}
      <TitleWrapper>
        <STitle>{title}</STitle>
      </TitleWrapper>
    </SContainer>
  )
}

export default Card

import React, { Component } from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
  display: flex;
  color: ${p => p.theme.palette.navy};
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
`

const ImageContainer = styled.div`
  width: 70px;
  margin-right: 20px;
`

const Card = ({ img, title }: { Component; string }) => {
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

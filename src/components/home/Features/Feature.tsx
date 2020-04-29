import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  img: React.Component
  title: string
  className?: string
}

const SContainer = styled.div`
  display: flex;
  color: ${(p) => p.theme.palette.navy};
`

const SFeatureTitle = styled.h6`
  font-weight: 800;
  letter-spacing: 0.36px;
  margin-bottom: 5px;
`

const SFeatureText = styled.p`
  letter-spacing: 0.36px;
`

const ImageContainer = styled.div`
  width: 70px;
  margin-right: 20px;
`

const Feature = ({ children, img, title, className = '' }: Props) => {
  const Image = img || null

  return (
    <SContainer className={className}>
      {Image && (
        <ImageContainer>
          <Image />
        </ImageContainer>
      )}
      <div>
        <SFeatureTitle>{title}</SFeatureTitle>
        <SFeatureText>{children}</SFeatureText>
      </div>
    </SContainer>
  )
}

export default Feature

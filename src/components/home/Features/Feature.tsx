import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  img: string
  title: string
}

const SContainer = styled.div`
  display: flex;
`

const TextContainer = styled.div``

const SFeatureTitle = styled.h6``

const SFeatureText = styled.p``

const Feature = ({ children, img, title }: Props) => {
  return (
    <SContainer>
      <TextContainer>
        <SFeatureTitle>{title}</SFeatureTitle>
        <SFeatureText>{children}</SFeatureText>
      </TextContainer>
    </SContainer>
  )
}

export default Feature

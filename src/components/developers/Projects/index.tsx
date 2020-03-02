import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import { PROJECTS } from './projects'

const Container = styled.section`
  padding-top: 150px;
  padding-bottom: 230px;
  color: ${p => p.theme.palette.navy};
  overflow: hidden;
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  height: 100%;
`

const LCol = styled.div`
  flex-basis: 25%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 160px);
  grid-column-gap: 91px;
  grid-row-gap: 51px;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  line-height: normal;
`

const ImageAnchor = styled.a`
  max-width: 160px;
  max-height: 54px;
  text-align: center;
`

const Image = styled.img`
  max-width: 160px;
  width: auto;
  height: auto;
  max-height: 54px;
  border-radius: 50%;
`

const Projects = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>Projects building on Gnosis Safe</SHeading>
      </LCol>
      <RCol>
        {PROJECTS.map(project => (
          <ImageAnchor
            key={project.name}
            title={project.name}
            href={project.websiteURL}
            target="_blank"
          >
            <Image src={project.imageURL}></Image>
          </ImageAnchor>
        ))}
      </RCol>
    </SWrapper>
  </Container>
)

export default Projects

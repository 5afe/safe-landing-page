import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import { PROJECTS } from './projects'

const Container = styled.section`
  padding-top: 150px;
  padding-bottom: 230px;
  color: ${(p) => p.theme.palette.navy};
  overflow: hidden;
  @media screen and (max-width: 980px) {
    padding: 0;
  }
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 0px 10px 40px 10px;
  }
`

const LCol = styled.div`
  flex-basis: 25%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-row-gap: 51px;
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  line-height: normal;
  min-width: 300px;
  @media screen and (max-width: 980px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const ImageAnchor = styled.a`
  max-height: 54px;
`

const Image = styled.img`
  max-width: 160px;
  max-height: 54px;
  width: auto;
  height: auto;
  border-radius: 50%;
`

const Projects = () => (
  <Container>
    <SWrapper>
      <LCol>
        <SHeading>Projects building on Gnosis Safe</SHeading>
      </LCol>
      <RCol>
        {PROJECTS.map((project) => (
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

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import LinesMainSVG from '../../assets/linesMain.svg'
import PlayIcon from '../../assets/play.svg'
import { OVERVIEW_CATEGORY, useAnalytics } from '../../utils/googleAnalytics'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import Heading from '../ui/Heading'

const Container = styled.main`
  height: calc(100vh - 56px);
  background: ${(p) => p.theme.palette.darkGreyBackground};
  position: relative;
  overflow: hidden;
  padding: 0 20px;
  @media screen and (max-width: 980px) {
    height: auto;
    padding: 0 12px;
  }
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: stretch;
  height: 100%;
  z-index: 2;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 30px 0 40px 0;
  }
`

const SHeading = styled(Heading)`
  margin-bottom: 30px;
  @media screen and (max-width: 980px) {
    font-size: 36px;
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    text-align: left;
  }
`

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  @media screen and (max-width: 980px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`

const SButtonLink = styled(ButtonLink)`
  text-align: center;
  width: 165px;
  box-shadow: none;
  @media screen and (max-width: 980px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const SButtonLinkLeft = styled(SButtonLink)`
  margin-right: 20px;
`
const SButtonLinkRight = styled(SButtonLink)``

const SLinesMainSVG = styled(LinesMainSVG)`
  position: absolute;
  left: 0;
  bottom: 0;
  stroke: ${(p) => p.theme.palette.primary};
  z-index: 1;
  @media screen and (max-width: 980px) {
    top: 220px;
  }
`

const LCol = styled.div`
  flex-direction: column;
  min-width: 450px;
  @media screen and (max-width: 980px) {
    padding: 0px;
    min-width: 0;
  }
`

const RCol = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
`

const VideoWrapper = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 4px 4pxc 30px 0 rgba(40, 54, 61, 0.18)
  position: relative;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  svg:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  video {
    display: block;
  }
`

const MainSection = () => {
  const { trackEvent } = useAnalytics()
  const videoRef = useRef<any>()

  useEffect(() => {
    if (!videoRef) return
    const video = videoRef.current
    video.addEventListener('fullscreenchange', () => {
      video.muted = !video.muted
      trackEvent({
        category: OVERVIEW_CATEGORY,
        action: 'Main section',
        label: 'Close video',
        value: video.currentTime,
      })
    })
  }, [videoRef])

  const playVideo = () => {
    if (!videoRef) return
    trackEvent({
      category: OVERVIEW_CATEGORY,
      action: 'Main section',
      label: 'Open video',
    })
    const video = videoRef.current
    video.currentTime = 0
    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.webkitRequestFullscreen) {
      /* Safari */
      video.webkitRequestFullscreen()
    } else if (video.msRequestFullscreen) {
      /* IE11 */
      video.msRequestFullscreen()
    }
  }

  return (
    <Container>
      <SLinesMainSVG />
      <SWrapper>
        <LCol>
          <SHeading>
            The most trusted  platform to manage digital assets on Ethereum
          </SHeading>
          <ButtonsRow>
            <SButtonLinkLeft url="/app/#" target="_self" explicitExternal>
              <div
                onClick={() =>
                  trackEvent({
                    category: OVERVIEW_CATEGORY,
                    action: 'Main section',
                    label: 'Click Open app',
                  })
                }
              >
                Open app
              </div>
            </SButtonLinkLeft>
            <SButtonLinkRight
              colorScheme="green"
              url="/#getting-started"
              target="_self"
              explicitExternal
            >
              <div
                onClick={() =>
                  trackEvent({
                    category: OVERVIEW_CATEGORY,
                    action: 'Main section',
                    label: 'Click How it works',
                  })
                }
              >
                How it works
              </div>
            </SButtonLinkRight>
          </ButtonsRow>
        </LCol>
        <RCol>
          <VideoWrapper>
            <video width="100%" autoPlay muted ref={videoRef}>
              <source
                type="video/mp4"
                src="https://gnosis-safe.io/gnosis-safe-final.mp4"
              />
            </video>
            <PlayIcon onClick={playVideo} />
          </VideoWrapper>
        </RCol>
      </SWrapper>
    </Container>
  )
}

export default MainSection

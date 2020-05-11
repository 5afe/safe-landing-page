import styled from 'styled-components'

export const ContentWrapper = styled.div`
  margin: 50px auto 0px;
  max-width: 1200px;
  padding: 0 20px 100px;
`

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 800;
  padding: 30px 0;
  letter-spacing: 1px;
  color: ${(p) => p.theme.palette.navy};
`

export const Date = styled.div`
  padding: 40px 0;
`

export const Section = styled.div`
  --border: 1px solid red;
`

export const TitleSection = styled.p`
  font-size: 25px;
  letter-spacing: 0.56px;
  font-weight: 800;
  padding: 30px 0 10px;
`

export const TitleSubSection = styled.p`
  font-size: 16px;
  letter-spacing: 0.36px;
  font-weight: 800;
  padding: 25px 0 10px;
`

export const RedMessage = styled.p`
  font-size: 16px;
  letter-spacing: 0.36px;
  color: #db3a3d;
  font-weight: 800;
  line-height: normal;
  padding: 20px 0 10px;
`

export const Paragraph = styled.p`
  padding: 8px 0;
  font-size: 16px;
  line-height: normal;
`

export const Ol = styled.ol`
  margin-left: 50px;
  counter-reset: item;
`

export const Li = styled.li`
  padding: 8px 0;
  font-size: 16px;
  line-height: normal;
`

export const Link = styled.a`
  color: ${(p) => p.theme.palette.primary};
`

export const B = styled.span`
  font-weight: 800;
`

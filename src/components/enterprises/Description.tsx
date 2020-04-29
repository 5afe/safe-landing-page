import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'

const SHeading = styled(Heading)`
  letter-spacing: 1px;
  color: ${(p) => p.theme.palette.white};
  @media screen and (max-width: 1240px) {
    font-size: 16px;
    padding: 0 12px;
  }
`

const Container = styled.div`
  position: relative;
  padding-top: 107px;
  padding-bottom: 122px;
  background-color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 1240px) {
    padding: 30px 0 20px 0;
  }
`

const Description = () => (
  <Container>
    <ContentWrapper>
      <SHeading>
        The Gnosis Safe Multisig is an enterprise-ready wallet solution for
        managing digital assets. Multi-signature means wallet owners are always
        in control of their own assets and can set granular permission on fund
        management.
      </SHeading>
    </ContentWrapper>
  </Container>
)

export default Description

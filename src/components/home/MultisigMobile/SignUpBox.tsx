import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

const Container = styled.div`
  flex-basis: 83%;

  display: flex;
  height: 408px;
  justify-content: space-between;
  background-color: ${p => p.theme.palette.primary};
  border-radius: 4px;
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.22);
  padding: 30px 152px 97px 37px;
  position: relative;
`

const Col = styled.div`
  flex-basis: 48%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SHeading = styled.h3`
  font-size: 45px;
  font-weight: 800;
  letter-spacing: 1px;
  color: ${p => p.theme.palette.navy};
`

const SText = styled.p`
  font-size: 16px;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.36px;
  color: ${p => p.theme.palette.navy};
`

const SInput = styled(Input)`
  width: 100%;
`

const SButton = styled(Button)`
  max-width: 205px;
`

const ImgContainer = styled.div`
  position: absolute;

  top: 40%;
  right: -188px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`

const PhoneImg = styled(Image)`
  min-width: 268px;
`

const sectionQuery = graphql`
  query {
    phone: file(relativePath: { eq: "phone.png" }) {
      childImageSharp {
        fixed(width: 268) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const SignUpBox = () => {
  const [email, setEmail] = React.useState<string>('')
  const [msg, setMsg] = React.useState<string>('')

  return (
    <StaticQuery query={sectionQuery}>
      {data => (
        <Container>
          <Col>
            <SHeading>
              Safe Multisig
              <br />
              Mobile App
            </SHeading>
            <SInput
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value)
              }}
            />
          </Col>
          <Col>
            <SText>
              We are launching a mobile companion
              <br />
              app for the Safe Multisig later this year.
              <br />
              Sign up to be the first one to get
              <br />
              your hands on it!
            </SText>
            <SButton colorScheme="white" type="submit">
              Sign up for early access
            </SButton>
          </Col>
          <ImgContainer>
            <PhoneImg fixed={data.phone.childImageSharp.fixed} />
          </ImgContainer>
        </Container>
      )}
    </StaticQuery>
  )
}

export default SignUpBox

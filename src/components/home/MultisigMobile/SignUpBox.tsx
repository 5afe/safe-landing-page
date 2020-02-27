import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

// https://gnosis.us13.list-manage.com/subscribe/post?u=1a123436baa68728b8cfa3402&amp;id=05732a8a78

const Container = styled.div`
  flex-basis: 83%;
  display: flex;
  height: 408px;
  flex-direction: column;
  background-color: ${p => p.theme.palette.primary};
  border-radius: 4px;
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.22);
  padding: 30px 152px 97px 37px;
  position: relative;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Form = styled.form`
  margin-top: 110px;
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
  max-width: 440px;
  width: 100%;
`

const SButton = styled(Button)`
  max-width: 205px;
`

const ImgContainer = styled.div`
  position: absolute;

  top: 40%;
  right: -188px;
`

const PhoneImg = styled(Image)`
  min-width: 268px;
`

const SMsg = styled.p`
  margin-top: 5px;
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMsg('')

    try {
      const { result, msg } = await addToMailchimp(
        email,
        {},
        'https://gnosis.us13.list-manage.com/subscribe/post?u=1a123436baa68728b8cfa3402&amp;id=05732a8a78'
      )

      let message
      if (result != 'success') {
        message = msg || 'Sorry. Unable to subscribe. Please try again later.'

        if (msg && msg.indexOf('already subscribed') >= 0) {
          message = "You're already subscribed. Thank you."
        }
      } else {
        message = 'Thank you! You must confirm the subscription in your inbox.'
      }

      setMsg(message)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <StaticQuery query={sectionQuery}>
      {data => (
        <Container>
          <Row>
            <Col>
              <SHeading>
                Safe Multisig
                <br />
                Mobile App
              </SHeading>
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
            </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <SInput
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                  }}
                />
                {msg && <SMsg>{msg}</SMsg>}
              </Col>
              <Col>
                <SButton colorScheme="white" type="submit">
                  Sign up for early access
                </SButton>
              </Col>
            </Row>
          </Form>
          <ImgContainer>
            <PhoneImg fixed={data.phone.childImageSharp.fixed} />
          </ImgContainer>
        </Container>
      )}
    </StaticQuery>
  )
}

export default SignUpBox

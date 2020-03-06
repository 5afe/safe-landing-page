import React from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Button from '../../ui/Button'
import Input from '../../ui/Input'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 1240px) {
    display: block;
  }
`

const Col = styled.div`
  flex-basis: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LCol = styled.div`
  flex-basis: 25%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 72.5%;
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  margin-bottom: 29px;
`

const SForm = styled.form`
  display: flex;
  position: relative;
  @media screen and (max-width: 1240px) {
    display: block;
  }
`

const SInput = styled(Input)`
  width: 100%;
  margin-right: 50px;
  @media screen and (max-width: 1240px) {
    max-width: 440px;
    margin-right: 0;
  }
`

const SMsg = styled.p`
  margin-top: 5px;
`

const SButton = styled(Button)`
  max-width: 100px;
  @media screen and (max-width: 1240px) {
    max-width: 205px;
    margin: 40px 0;
    margin-right: 0;
  }
`

const GetNotified = () => {
  const [email, setEmail] = React.useState<string>('')
  const [msg, setMsg] = React.useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { result, msg } = await addToMailchimp(email)

      let message
      if (result !== 'success') {
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
    <Row>
      <LCol>
        <SHeading>
          Get notified about
          <br />
          future releases
        </SHeading>
      </LCol>
      <RCol>
        <SForm onSubmit={handleSubmit}>
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
                Sign up
              </SButton>
            </Col>
          </Row>
        </SForm>
      </RCol>
    </Row>
  )
}

export default GetNotified

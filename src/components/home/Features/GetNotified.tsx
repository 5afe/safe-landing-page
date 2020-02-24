import React from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Button from '../../ui/Button'
import Input from '../../ui/Input'

const Row = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const LCol = styled.div`
  flex-basis: 28%;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 35%;
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
`

const SInput = styled(Input)`
  width: 100%;
  margin-right: 50px;
`

const SMsg = styled.p`
  position: absolute;
  top: 120%;
  max-width: 250px;
  min-height: 50px;
`

const GetNotified = () => {
  const [email, setEmail] = React.useState<string>('')
  const [msg, setMsg] = React.useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { result, msg } = await addToMailchimp(email)

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
          <SInput
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value)
            }}
          />
          <Button colorScheme="white" type="submit">
            Sign up
          </Button>
          {msg && <SMsg>{msg}</SMsg>}
        </SForm>
      </RCol>
    </Row>
  )
}

export default GetNotified

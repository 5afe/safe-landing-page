import React from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import LinkIcon from '../../../assets/link.svg'
import { useAnalytics, OVERVIEW_CATEGORY } from '../../../utils/googleAnalytics'

const SHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 44px;
  line-height: 1.18;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 1240px) {
    padding: 30px 0;
    font-size: 36px;
  }
`

const LetUsKnow = styled.div`
  font-size: 24px;
  text-align: center;
  line-height: 1.25;
  padding: 20px 0 50px 0;
  @media screen and (max-width: 1240px) {
    padding: 0;
  }
`

const SForm = styled.form`
  display: flex;
  padding: 45px 0 100px 0;
  justify-content: center;
  @media screen and (max-width: 1240px) {
    display: block;
    padding: 0;
    max-width: 420px;
    position: relative;
    margin: 0 auto;
  }
`

const Col = styled.div`
  width: 420px;
  height: 110px;
  position: relative;
  margin-right: 20px;
  @media screen and (max-width: 1240px) {
    margin: 0 auto;
    width: 100%;
    height: auto;
  }
`

const SInput = styled(Input)`
  height: 52px;
  width: 100%;
  @media screen and (max-width: 1240px) {
    max-width: 440px;
    margin-right: 0;
  }
`

const SMsg = styled.p`
  margin-top: 5px;
`

const SButton = styled(Button)`
  width: 180px;
  height: 52px;
  font-size: 16px;
  outline: none;
  @media screen and (max-width: 1240px) {
    width: 170px;
    display: block;
    margin: 20px auto 0;
  }
`

const SLinkIcon = styled(LinkIcon)`
  margin-left: 5px;
`

const InnerLink = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${(p) => p.theme.palette.primary};
  text-decoration: underline;

  &:hover {
    color: ${(p) => p.theme.palette.primaryHover};
  }
`

const GetNotified = () => {
  const [email, setEmail] = React.useState<string>('')
  const [msg, setMsg] = React.useState<string>('')
  const { trackEvent } = useAnalytics()

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
    <>
      <SHeading>Missing a feature?</SHeading>
      <LetUsKnow>
        <span>Let us know! </span>
        <a
          href="http://safe.cnflx.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InnerLink onClick={() => trackEvent({ category: OVERVIEW_CATEGORY, action: 'Features section', label: 'Open Feature idea board' })}>
            Feature idea board
            <SLinkIcon />
          </InnerLink>
        </a>
      </LetUsKnow>
      <SHeading>Get notified about future releases</SHeading>
      <SForm onSubmit={handleSubmit}>
        <Col>
          <SInput
            type="email"
            placeholder="Your e-mail address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value)
            }}
          />
          {msg && <SMsg>{msg}</SMsg>}
        </Col>
        <SButton colorScheme="green" type="submit">
          Sign up
        </SButton>
      </SForm>
    </>
  )
}

export default GetNotified

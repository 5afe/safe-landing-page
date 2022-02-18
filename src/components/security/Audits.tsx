import React from 'react'
import styled from 'styled-components'
import BgGray from '../../assets/bg-gray.svg'
import ContentWrapper from '../Layout/ContentWrapper'
import { SECURITY_CATEGORY, useAnalytics } from '../../utils/googleAnalytics'

const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.palette.navy};
`

const Container = styled.div`
  padding: 277px 0 136px 0;
  position: relative;
  color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 980px) {
    padding: 30px 0 0 0;
  }
`

const Block = styled.div`
  padding: 0 20px;
  @media screen and (max-width: 980px) {
    padding: 0 12px;
  }
`

const SContentWrapper = styled(ContentWrapper)``

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    display: block;
  }
`

const LCol = styled.div`
  flex-basis: 25%;
  padding-right: 20px;
`

const RCol = styled.div`
  flex-basis: 72.5%;
`

const Description = styled.p`
  width: 273px;
  height: 120px;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0.36px;
  margin-top: 37px;
  @media screen and (max-width: 980px) {
    width: auto;
    margin-bottom: 10px;
  }
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const SAudit = styled.div`
  --max-width: 776px;
  border-radius: 8px;
  box-shadow: 1px 2px 10px 0 rgba(40, 54, 61, 0.18);
  background-color: ${(p) => p.theme.palette.pink};
  margin-bottom: 20px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`

const AuditDate = styled.p`
  font-weight: 800;
  letter-spacing: 0.56px;
  font-size: 25px;
  line-height: normal;
  flex-basis: 30%;
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`

const AuditAuthor = styled.p`
  letter-spacing: 0.56px;
  font-size: 25px;
  line-height: normal;
  flex-basis: 60%;
  @media screen and (max-width: 980px) {
    font-size: 16px;
  }
`

const SBgGray = styled(BgGray)`
  position: absolute;
  bottom: 0;
  z-index: -2;
  @media screen and (max-width: 980px) {
    top: 0;
  }
  fill: #e9e9e9;
`

const Arrow = styled.span`
  font-size: 45px;
  font-weight: bold;
  @media screen and (max-width: 980px) {
    display: none;
  }
`

interface AuditProps {
  date: string
  author: string
}

const Audit: React.FC<AuditProps> = ({ date, author }) => (
  <SAudit>
    <AuditDate>{date}</AuditDate>
    <AuditAuthor>{author}</AuditAuthor>
    <Arrow>→</Arrow>
  </SAudit>
)

const Audits = () => {
  const { trackEvent } = useAnalytics()

  return (
    <Container>
      <SBgGray />
      <Block>
        <SContentWrapper>
          <Row>
            <LCol>
              <SHeading>Audits</SHeading>
              <Description>
                While the core smart contract has been formally verified, any
                and every update to the smart contracts goes through a careful
                audit by external security experts.
              </Description>
            </LCol>
            <RCol>
              <div
                onClick={() =>
                  trackEvent({
                    category: SECURITY_CATEGORY,
                    action: 'Audits section',
                    label: 'Open audit: Alexey Akhunov (v0.0.1)',
                  })
                }
              >
                <Link
                  href="https://github.com/gnosis/safe-contracts/blob/v1.1.1/docs/alexey_audit.md"
                  target="_blank"
                >
                  <Audit
                    date="Jul. 4th, 2018"
                    author="Alexey Akhunov (v0.0.1)"
                  />
                </Link>
              </div>
              <div
                onClick={() =>
                  trackEvent({
                    category: SECURITY_CATEGORY,
                    action: 'Audits section',
                    label: 'Open audit: Runtime Verification (v1.0.0)',
                  })
                }
              >
                <Link
                  href="https://github.com/gnosis/safe-contracts/blob/v1.1.1/docs/Gnosis_Safe_Formal_Verification_Report_1_0_0.pdf"
                  target="_blank"
                >
                  <Audit
                    date="Feb. 27th, 2019"
                    author="Runtime Verification (v1.0.0)"
                  />
                </Link>
              </div>
              <div
                onClick={() =>
                  trackEvent({
                    category: SECURITY_CATEGORY,
                    action: 'Audits section',
                    label: 'Open audit: G0 Group (v1.1.0 & v1.1.1)',
                  })
                }
              >
                <Link
                  href="https://github.com/gnosis/safe-contracts/blob/v1.1.1/docs/audit_1_1_1.md"
                  target="_blank"
                >
                  <Audit
                    date="Nov. 11th, 2019"
                    author="G0 Group (v1.1.0 & v1.1.1)"
                  />
                </Link>
              </div>
              <div
                onClick={() =>
                  trackEvent({
                    category: SECURITY_CATEGORY,
                    action: 'Audits section',
                    label: 'Open audit: G0 Group (v1.2.0)',
                  })
                }
              >
                <Link
                  href="https://github.com/gnosis/safe-contracts/blob/v1.2.0/docs/Gnosis_Safe_Audit_Report_1_2_0.pdf"
                  target="_blank"
                >
                  <Audit date="May 4th, 2020" author="G0 Group (v1.2.0)" />
                </Link>
              </div>
              <div
                onClick={() =>
                  trackEvent({
                    category: SECURITY_CATEGORY,
                    action: 'Audits section',
                    label: 'Open audit: G0 Group (v1.3.0)',
                  })
                }
              >
                <Link
                  href="https://github.com/gnosis/safe-contracts/blob/186a21a74b327f17fc41217a927dea7064f74604/docs/audit_1_3_0.md"
                  target="_blank"
                >
                  <Audit date="May 5th, 2021" author="G0 Group (v1.3.0)" />
                </Link>
              </div>
            </RCol>
          </Row>
        </SContentWrapper>
      </Block>
    </Container>
  )
}

export default Audits

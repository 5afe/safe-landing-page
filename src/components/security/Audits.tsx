import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import BgGray from '../../assets/bg-gray.svg'

const Link = styled.a`
  text-decoration: none;
  color: ${p => p.theme.palette.navy};
`

const Container = styled.div`
  padding: 277px 0 136px 0;
  position: relative;
  color: ${p => p.theme.palette.navy};
`

const SContentWrapper = styled(ContentWrapper)``

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const LCol = styled.div`
  flex-basis: 25%;
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
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
`

const SAudit = styled.div`
  max-width: 776px;
  border-radius: 8px;
  box-shadow: 1px 2px 10px 0 rgba(40, 54, 61, 0.18);
  background-color: ${p => p.theme.palette.pink};
  margin-bottom: 20px;
  display: flex;
  padding: 20px;
`

const AuditDate = styled.p`
  font-weight: 800;
  letter-spacing: 0.56px;
  font-size: 25px;
  line-height: normal;
  flex-basis: 30%;
  height: 30px;
`

const AuditAuthor = styled.p`
  letter-spacing: 0.56px;
  font-size: 25px;
  line-height: normal;
  flex-basis: 60%;
  height: 30px;
`

const SBgGray = styled(BgGray)`
  position: absolute;
  bottom: 0;
  z-index: -2;
`

const Audit = ({ date, author }: { string; string }) => (
  <SAudit>
    <AuditDate>{date}</AuditDate>
    <AuditAuthor>{author}</AuditAuthor>
  </SAudit>
)

const Audits = () => (
  <Container>
    <SBgGray />
    <SContentWrapper>
      <Row>
        <LCol>
          <SHeading>Audits</SHeading>
          <Description>
            While the core smart contract has been formally verified, any and
            every update to the smart contracts goes through a careful audit by
            external security experts.
          </Description>
        </LCol>
        <RCol>
          <Link
            href="https://github.com/gnosis/safe-contracts/blob/v1.1.1/docs/alexey_audit.md"
            target="_blank"
          >
            <Audit date="Jul. 4th, 2018" author="Alexey Akhunov (v0.2.0)" />
          </Link>
          <Link
            href="https://github.com/gnosis/safe-contracts/blob/v1.1.1/docs/Gnosis_Safe_Formal_Verification_Report_1_0_0.pdf"
            target="_blank"
          >
            <Audit
              date="Feb. 27th, 2019"
              author="Runtime Verification (v1.0.0)"
            />
          </Link>
          <Link
            href="https://github.com/gnosis/safe-contracts/blob/v1.1.1/docs/audit_1_1_1.md"
            target="_blank"
          >
            <Audit date="Nov. 11th, 2019" author="G0 Group (v1.1.0 & v1.1.1)" />
          </Link>
        </RCol>
      </Row>
    </SContentWrapper>
  </Container>
)

export default Audits

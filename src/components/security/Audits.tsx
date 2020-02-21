import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import BgGray from '../../assets/bg-gray.svg'

const Container = styled.div`
  padding: 277px 0 136px 0;
  position: relative;
  z-index: -1;
  color: ${p => p.theme.palette.navy};
`

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
  z-index: -1;
  bottom: 0;
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
    <ContentWrapper>
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
          <Audit date="Jul. 4th, 2018" author="Alexey Akhunov (v0.2.0)" />
          <Audit
            date="Feb. 27th, 2019"
            author="Runtime Verification (v1.0.0)"
          />
          <Audit date="Nov. 11th, 2019" author="G0 Group (v1.1.0 & v1.1.1)" />
        </RCol>
      </Row>
    </ContentWrapper>
  </Container>
)

export default Audits

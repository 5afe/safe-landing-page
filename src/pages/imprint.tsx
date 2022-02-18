import * as React from 'react'
import Layout from '../components/Layout'
import {
  ContentWrapper,
  TitleSection,
  Paragraph,
} from '../styles/legalPagesStyles'

export default () => (
  <Layout title="Imprint">
    <ContentWrapper>
      <TitleSection>Gnosis Ltd.</TitleSection>
      <Paragraph>
        Gnosis Ltd.
        <br />
        World Trade Center
        <br />6 Bayside Rd, GX111AA Gibraltar
      </Paragraph>
      <Paragraph>E-Mail: info@gnosis.pm</Paragraph>
      <Paragraph>
        Directors: Stefan George, Martin Köppelmann, Joseph Lubin, Jeremy Millar
        <br />
        Company registered in Gibraltar
        <br />
        Company Nr. 115571
      </Paragraph>
    </ContentWrapper>
  </Layout>
)

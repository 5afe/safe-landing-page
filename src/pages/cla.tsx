import * as React from 'react'
import Layout from '../components/Layout'
import {
  ContentWrapper,
  Link,
  Paragraph,
  Section,
  Title,
  TitleSection,
} from '../styles/legalPagesStyles'

export default () => (
  <Layout title="Safe Contributor License Agreement">
    <ContentWrapper>
      <Title>Safe Contributor License Agreement</Title>
      <Section>
        <Paragraph>
          Thank you for your interest in contributing to open source software
          projects (“Projects”) made available by Safe Ecosystem Foundation or
          its affiliates (“SEF”). This Contributor License Agreement
          (“Agreement”) sets out the terms governing any source code, object
          code, bug fixes, configuration changes, tools, specifications,
          documentation, data, materials, feedback, information or other works
          of authorship that you submit or have submitted, in any form and in
          any manner, to SEF in respect of any of the Projects (collectively
          “Contributions”). If you have any questions respecting this Agreement,
          please contact{' '}
          <Link href="mailto:legal@safe.global">legal@safe.global</Link>.
        </Paragraph>

        <Paragraph>
          You agree that the following terms apply to all of your past, present
          and future Contributions. Except for the licenses granted in this
          Agreement, you retain all of your right, title and interest in and to
          your Contributions.
        </Paragraph>

        <TitleSection>Copyright License</TitleSection>
        <Paragraph>
          You hereby grant, and agree to grant, to SEF a non-exclusive,
          perpetual, irrevocable, worldwide, fully-paid, royalty-free,
          transferable copyright license to reproduce, prepare derivative works
          of, publicly display, publicly perform, and distribute your
          Contributions and such derivative works, with the right to sublicense
          the foregoing rights through multiple tiers of sublicensees.
        </Paragraph>

        <TitleSection>Patent License</TitleSection>
        <Paragraph>
          You hereby grant, and agree to grant, to SEF a non-exclusive,
          perpetual, irrevocable, worldwide, fully-paid, royalty-free,
          transferable patent license to make, have made, use, offer to sell,
          sell, import, and otherwise transfer your Contributions, where such
          license applies only to those patent claims licensable by you that are
          necessarily infringed by your Contributions alone or by combination of
          your Contributions with the Project to which such Contributions were
          submitted, with the right to sublicense the foregoing rights through
          multiple tiers of sublicensees.
        </Paragraph>

        <TitleSection>Moral Rights</TitleSection>
        <Paragraph>
          To the fullest extent permitted under applicable law, you hereby
          waive, and agree not to assert, all of your “moral rights” in or
          relating to your Contributions for the benefit of SEF, its assigns,
          and their respective direct and indirect sublicensees.
        </Paragraph>

        <TitleSection>Third Party Content/Rights</TitleSection>
        <Paragraph>
          If your Contribution includes or is based on any source code, object
          code, bug fixes, configuration changes, tools, specifications,
          documentation, data, materials, feedback, information or other works
          of authorship that were not authored by you (“Third Party Content”) or
          if you are aware of any third party intellectual property or
          proprietary rights associated with your Contribution (“Third Party
          Rights”), then you agree to include with the submission of your
          Contribution full details respecting such Third Party Content and
          Third Party Rights.
        </Paragraph>

        <TitleSection>Representations</TitleSection>
        <Paragraph>
          You represent that, other than the Third Party Content and Third Party
          Rights identified by you in accordance with this Agreement, you are
          the sole author of your Contributions and are legally entitled to
          grant the foregoing licenses and waivers in respect of your
          Contributions. If your Contributions were created in the course of
          your employment with your past or present employer(s), you represent
          that such employer(s) has authorized you to make your Contributions on
          behalf of such employer(s) or such employer(s) has waived all of their
          right, title or interest in or to your Contributions.
        </Paragraph>

        <TitleSection>Disclaimer</TitleSection>
        <Paragraph>
          To the fullest extent permitted under applicable law, your
          Contributions are provided on an "as-is" basis, without any warranties
          or conditions, express or implied, including, without limitation, any
          implied warranties or conditions of non-infringement, merchantability
          or fitness for a particular purpose. You are not required to provide
          support for your Contributions, except to the extent you desire to
          provide support.
        </Paragraph>

        <TitleSection>No Obligation</TitleSection>
        <Paragraph>
          You acknowledge that SEF is under no obligation to use or incorporate
          your Contributions into any of the Projects. The decision to use or
          incorporate your Contributions into any of the Projects will be made
          at the sole discretion of SEF or its authorized delegates.
        </Paragraph>

        <TitleSection>Disputes</TitleSection>
        <Paragraph>
          This Agreement shall be governed by and construed in accordance with
          Swiss Law, excluding Swiss choice-of-law principles. Any dispute,
          controversy or claim arising out of, or in relation to, this
          Agreement, including the validity, invalidity, breach, or termination
          thereof, shall be resolved by the ordinary cantonal courts of the
          canton of Zug, Switzerland. In the event that any of the provisions of
          this Agreement shall be held by a court or other tribunal of competent
          jurisdiction to be unenforceable, the remaining portions hereof shall
          remain in full force and effect.
        </Paragraph>

        <TitleSection>Assignment</TitleSection>
        <Paragraph>
          You agree that SEF may assign this Agreement, and all of its rights,
          obligations and licenses hereunder.
        </Paragraph>
      </Section>
    </ContentWrapper>
  </Layout>
)

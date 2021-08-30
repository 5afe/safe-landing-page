import * as React from 'react'
import Layout from '../components/Layout'
import {
  ContentWrapper,
  Title,
  Date,
  Section,
  TitleSection,
  Link,
  Paragraph,
  RedMessage,
  Ol,
  Li,
  B,
} from '../styles/legalPagesStyles'

export default () => (
  <Layout title="Terms and Conditions">
    <ContentWrapper>
      <Title>Terms and Conditions</Title>
      <Date>Last updated on June, 2021</Date>
      <RedMessage>
        THESE TERMS CREATE A BINDING CONTRACT BETWEEN YOU AND GNOSIS LIMITED. BY
        USING OUR SERVICES (DEFINED BELOW), YOU AGREE TO BE BOUND BY THESE
        TERMS. IF YOU DO NOT ACCEPT THE TERMS, YOU MUST NOT AND ARE NOT
        AUTHORIZED TO USE ANY OF OUR SERVICES.
      </RedMessage>
      <RedMessage>
        FOR PERSONS RESIDING IN THE USA: THESE TERMS CONTAIN ADDITIONAL
        PROVISIONS APPLICABLE ONLY TO YOU. THEY CONTAIN AN ARBITRATION
        PROVISION. IF WE CANNOT RESOLVE A DISPUTE AMICABLY, ALL DISPUTES ARISING
        UNDER OR IN CONNECTION WITH THIS AGREEMENT MUST BE SETTLED IN BINDING
        ARBITRATION PER CLAUSE 28.4. ENTERING INTO THIS AGREEMENT CONSTITUTES A
        WAIVER OF YOUR RIGHT, IF ANY, TO PARTICIPATE IN A CLASS ACTION LAWSUIT
        OR A JURY TRIAL.
      </RedMessage>
      <Section>
        <TitleSection>1. What is the scope of the Terms?</TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            <Paragraph>
              These Terms of Service (the “Agreement”) are a legal agreement
              between you (“you” or “yours”) and Gnosis Limited (“Gnosis”, “we”,
              “our” or “us”). We are a company limited by shares registered in
              Gibraltar under company no. 115571, with its registered office at
              the World Trade Center, 6 Bayside Rd, GX11 1AA, Gibraltar. You can
              contact us by writing to{' '}
              <Link href="mailto:info@gnosis.io">info@gnosis.io</Link>.
            </Paragraph>
          </Li>
          <Li>
            <Paragraph>
              By using any service offered by us, whether through{' '}
              <Link href="https://gnosis-safe.io/">https://gnosis-safe.io</Link>
              , any associated website, API, or mobile applications as further
              detailed in clause 3 (collectively, the “Services”), you agree
              that you have read, understood, and accept all of the terms and
              conditions contained in this Agreement, including the{' '}
              <Link href="/cookie">Cookie Policy</Link> and the{' '}
              <Link href="/privacy">Privacy Policy</Link> incorporated herein by
              reference, as amended from time to time. If you do not agree with
              this Agreement, you must not use the Services.
            </Paragraph>
          </Li>
          <Li>
            <Paragraph>
              You are responsible for ensuring that all persons who access or
              use the Services through your device or internet connection are
              aware of this Agreement and its terms, and that they comply with
              them.
            </Paragraph>
          </Li>
          <Li>
            <Paragraph>
              Each time you use our Services you will be bound by the Agreement
              in force at that time. From time to time, we may change its terms.
              If we do this then we will publish those changes on{' '}
              <Link href="https://gnosis-safe.io/">
                https://gnosis-safe.io/
              </Link>{' '}
              and you will be bound by those new terms the next time you use our
              Services. If you do not agree to those changes you must not use
              our Services. You can always ask us for the Agreement, which was
              in force when you used the Services by writing to{' '}
              <Link href="mailto:info@gnosis.io">info@gnosis.io</Link>. Every
              time you wish to use the Services, please check and ensure that
              you agree with the latest updated version of the Agreement.
            </Paragraph>
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          2. What do some of the capitalised terms mean in the Agreement?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            “Ethereum Blockchain” means a mathematically secured consensus
            ledger maintained on the Ethereum Virtual Machine or an Ethereum
            Virtual Machine compatible validation mechanism.
          </Li>
          <Li>
            “Transaction” means a change to the data set through a new entry in
            the continuous Ethereum Blockchain.
          </Li>
          <Li>
            “Smart Contract” means a piece of source code deployed as an
            application on the Ethereum Blockchain which can be executed,
            including self-execution of Transactions as well as execution
            triggered by 3rd parties.
          </Li>
          <Li>
            “Token” means a digital asset transferred in a Transaction,
            including ETH, ERC20, ERC721 and ERC1155 tokens.
          </Li>
          <Li>
            “Wallet” means a cryptographic storage solution permitting you to
            store cryptographic assets by correlation of a (i) Public Key and
            (ii) a Private Key or a Smart Contract to receive, manage and send
            Tokens.
          </Li>
          <Li>
            “Public Key” means a unique sequence of numbers and letters within
            the Ethereum Blockchain to distinguish the network participants from
            each other.
          </Li>
          <Li>
            “Private Key” means a unique sequence of numbers and/or letters
            required to initiate an Ethereum Blockchain Transaction and should
            only be known by the legal owner of the Wallet.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          3. What are the Services of the Gnosis Safe?
        </TitleSection>
        <Paragraph>Our Services primarily consist of:</Paragraph>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            development and maintenance of a smart contract logic that is
            open-sourced and allows you to deploy a self-custodial smart
            contract-based multi-signature Wallet (“Gnosis Safe”) to hold and
            transfer Tokens as well as to customize your Gnosis Safe
            independently and in modular fashion;
          </Li>
          <Li>
            facilitation of your deployment of a Gnosis Safe and ongoing
            interaction with it on the Ethereum Blockchain whether directly or
            through third party protocols or plugins (“Facilitation Services”)
            through the development, provision, and maintenance of:
          </Li>
          <Ol style={{ listStyleType: 'decimal' }}>
            <Li>a web-based graphical user interface (“Interface”),</Li>
            <Li>
              a command-line interface (“CLI”) running locally on the user’s
              machine,
            </Li>
            <Li>a Google Chrome extension,</Li>
            <Li>
              a mobile application on Android and iOS (“Safe Mobile Apps”),
            </Li>
            <Li>software developer kits (“SDKs”),</Li>
            <Li>
              backend services and application programming interfaces (“APIs”);
            </Li>
          </Ol>
          <Li>
            development and provision of a graphical user interface (the
            “Dashboard”) to enable third-party developers and providers of
            decentralized applications and protocols on the Ethereum Blockchain
            (together “Apps”) to integrate custom plugins into the Interface and
            Safe Mobile Apps.
          </Li>
          <Li>
            a script that facilitates interactions between a Gnosis Safe and a
            decentralized trading protocol (“Gnosis Protocol”) enabling users to
            set up by themselves customized asset management strategies (“CMM”).
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          4. What do the Services of the Gnosis Safe not consist of?
        </TitleSection>
        <Paragraph>Our Services do not consist of:</Paragraph>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            activity regulated by the Gibraltar Financial Services Commission or
            any other regulatory agency;
          </Li>
          <Li>
            coverage underwritten by any regulatory agency’s compensation
            scheme;
          </Li>
          <Li>
            custody of your Private Keys, Tokens or or the ability to remove or
            freeze your Tokens;
          </Li>
          <Li>the storage or transmission of fiat currencies;</Li>
          <Li>
            back-up services to recover your Private Keys, for whose safekeeping
            you are solely responsible;
          </Li>
          <Li>
            any form of legal, financial, accounting, tax or other professional
            advice regarding Transactions and their suitability to you; and
          </Li>
          <Li>
            the responsibility to monitor authorised Transactions or to check
            the correctness or completeness of Transactions before you are
            authorising them.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          5. What do you need to know about third party services integrated
          through Dashboard or Facilitation Services?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            We provide the Dashboard and the Facilitation Services to you to
            interact with third-party systems. However, any activities you
            engage in with, or services you receive from, a third party is
            between you and that third party directly.
          </Li>
          <Li>This means specifically:</Li>
          <Ol style={{ listStyleType: 'decimal' }}>
            <Li>
              We do not have any oversight over your activities with third
              parties, and as such we do not and cannot make any representation
              regarding their appropriateness and suitability for you.
            </Li>
            <Li>
              Facilitation Services and Dashboard may involve or contain links
              or integrations to third party Apps that are not hosted, owned,
              controlled or maintained by us. We also do not participate in the
              transaction on such Apps and will and cannot monitor, verify,
              censor or edit the functioning or content of any App.
            </Li>
            <Li>
              We have not conducted any security audit, bug bounty or formal
              verification (whether internal or external) of the Apps integrated
              on our Dashboard or connected through the Facilitation Services.
            </Li>
            <Li>
              We have no control over, do not recommend, endorse, or otherwise
              take a position on the integrity, functioning of, content and your
              use of these Apps, whose sole responsibility lies with the person
              from whom such services or content originated.
            </Li>
            <Li>
              When you access or use those Apps you accept that there are risks
              in doing so and that you alone assume any such risks when choosing
              to interact with those Apps. We aren’t liable for any errors or
              omissions or for any damages or loss you might suffer through
              interacting with those Apps.
            </Li>
            <Li>
              You should read the license requirements, terms and conditions as
              well as privacy policy of each App that you access or use. Certain
              Apps may involve complex financial transactions that entail a high
              degree of risk.
            </Li>
            <Li>
              You agree to release us from all liability for your access or
              usage of any Apps through the Dashboard or Facilitation Services.
            </Li>
            <Li>
              If you contribute integrations to Apps to the Dashboard, you are
              responsible for all content you contribute, in any manner, to the
              Dashboard, and you must have all rights necessary to do so, in the
              manner in which you contribute it. You are responsible for all
              your activity in connection with any such App.
            </Li>
            <Li>
              Your interactions with persons found on or through the Apps,
              including payment and delivery of goods and services, financial
              transactions, and any other terms associated with such dealings,
              are solely between you and such persons. You agree that we shall
              not be responsible or liable for any loss or damage of any sort
              incurred as the result of any such dealings.
            </Li>
            <Li>
              If there is a dispute between you and the App provider or/and
              other users of the App, you agree that we are under no obligation
              to become involved. In the event that you have a dispute with one
              or more other users, you release us, our officers, employees,
              agents, contractors and successors from claims, demands, and
              damages of every kind or nature, known or unknown, suspected or
              unsuspected, disclosed or undisclosed, arising out of or in any
              way related to such disputes and/or our Services.
            </Li>
          </Ol>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          6. Are we responsible for the security of your Private Keys, seed
          words or other credentials?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            We shall not be responsible to secure your Private Keys, seed words,
            credentials or other means of authorization of your Wallet(s).
          </Li>
          <Li>
            You must own and control any Wallet you use in connection with our
            Services. You are responsible for implementing all appropriate
            measures for securing any Wallet you use, including any Private
            Key(s), seed words, credentials or other means of authorization
            necessary to access such storage mechanism(s).
          </Li>
          <Li>
            We exclude any and all liability for any security breaches or other
            acts or omissions, which result in your loss of access or custody of
            any cryptographic assets stored thereon.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          7. Are you eligible to use our Services and can we check your
          suitability?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            To access or use our Services, you must be able to form a legally
            binding contract with us. You must be of legal age in your
            jurisdiction to use the Services and you agree to provide legitimate
            and lawful documentation proving such status if requested or
            required by us.
          </Li>
          <Li>
            You must have the full right, power, and authority to enter into and
            comply with this Agreement on behalf of yourself and any company or
            legal entity for which you may access or use our Services.
          </Li>
          <Li>
            Our Services are operated out of Gibraltar. The Services may not be
            available or appropriate for use in other jurisdictions. You must
            not use our Services if your use of them would be illegal or
            otherwise violate any law you are subject to. We are not liable for
            your compliance with such laws.
          </Li>
          <Li>
            You must not be, and will not be, located in any jurisdiction that
            is the subject of an embargo by Gibraltar, the United Kingdom, the
            European Union or the United States and you are not listed on any
            list of prohibited or restricted parties by those foregoing.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          8. Can we terminate or limit your right to use our Services?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            We reserve the right, in our sole discretion and for whatever
            reason, but particularly in case you breach any term of this
            Agreement, to:
          </Li>
          <Ol style={{ listStyleType: 'decimal' }}>
            <Li>
              terminate your right to use the Services with immediate effect;
            </Li>
            <Li>
              limit use of all Gnosis Safe Interfaces, Safe Mobile Apps or
              Command Line Interfaces (the “Gnosis Clients”) to a specified
              number of persons;
            </Li>
            <Li>
              refuse to allow a person from using the Gnosis clients; and/or
            </Li>
            <Li>
              remove or exclude any person from using the Gnosis Clients for
              whatever reason.
            </Li>
          </Ol>
          <Li>
            We will only be able to limit access to the Gnosis Clients. At no
            time will we be able to access or transfer your funds without your
            consent.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          9. What licenses and access do we grant to you?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            All intellectual property rights in the Gnosis Safe and the Services
            throughout the world belong to us as owner or our licensors and the
            rights in the Services and the Services are only licensed to you.
            Nothing in these terms gives you any rights in respect of any
            intellectual property owned by us or our licensors and you
            acknowledge that you do not acquire any ownership rights by
            downloading the Interface or any content from the Interface.
          </Li>
          <Li>
            If you are a consumer we license, but do not sell, to you the
            Services you download solely for your own personal, non-commercial
            use. If you are a business user we license, but do not sell, to you
            the Services you download to use solely for your own internal
            business use. We remain the owner of the Services at all times.
          </Li>
          <Li>
            The Services may contain code, commonly referred to as open source
            software, which is distributed under open source licence terms,
            including terms which allow the free distribution and modification
            of the relevant software’s source code and/or which require all
            distributors to make such source code freely available upon request,
            including any contributions or modifications made by such
            distributor (“Open Source Software”). To the extent that the
            Services contain any Open Source Software, that element only is
            licensed to you under the relevant licence terms of the applicable
            third party licensor (“Open Source Licence Terms”) and not under
            this Agreement, and you accept and agree to be bound by such Open
            Source Licence Terms.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          10. What can you expect from the Services and can we make changes to
          them?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            Except as set out in this Agreement, we do not warrant, represent or
            guarantee that the Services will be accurate, complete, correct,
            reliable integer, fit for purpose, secure or free from weaknesses,
            vulnerabilities or bugs.
          </Li>
          <Li>
            You understand and accept that you use the Services at your own
            risk.
          </Li>
          <Li>
            To the fullest extent permitted by law, we provide the Services to
            you “as is” and “as available” without any warranty, representation
            or assurance (whether express or implied) in relation to
            merchantability, fitness for a particular purpose, availability,
            security, title or non-infringement.
          </Li>
          <Li>
            We reserve the right to change the format and features of the
            Services by making any updates to Services available for you to
            download or, where your device settings permit it, by automatic
            delivery of updates.
          </Li>
          <Li>
            You are not obliged to download the updated Services, but we may
            cease to provide and/or update prior versions of the Services and,
            depending on the nature of the update, in some circumstances you may
            not be able to continue using the Services until you have downloaded
            the updated version.
          </Li>
          <Li>
            We may cease to provide and/or update content to the Services, with
            or without notice to you, if it improves the Services we provide to
            you, or we need to do so for security, legal or any other reasons.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>11. Do we have any fiduciary duties to you?</TitleSection>
        <Paragraph>
          This Agreement is not intended to, and does not, create or impose any
          fiduciary duties on us. To the fullest extent permitted by law, you
          acknowledge and agree that we owe no fiduciary duties or liabilities
          to you or any other party, and that to the extent any such duties or
          liabilities may exist at law or in equity, those duties and
          liabilities are hereby irrevocably disclaimed, waived, and eliminated.
          You further agree that the only duties and obligations that we owe you
          are those set out expressly in this Agreement.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>
          12. What about third-party risk and the terms of third party platform
          providers and application stores?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            The Services rely in part on third party and open-source software,
            including the Ethereum Blockchain, and the continued development and
            support by third parties. There is no assurance or guarantee that
            those third parties will maintain their support of their software or
            that open source software will continue to be maintained. This may
            have a material adverse effect on the Services.
          </Li>
          <Li>
            Use of the Safe Mobile Apps by you is governed by the terms of this
            Agreement but may also be subject to any rules or policies applied
            by any third party platform providers with whose devices and/or
            operating systems the Safe Mobile Apps has/have been designed to be
            compatible with, including Apple Inc.’s App Store and Google Inc’s
            Google Play.
          </Li>
          <Li>
            These third party application stores are operated by the relevant
            third party platform providers and/or their affiliates, including
            Apple Inc. and Google Inc.. You must comply with all applicable
            terms of service, rules and policies applying to these third party
            application stores from which you download the Safe Mobile Apps, as
            they may be amended from time to time. We are not responsible for
            these third party application stores or (with the exception of the
            Safe Mobile Apps) for anything provided by them and do not guarantee
            that they will be continuously available.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>13. Can your Data Privacy be ensured?</TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            Our Services are built on the Ethereum Blockchain. Accordingly, by
            design, and practically, the records cannot be changed or deleted
            and are said to be ‘immutable’. This may affect your ability to
            exercise your rights such as your right to erasure (‘right to be
            forgotten’), or your rights to object or restrict processing of your
            personal data. Data on the Ethereum blockchain cannot be erased and
            cannot be changed.
          </Li>
          <Li>
            In order to comply with some of our contractual obligations to you,
            it will be necessary to write certain personal data, such as your
            Gnosis Safe address, onto the Ethereum blockchain.
          </Li>
          <Li>
            The ultimate decisions to (i) transact on the Ethereum Blockchain
            using your Gnosis Safe address, as well as (ii) share the public key
            relating to your Gnosis Safe address with anyone (including us)
            rests with you.
          </Li>
          <Li>
            When using the Gnosis Safe Mobile Apps, Interface or Dashboard we
            may collect and process personal data, including your Gnosis Safe
            address, Wallet addresses of externally owned accounts or smart
            contract Wallets set as signatories for your Gnosis Safe
            Transactions (the “Owners”), Transaction made with the Gnosis Safe
            as well as ETH and Token balance.
          </Li>
          <Li>
            <B>
              IF YOU WANT TO ENSURE YOUR PRIVACY RIGHTS ARE FULLY AVAILABLE, YOU
              SHOULD NOT TRANSACT ON THE ETHEREUM BLOCKCHAIN AS CERTAIN RIGHTS
              WILL NOT BE FULLY AVAILABLE OR EXERCISABLE BY YOU OR US.
            </B>
          </Li>
          <Li>
            For more information please also refer to section 3 of our{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          14. What do you agree, warrant and represent?
        </TitleSection>
        <Paragraph>
          By using our Services you hereby agree, represent and warrant that:
        </Paragraph>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            You are of legal age in your jurisdiction to use the Services and
            you agree to provide legitimate and lawful documentation proving
            such status if requested or required by us.
          </Li>
          <Li>
            You are not a citizen, resident, or member of any jurisdiction or
            group that is subject to economic sanctions by Gibraltar, the
            European Union or the United States or any other relevant
            jurisdiction.
          </Li>
          <Li>
            You do not appear on HMT Sanctions List, the U.S. Treasury
            Department’s Office of Foreign Asset Control’s sanctions lists, the
            U.S. commerce department's consolidated screening list, the EU
            consolidated list of persons, groups or entities subject to EU
            Financial Sanctions, nor do you act on behalf of a person sanctioned
            thereunder.
          </Li>
          <Li>
            You have read and understood this Agreement and agree to be bound by
            its terms.
          </Li>
          <Li>
            You do not rely on, and shall have no remedy in respect of, any
            statement, representation, assurance or warranty (whether made
            innocently or negligently) that is not set out in this Agreement.
          </Li>
          <Li>
            Your usage of our Services is legal under the laws of your
            jurisdiction or under the laws of any other jurisdiction to which
            you may be subject.
          </Li>
          <Li>
            You won’t use the Services or interact with the Services in a manner
            that violates any law or regulation, including, without limitation,
            any applicable export control laws.
          </Li>
          <Li>
            You understand the functionality, usage, storage, transmission
            mechanisms and intricacies associated with Tokens (such as ETH, WETH
            or DAI) as well as token storage facilities (including our Gnosis
            Safe), blockchain technology and blockchain-based software systems.
          </Li>
          <Li>
            You understand that transactions on the Ethereum Blockchain are
            irreversible and may not be erased and that your Gnosis Safe address
            and Transactions are displayed permanently and publicly and that you
            relinquish any right of rectification or erasure of personal data.
          </Li>
          <Li>
            You will comply with any applicable tax obligations in your
            jurisdiction arising from your use of the Services.
          </Li>
          <Li>
            You will not misuse or gain unauthorised access to our Services by
            knowingly introducing viruses, cross-site scripting, Trojan horses,
            worms, time-bombs, keystroke loggers, spyware, adware or any other
            harmful programs or similar computer code designed to adversely
            affect our Services and that in the event you do so or otherwise
            attack our Services, we reserve the right to report any such
            activity to the relevant law enforcement authorities and we will
            cooperate with those authorities as required.
          </Li>
          <Li>
            You won’t access without authority, interfere with, damage or
            disrupt any part of our Services, any equipment or network on which
            our Services is stored, any software used in the provision of our
            Services or any equipment or network or software owned or used by
            any third party.
          </Li>
          <Li>
            You won’t use our Services for activities that are unlawful or
            fraudulent or have such purpose or effect or otherwise support any
            activities that breach applicable local, national or international
            law or regulations.
          </Li>
          <Li>
            You won’t use our Services to store, trade or transmit Tokens that
            are proceeds of criminal or fraudulent activity.
          </Li>
          <Li>
            You understand that the Services and the underlying Ethereum
            Blockchain are in an early development stage and we accordingly do
            not guarantee an error-free process and give no price or liquidity
            guarantee.
          </Li>
          <Li>You are using the Services at your own risk.</Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>15. What if you breach this Agreement?</TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            You agree that you will be liable for any losses sustained by us as
            a result of your breach of this Agreement and will compensate us in
            full for any such losses.
          </Li>
          <Li>
            We reserve the right, at our own expense, to assume the exclusive
            defence and control of any matter otherwise subject to
            indemnification by you pursuant to paragraph 1 of this clause and,
            in such case, you agree to cooperate with us in the defence of such
            matter.
          </Li>
          <Li>
            The indemnity set out in this clause is in addition to, and not in
            lieu of, any other remedies that may be available to us under
            applicable law.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>16. What about our liability to you?</TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            Nothing in this Agreement shall limit or exclude our liability to
            you:
          </Li>
          <Ol style={{ listStyleType: 'decimal' }}>
            <Li>for death or personal injury caused by our negligence;</Li>
            <Li>for fraudulent misrepresentation; or</Li>
            <Li>
              for any other liability that, by law, may not be limited or
              excluded.
            </Li>
          </Ol>
          <Li>
            Subject to this, in no event shall we be liable to you for any
            losses, including any loss of Tokens or any indirect or
            consequential losses, or for any loss of profit, revenue, contracts,
            data, goodwill or other similar losses.
          </Li>
          <Li>
            Any liability we do have for losses you suffer arising from this
            Agreement per 16.1 must be strictly limited to losses that were
            reasonably foreseeable and shall not be in excess of the greater of
            (I) GBP 100 or (II) the amounts paid by you to us, if any, in
            connection with the Services in the 12 month period preceding this
            applicable claim.
          </Li>
          <Li>
            Where we are operating in conjunction with third parties and/or any
            other third party systems, we are not responsible for any loss as a
            result of such third party activity. If any Transaction is, as a
            result of your actions or those of a third party, mistakenly or
            fraudulently signed for using your Private Keys, we are not liable.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          17. What about viruses, bugs and security vulnerabilities?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            We do not guarantee that our Services will be secure or free from
            bugs, security vulnerabilities or viruses.
          </Li>
          <Li>
            You are responsible for configuring your information technology and
            computer programmes to access our Services and to use your own virus
            protection software.
          </Li>
          <Li>
            If you become aware of any exploits, bugs or vulnerabilities, please
            let us know at{' '}
            <Link href="mailto:safe@gnosis.io">safe@gnosis.io</Link> and{' '}
            <Link href="mailto:bounty@gnosis.io">bounty@gnosis.io</Link>.
          </Li>
          <Li>
            You must not misuse our Services by knowingly introducing material
            that is malicious or technologically harmful. If you do, your right
            to use our Services will cease immediately.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          18. Can you link to our Interfaces or Safe Mobile Apps?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            You may link to our Interfaces or Safe Mobile Apps, provided you do
            so in a way that is fair and legal and does not damage our
            reputation. You must not establish a link in such a way as to
            suggest any form of association, approval or endorsement on our part
            where none exists. You must not establish a link to our Services in
            any application that is not owned by or licensed to you.
          </Li>
          <Li>
            Our Interface or Safe Mobile Apps must not be framed on any other
            graphical user interface, nor may you create a link to any part of
            our graphical user interface other than the home page{' '}
            <Link href="https://gnosis-safe.io/">https://gnosis-safe.io/</Link>.
            We reserve the right to withdraw linking permission without notice.
          </Li>
          <Li>
            The graphical user interface or application in which you are linking
            must comply in all respects with the content standards set out in
            this Agreement. If you wish to link to or make any use of content on
            our Interface or Safe Mobile Apps other than that set out above,
            please contact{' '}
            <Link href="mailto:legal@gnosis.io">legal@gnosis.io</Link>.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          19. What if an event outside our control happens that affects our
          Services?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            We may update and change our Services from time to time. We may
            suspend or withdraw or restrict the availability of all or any part
            of our Services for business, operational or regulatory reasons or
            because of a Force Majeure Event at no notice.
          </Li>
          <Li>
            A “Force Majeure Event” shall mean any event, circumstance or cause
            beyond our reasonable control, which prevents, hinders or delays the
            provision of our Services or makes their provision impossible or
            onerous, including, without limitation:
          </Li>
          <Ol style={{ listStyleType: 'decimal' }}>
            <Li>
              acts of God, flood, storm, drought, earthquake or other natural
              disaster;
            </Li>
            <Li>
              epidemic or pandemic (for the avoidance of doubt, including the
              2020 Coronavirus Pandemic);
            </Li>
            <Li>
              terrorist attack, hacking or cyber threats, civil war, civil
              commotion or riots, war, threat of or preparation for war, armed
              conflict, imposition of sanctions, embargo, or breaking off of
              diplomatic relations;
            </Li>
            <Li>
              equipment or software malfunction or bugs including network splits
              or forks or unexpected changes in the Ethereum Blockchain, as well
              as hacks, phishing attacks, distributed denials of service or any
              other security attacks;
            </Li>
            <Li>nuclear, chemical or biological contamination;</Li>
            <Li>
              any law statutes, ordinances, rules, regulations, judgments,
              injunctions, orders and decrees or any action taken by a
              government or public authority, including without limitation
              imposing a prohibition, or failing to grant a necessary licence or
              consent;
            </Li>
            <Li>
              collapse of buildings, breakdown of plant or machinery, fire,
              explosion or accident; and
            </Li>
            <Li>strike, industrial action or lockout.</Li>
          </Ol>
          <Li>
            We shall not be liable or responsible to you, or be deemed to have
            defaulted under or breached this Agreement, for any failure or delay
            in the provision of the Services or the performance of this
            Agreement, if and to the extent such failure or delay is caused by
            or results from or is connected to acts beyond our reasonable
            control, including the occurrence of a Force Majeure Event.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          20. Who is responsible for your tax liabilities?
        </TitleSection>
        <Paragraph>
          You are solely responsible to determine if your use of the Services
          have tax implications for you. By using the Services you agree not to
          hold us liable for any tax liability associated with or arising from
          the operation of the Services or any other action or transaction
          related thereto.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>
          21. What if a court disagrees with part of this Agreement?
        </TitleSection>
        <Paragraph>
          Each of the paragraphs of this Agreement operates separately. If any
          court or relevant authority decides that any of them are unlawful, the
          remaining paragraphs will continue to be in full force and effect.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>
          22. What if we do not enforce certain rights under this Agreement?
        </TitleSection>
        <Paragraph>
          Our failure to exercise or enforce any right or remedy provided under
          this Agreement or by law shall not constitute a waiver of that or any
          other right or remedy, nor shall it prevent or restrict any further
          exercise of that or any other right or remedy.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>23. Do third parties have rights?</TitleSection>
        <Paragraph>
          Unless it expressly states otherwise, this Agreement does not give
          rise to any third party rights, which may be enforced against us.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>24. Can this Agreement be assigned?</TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            We may transfer our rights and obligations under this Agreement to
            any other party.
          </Li>
          <Li>
            You shall not be entitled to assign this Agreement to any third
            party without our express prior written consent.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          25. Which clauses of this Agreement survive termination?
        </TitleSection>
        <Paragraph>
          All covenants, agreements, representations and warranties made in this
          Agreement shall survive your acceptance of this Agreement and its
          termination.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>26. Which laws apply to this agreement?</TitleSection>
        <Paragraph>
          This Agreement is governed by and construed in accordance with
          Gibraltar law.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>
          27. How can you get support for the Gnosis Safe and tell us about any
          problems?
        </TitleSection>
        <Paragraph>
          If you want to learn more about the Gnosis Safe or the Service or have
          any problems using them or have any complaints please get in touch
          with us via any of the following channels:
        </Paragraph>
        <Ol>
          <Li>
            Email: <Link href="mailto:safe@gnosis.io">safe@gnosis.io</Link>
          </Li>
          <Li>
            Twitter:{' '}
            <Link href="https://twitter.com/gnosisSafe">
              https://twitter.com/gnosisSafe
            </Link>
          </Li>
          <Li>
            Github:{' '}
            <Link href="https://github.com/gnosis/">
              https://github.com/gnosis/
            </Link>
          </Li>
          <Li>
            Intercom:{' '}
            <Link href="https://gnosis-safe.io/app/#/">
              https://gnosis-safe.io/app/#/
            </Link>
          </Li>
          <Li>
            Discord:{' '}
            <Link href="https://discord.gg/5rjJxUT">
              https://discord.gg/5rjJxUT
            </Link>
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>
          28. How can we resolve disputes and where can you bring legal
          proceedings?
        </TitleSection>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>
            We will use our best efforts to resolve through informal, good faith
            negotiations any dispute, claim or controversy relating to this
            Agreement or relating to the breach, termination, enforcement,
            interpretation or validity thereof, including the determination of
            the scope or applicability of the arbitration agreement in clause
            28.4 (hereinafter “Dispute”).
          </Li>
          <Li>
            If a potential Dispute arises, you must contact us by sending an
            email to <Link href="mailto:legal@gnosis.io">legal@gnosis.io</Link>{' '}
            so that we can attempt to resolve it without resorting to formal
            dispute resolution.
          </Li>
          <Li>
            If we are not able to reach an informal resolution within 60 days of
            your email, then you and we may bring proceedings either in binding
            arbitration, if clause 28.4 applies to you, or in the courts of
            Gibraltar, if clause 28.4 does not apply to you.
          </Li>
          <Li>
            <RedMessage>
              IF YOU ARE RESIDING IN THE UNITED STATES OF AMERICA (“USA”), THIS
              CLAUSE 28.4 REQUIRES YOU TO ARBITRATE ALL DISPUTES WITH US AND
              LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM US.
            </RedMessage>
          </Li>
          <Ol style={{ listStyleType: 'decimal' }}>
            <Li>
              Binding arbitration. Any Dispute shall be referred to and finally
              determined by binding and confidential arbitration in accordance
              with the JAMS International Arbitration Rules (“JAMS Rules”),
              hereby incorporated by reference and available from JAMS’ website
              at <Link href="https://www.jamsadr.com/">/www.jamsadr.com/</Link>.
            </Li>
            <Li>
              Federal Arbitration Act. This Agreement affects interstate
              commerce and the enforceability of this clause 28.4 will be both
              substantively and procedurally governed by and construed and
              enforced in accordance with the United States Federal Arbitration
              Act, 9 U.S.C. §1 et seq. ( “FAA”), to the maximum extent permitted
              by applicable law.
            </Li>
            <Li>
              The Arbitral Process. The arbitral tribunal shall consist of a
              sole arbitrator. Only as limited by the FAA, this Agreement and
              the JAMS Rules, the arbitrator, and not any federal, state or
              local court or agency, shall have exclusive authority to resolve
              all Disputes and shall be empowered to grant whatever relief would
              be available in a court under law or in equity. The arbitrator’s
              award shall be in writing, and binding on the parties and may be
              entered as a judgment in any court of competent jurisdiction.
            </Li>
            <Li>
              Seat. The seat, or place of, of arbitration will be New York. The
              language to be used in the arbitration proceedings shall be
              English. You agree to submit to the personal jurisdiction of any
              federal or state court in New York County, New York, in order to
              compel arbitration, to stay proceedings pending arbitration, or to
              confirm, modify, vacate or enter judgment on the award entered by
              the arbitrator. This clause 28.4 shall not preclude parties from
              seeking provisional remedies in aid of arbitration from a court of
              applicable jurisdiction.
            </Li>
            <Li>
              Class Action Waiver. You and we agree that any arbitration shall
              be conducted in individual capacity only and not as a class action
              or other representative action, and you and we expressly waive the
              right to file a class action or seek relief on a class basis.
              <RedMessage>
                YOU AND WE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER
                ONLY IN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS
                MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
              </RedMessage>
              If any court, arbitrator or arbitral tribunal determines that the
              class action waiver set forth in this paragraph is void or
              unenforceable for any reason or that an arbitration can proceed on
              a class basis, then the arbitration provision set forth above
              shall be deemed null and void in its entirety and the parties
              shall be deemed to have NOT agreed to arbitrate disputes.
            </Li>
            <Li>
              Exception: Litigation of IP and Small Claims Court Claims.
              Notwithstanding the parties’ decision to resolve all disputes
              through arbitration, either party may bring an action in any
              applicable court to protect its intellectual property rights
              (“intellectual property rights” means patents, copyrights, moral
              rights, trademarks, and trade secrets, but not privacy or
              publicity rights). Either party may also seek relief in a small
              claims court for disputes or claims within the scope of that
              court’s jurisdiction.
            </Li>
            <Li>
              Right to Opt-out. You have the right to opt-out and not be bound
              by the arbitration and class action waiver provisions set forth
              above by sending written notice of your decision to opt-out via
              email to legal@gnosis.pm. The notice must be sent within 30 days
              of April 23, 2020 or your first use of our Services, whichever is
              later, otherwise you shall be bound to arbitrate disputes in
              accordance with the terms of those paragraphs. If you opt-out of
              these arbitration provisions, we also will not be bound by them.
            </Li>
            <Li>
              Changes. We will provide 60-days’ notice of any changes to this
              clause
            </Li>
            <Li>
              Changes will become effective on the 60th day, and will apply
              prospectively only to any claims arising after the 60th day.
            </Li>
            <Li>
              Fair Representation. The parties agree that, wherever practicable,
              they will seek to appoint a fair representation of diverse
              arbitrators (considering gender, ethnicity and sexual
              orientation), and will request administering institutions to
              include a fair representation of diverse candidates on their
              rosters and list of potential arbitrator appointees.
            </Li>
          </Ol>
          <Li>
            You and we agree that the Courts of Gibraltar shall have exclusive
            jurisdiction to settle any Dispute that is not subject to
            arbitration under clause 28.4 and that any Dispute must be resolved
            in accordance with Gibraltar law without regard to its conflict of
            law provisions. You and we further agree that any Dispute is
            personal to you and us and shall be resolved solely through
            individual action, and will not be brought as a representative
            action, group litigation order or any other type of class or
            collective action proceeding.
          </Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>29. Is this all?</TitleSection>
        <Paragraph>
          This Agreement constitutes the entire agreement between you and us in
          relation to the Agreement’s subject matter. It replaces and
          extinguishes any and all prior agreements, draft agreements,
          arrangements, warranties, statements, assurances, representations and
          undertakings of any nature made by, or on behalf of either of us,
          whether oral or written, public or private, in relation to that
          subject matter.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          Gnosis Limited
          <br />
          World Trade Center
          <br />
          6 Bayside Rd
          <br />
          GIBRALTAR
          <br />
          GX11 1AA
        </Paragraph>
      </Section>
    </ContentWrapper>
  </Layout>
)

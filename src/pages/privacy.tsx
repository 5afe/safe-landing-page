import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import {
  ContentWrapper,
  Title,
  Date,
  Section,
  TitleSection,
  TitleSubSection,
  Link,
  Paragraph,
  RedMessage,
  Ol,
  Li,
  B,
} from '../styles/legalPagesStyles'

const Tr = styled.span`
  display: flex;
  padding: 10px 0;
`

const Td1 = styled.span`
  width: 110px;
`

const Td2 = styled.span`
  overflow-wrap: break-word;
  padding: 0 20px;
  width: 200px;
`

const Td3 = styled.span`
  width: 60%;
  flex: 1;
`

export default () => (
  <Layout title="Privacy Policy">
    <ContentWrapper>
      <Title>Privacy Policy</Title>
      <Date>Last updated on July 22, 2020</Date>
      <Section>
        <Paragraph>
          We are delighted that you have chosen to use our App or visit our
          website. We take our data protection responsibilities with the utmost
          seriousness and we have designed our website so that you may navigate
          and use our website without having to provide Personal Data.
        </Paragraph>
        <Paragraph>
          This Policy sets out what Personal Data we collect, how we process it
          and how long we retain it. This Policy applies to all of our
          processing activities where we act as a data controller.
        </Paragraph>
        <Paragraph>
          In this policy, "we", "us" and "our" refers to Gnosis Limited a
          company incorporated in Gibraltar with its registered address at World
          Trade Center, 6 Bayside Rd, Gibraltar.
        </Paragraph>
        <Paragraph>
          For more information about us, see the Contact Us section of this
          policy.
        </Paragraph>
        <Paragraph>
          In this Policy, “personal data” means any information relating to you
          as an identified or identifiable natural person (“Data Subject”); an
          identifiable natural person is one who can be identified, directly or
          indirectly, in particular by reference to an identifier such as a
          name, an online identifier or to one or more factors specific to your
          physical, physiological, genetic, mental, economic, cultural or social
          identity.
        </Paragraph>
        <Paragraph>
          In this Policy, “processing” means any operation or set of operations
          which is performed on personal data (as defined in this Privacy
          Policy) or on sets of personal data, whether or not by automated
          means, such as collection, recording, organisation, structuring,
          storage, adaptation or alteration, retrieval, consultation, use,
          disclosure by transmission, dissemination or otherwise making
          available, alignment or combination, restriction, erasure or
          destruction.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>1. Navigating this Policy</TitleSection>
        <Paragraph>
          If you are viewing this policy online, you can click on the below
          links to jump to the relevant section:
        </Paragraph>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>Your information and the Blockchain</Li>
          <Li>How We Use Personal Data</Li>
          <Li>Use of Third Party Applications</Li>
          <Li>Sharing Your Personal Data</Li>
          <Li>Transferring Your data outside of the EU</Li>
          <Li>Existence of Automated Decision-making</Li>
          <Li>Data Security</Li>
          <Li>Your Rights as a Data Subject</Li>
          <Li>Storing Personal Data</Li>
          <Li>Changes to this Privacy Policy</Li>
          <Li>Our details</Li>
        </Ol>
      </Section>
      <Section>
        <TitleSection>2. Your information and the Blockchain</TitleSection>
        <Paragraph>
          Blockchain technology, also known as distributed ledger technology (or
          simply ‘DLT’), is at the core of our business. Blockchains are
          decentralized and made up of digitally recorded data in a chain of
          packages called ‘blocks’. The manner in which these blocks are linked
          is chronological, meaning that the data is very difficult to alter
          once recorded. Since the ledger may be distributed all over the world
          (across several ‘nodes’ which usually replicate the ledger) this means
          there is no single person making decisions or otherwise administering
          the system (such as an operator of a cloud computing system), and that
          there is no centralized place where it is located either.
        </Paragraph>
        <Paragraph>
          Accordingly, by design, a blockchains records cannot be changed or
          deleted and is said to be ‘immutable’. This may affect your ability to
          exercise your rights such as your right to erasure (‘right to be
          forgotten’), or your rights to object or restrict processing, of your
          personal data. Data on the blockchain cannot be erased and cannot be
          changed. Although smart contracts may be used to revoke certain access
          rights, and some content may be made invisible to others, it is not
          deleted.
        </Paragraph>
        <Paragraph>
          In certain circumstances, in order to comply with our contractual
          obligations to you (such as delivery of tokens) it will be necessary
          to write certain personal data, such as your Ethereum or other
          cryptocurrency wallet address, onto the blockchain; this is done
          through a smart contract and requires you to execute such transactions
          using your wallet’s private key.
        </Paragraph>
        <Paragraph>
          In most cases ultimate decisions to (i) transact on the blockchain
          using your Ethereum or other cryptocurrency wallet address, as well as
          (ii) share the public key relating to your Ethereum or other
          cryptocurrency wallet address with anyone (including us) rests with
          you.
        </Paragraph>
      </Section>
      <Section>
        <RedMessage>
          IF YOU WANT TO ENSURE YOUR PRIVACY RIGHTS ARE NOT AFFECTED IN ANY WAY,
          YOU SHOULD NOT TRANSACT ON BLOCKCHAINS AS CERTAIN RIGHTS MAY NOT BE
          FULLY AVAILABLE OR EXERCISABLE BY YOU OR US DUE TO THE TECHNOLOGICAL
          INFRASTRUCTURE OF THE BLOCKCHAIN. IN PARTICULAR THE BLOCKCHAIN IS
          AVAILABLE TO THE PUBLIC AND ANY PERSONAL DATA SHARED ON THE BLOCKCHAIN
          WILL BECOME PUBLICLY AVAILABLE
        </RedMessage>
      </Section>
      <Section>
        <TitleSection>3. How We Use Personal Data</TitleSection>
        <TitleSubSection>3.1. When visiting our website</TitleSubSection>
        <Paragraph>
          We may collect and process Personal Data about your use of our
          website. This data may include:
        </Paragraph>
        <Ol style={{ listStyleType: 'lower-roman' }}>
          <Li>the browser types and versions used;</Li>
          <Li>the operating system used by the accessing system;</Li>
          <Li>
            the website from which an accessing system reaches our website
            (so-called referrers);
          </Li>
          <Li>behaviour: subpage, duration, and revisit</Li>
          <Li>the date and time of access to our website,</Li>
          <Li>the Internet protocol address (“IP address”);</Li>
          <Li>the Internet service provider of the accessing system; and</Li>
          <Li>
            any other similar data and information that may be used in the event
            of attacks on our information technology systems.
          </Li>
        </Ol>
        <Paragraph>
          This data may be processed in order to deliver the content of our
          website correctly, to optimize the content of our website to ensure
          the long-term viability of our information technology systems and
          website technology, and to provide law enforcement authorities with
          the information necessary for criminal prosecution in case of a
          cyber-attack.
        </Paragraph>
        <Paragraph>
          The legal basis for this processing is our legitimate business
          interests, namely monitoring and improving our website and the proper
          protection of our business against risks and your consent when
          agreeing to accept cookies
        </Paragraph>

        <TitleSubSection>
          3.2. When using the Safe App, the Safe for teams edition or the
          browser extension
        </TitleSubSection>
        <Paragraph>
          When using the Safe App, the Safe for teams or the browser extension
          we may collect and process personal data. The data will be stored in
          different instances.
        </Paragraph>

        <Ol style={{ listStyleType: 'lower-latin' }}>
          <Li>
            <Paragraph>
              On the Ethereum blockchain following data will be stored:
            </Paragraph>
            <Ol style={{ listStyleType: 'lower-roman' }}>
              <Li>your smart contract address of the Safe;</Li>
              <Li>addresses of externally owned accounts</Li>
              <Li>transaction made with the safe; and</Li>
              <Li>ETH and token balance.</Li>
            </Ol>
            <Paragraph>
              The data is needed to create the user’s safe and enable the user
              to make use of the app. The Gnosis Safe is a multi-signature
              wallet. Thus, the externally owned accounts are needed to confirm
              a transaction before they are executed.
            </Paragraph>
            <Paragraph>
              The legal basis for this processing is that it is necessary to
              fulfil a contract with you.
            </Paragraph>
            <RedMessage>
              The data will be stored on the Ethereum Blockchain. Given the
              technological design of the blockchain, as explained in section 2,
              this data will become public and it will not likely be possible to
              delete or change the data at any given time.
            </RedMessage>
          </Li>

          <Li>
            <Paragraph>
              In our Amazon Webserver we will store the following data:
            </Paragraph>
            <Ol style={{ listStyleType: 'lower-roman' }}>
              <Li>your smart contract address of the Safe address;</Li>
              <Li>addresses of externally owned accounts; and</Li>
              <Li>transaction made with the safe.</Li>
            </Ol>
            <Paragraph>
              The legal basis for this processing is that it is necessary to
              fulfil a contract with you.
            </Paragraph>
          </Li>
          <Li>
            <Paragraph>Log Data</Paragraph>
            <Ol style={{ listStyleType: 'lower-roman' }}>
              <Li>your smart contract address of the Safe address;</Li>
              <Li>the Internet protocol address (“IP address”); and</Li>
              <Li>transaction id/ Hash.</Li>
            </Ol>
            <Paragraph>
              We need this data to be able to debug issues and provide support
              for our application. The legal basis for this processing is that
              it is necessary to fulfil a contract with you.
            </Paragraph>
          </Li>
        </Ol>
        <TitleSubSection>
          3.3. When Participating in User Experience Research (UXR)
        </TitleSubSection>
        <Paragraph>
          When you participate in our user experience research we may collect
          and process some personal data. This data may include:
        </Paragraph>
        <Ol style={{ listStyleType: 'lower-roman' }}>
          <Li>your name</Li>
          <Li>your email</Li>
          <Li>your phone type</Li>
          <Li>your occupation</Li>
          <Li>range of managed funds</Li>
        </Ol>
        <Paragraph>
          In addition, we may take a recording of you while testing the Safe for
          internal and external use. The basis for this collection and
          processing is our legitimate business interest in monitoring and
          improving our services.
        </Paragraph>
        <Paragraph>
          The legal basis for this processing is your consent as provided before
          participating in user experience research.
        </Paragraph>
        <TitleSubSection>
          3.4 When registering for the email notification service
        </TitleSubSection>
        <Paragraph>
          We may collect and process Personal Data that you provide to us for
          the purpose of subscribing to our email notification service. This
          data may include:
        </Paragraph>
        <Ol style={{ listStyleType: 'lower-roman' }}>
          <Li>your email address;</Li>
          <Li>the date and time of registration;</Li>
          <Li>your IP address.</Li>
        </Ol>
        <Paragraph>
          This data is collected and processed for the purpose of sending you
          XXXX.
        </Paragraph>
        <Paragraph>
          The legal basis for this processing is your consent as provided in the
          double opt-in confirmation part of our sign-up process. Your email
          address will be stored as long we have the consent to send you a
          notification email.
        </Paragraph>
        <TitleSubSection>
          3.5 When receiving the email notification
        </TitleSubSection>
        <Paragraph>
          If you have subscribed to our email notification service, each time
          you receive a email notification from us, we may collect and process
          Personal Data. This data may include:
        </Paragraph>
        <Ol style={{ listStyleType: 'lower-roman' }}>
          <Li>the date and time you opened the email;</Li>
          <Li>what (if any) links or URLs you accessed from our newsletter;</Li>
          <Li>the location it was accessed from.</Li>
        </Ol>
        <Paragraph>
          This data is collected and processed for the purpose of improving the
          content of our email notification service.
        </Paragraph>
        <Paragraph>
          The legal basis for this processing is your consent as provided in the
          double opt-in confirmation part of our sign-up process.
        </Paragraph>
        <TitleSubSection>3.6 Other uses of your Personal Data</TitleSubSection>
        <Paragraph>
          We may process any of your Personal Data where it is necessary to
          establish, exercise, or defend legal claims. The legal basis for this
          processing is our legitimate interests, namely the protection and
          assertion of our legal rights, your legal rights and the legal rights
          of others.
        </Paragraph>
        <Paragraph>
          Further, we may process your Personal data where such processing is
          necessary in order for us to comply with a legal obligation to which
          we are subject. The legal basis for this processing is our legitimate
          interests, namely the protection and assertion of our legal rights.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>4. Use of Third Party Applications</TitleSection>
        <TitleSubSection>4.1. Ethereum Blockchain</TitleSubSection>
        <Paragraph>
          When using the Gnosis Safe your smart contract address, the
          transactions made with the Safe, addresses of externally owned
          accounts and ETH balances and token balances will be stored on the
          Ethereum blockchain. See section 2 of this Policy
        </Paragraph>
        <RedMessage>
          The information will be displayed permanently and public, this is part
          of the nature of the blockchain.
          <br />
          If you are new to this field, we highly recommend informing yourself
          about the blockchain technology before using our services.
        </RedMessage>
        <TitleSubSection>4.2. Amazon Webserver</TitleSubSection>
        <Paragraph>
          We use the Amazon Web Server (AWS) to store log and database data as
          described in section 3.2
        </Paragraph>
        <Paragraph>
          For further information and the applicable data protection provisions
          of AWS please visit{' '}
          <Link href="https://aws.amazon.com/privacy/?nc1=f_pr">
            https://aws.amazon.com/privacy/?nc1=f_pr
          </Link>
        </Paragraph>
        <TitleSubSection>
          4.3. Appstore /Playstore/Chrome Webstore
        </TitleSubSection>
        <Paragraph>
          Apple and Google most likely track user behavior when downloading apps
          from their stores as well as when using apps. We (Gnosis) only have
          very limited access to that data. We can view aggregated statistics on
          installs and uninstalls. Grouping by device type, app version,
          language, carrier and country is possible.
        </Paragraph>
        <Paragraph>
          <Link href="https://www.apple.com/legal/privacy/en-ww/">
            https://www.apple.com/legal/privacy/en-ww/
          </Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://policies.google.com/privacy">
            https://policies.google.com/privacy
          </Link>
        </Paragraph>
        <TitleSubSection>4.4. Fingerprint/Touch ID/ Face ID</TitleSubSection>
        <Paragraph>
          We enable the user to unlock the Safe mobile app via fingerprint/
          touch ID (Android and iOS) and Face ID (iPhone X). This is a feature
          of the operating system. We do not store any of this data. Instead, a
          proprietary API of the operating system is used to validate the user
          input. If you have any further questions regarding fingerprint/ touch
          ID/ face ID you should consult with your preferred mobile device
          provider or manufacturer.
        </Paragraph>
        <TitleSubSection>4.5. Firebase</TitleSubSection>
        <Paragraph>
          We use Firebase in order to be able to create reports and user funnels
          to understand possible issues of our app that might impair user
          experience. We also need the to access this information to track the
          success of our product. The Data is collected and stored by Firebase.
        </Paragraph>
        <Paragraph>
          The total data collected by firebase is compiled under the following
          link:
        </Paragraph>
        <Paragraph>
          <Link href="https://support.google.com/firebase/answer/6317486?hl=en">
            https://support.google.com/firebase/answer/6317486?hl=en
          </Link>
        </Paragraph>
        <Paragraph>
          Additionally, we enabled the following firebase products
        </Paragraph>
        <Paragraph>
          <Tr>
            <Td1>
              <B>
                Firebase
                <br />
                Service
              </B>
            </Td1>
            <Td2>
              <B>Personal data</B>
            </Td2>
            <Td3>
              <B>How the data helps to provide the service</B>
            </Td3>
          </Tr>
          <Tr>
            <Td1>
              <B>
                Firebase
                <br />
                Crash
                <br />
                Reporting
              </B>
            </Td1>
            <Td2>
              Intance IDs
              <br />
              Crash traces
            </Td2>
            <Td3>
              How it helps: Crash Reporting uses crash stack traces to associate
              crashes with a project, send email alerts to project members and
              display them in the Firebase Console, and help Firebase customers
              debug crashes. It uses Instance IDs to measure number of users
              impacted by a crash. Retention: Crash Reporting retains crash
              stack traces for 180days. Firebase retains Instance IDs until the
              Firebase customer makes an API call to delete the ID. After the
              call, data is removed from live and backup systems within 180days.
            </Td3>
          </Tr>
          <Tr>
            <Td1>
              <B>Firebase Cloud Messaging</B>
            </Td1>
            <Td2>Instance IDs</Td2>
            <Td3>
              How it helps: Firebase Cloud Messaging uses Instance IDs to
              determine which devices to deliver messages to. Retention:
              Firebase retains Instance IDs until the Firebase customer makes an
              API call to delete the ID. After the call, data is removed from
              live and backup systems within 180days.
            </Td3>
          </Tr>
          <Tr>
            <Td1>
              <B>Google Analytics for Firebase</B>
            </Td1>
            <Td2>
              Mobile ad IDs
              <br />
              IDFVs/Android IDs
              <br />
              Intance IDs
              <br />
              Analytics App
              <br />
              Instance IDs
              <br />
              <Link href="https://support.google.com/firebase/answer/6318039">
                https://support.google.com/firebase/answer/6318039
              </Link>
            </Td2>
            <Td3>
              How it helps: Google Analytics uses the data to provide analytics
              and attribution information. The precise information collected can
              vary by the device and environment. For more information see Data
              collection. Retention: Google Analytics retains ID-associated data
              for 60 days, and retains aggregate reporting and campaign data
              without automatic expiration, unless the Firebase customer changes
              their retention preference in their Analytics settings or deletes
              their project.
            </Td3>
          </Tr>
          <Tr>
            <Td1>
              <B>Firebase Remote Config</B>
            </Td1>
            <Td2>Intance IDs</Td2>
            <Td3>
              How it helps: Remote Config uses Instance IDs to select
              configuration values to return to end-user devices. Retention:
              Firebase retains Instance IDs until the Firebase customer makes an
              API call to delete the ID. After the call, data is removed from
              live and backup systems within 180days.
            </Td3>
          </Tr>
        </Paragraph>
        <Paragraph>
          For further information and the applicable data protection provisions
          of Firebase please visit{' '}
          <Link href="https://firebase.google.com/support/privacy/">
            https://firebase.google.com/support/privacy/
          </Link>
          .
        </Paragraph>
        <TitleSubSection>4.6. Fabric.io</TitleSubSection>
        <Paragraph>
          In order to be able to notice, debug and fix bugs/crashes of the
          Gnosis Safe app which might impair user experience we use fabric.
        </Paragraph>
        <Paragraph>
          For further information and the applicable data protection provisions
          of fabric please visit
        </Paragraph>
        <Paragraph>
          <Link href="https://get.fabric.io/">https://get.fabric.io/</Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://fabric.io/kits/ios/crashlytics">
            https://fabric.io/kits/ios/crashlytics
          </Link>
        </Paragraph>
        <Paragraph>
          In particular we use Crashlytics to monitor the performance of any
          male function of the app. The Services automatically may collect
          certain information that does not personally identify users who access
          or use mobile applications that use the Crashlytics. This information
          includes, but is not limited to, the user’s Safe wallet address,
          device state information, unique device identifiers, device hardware
          and OS information, information relating to how an application
          functions, and the physical location of a device at the time of a
          crash.
        </Paragraph>
        <Paragraph>
          For further information and the applicable data protection provisions
          of fabric please visit
        </Paragraph>
        <Paragraph>
          <Link href="https://fabric.io/terms">https://fabric.io/terms</Link>
        </Paragraph>
        <TitleSubSection>4.7. Transmitting Social Media Links</TitleSubSection>
        <Paragraph>
          At the end of our website we link to our social media profiles. Those
          services might also collect Personal Data. Please refer to their
          privacy policies for more information.
        </Paragraph>
        <Paragraph>
          Facebook:{' '}
          <Link href="https://www.facebook.com/policy.php">
            https://www.facebook.com/policy.php
          </Link>
          <br />
          Twitter:{' '}
          <Link href="https://twitter.com/de/privacy">
            https://twitter.com/de/privacy
          </Link>
          <br />
          Reddit:{' '}
          <Link href="https://www.redditinc.com/policies/privacy-policy">
            https://www.redditinc.com/policies/privacy-policy
          </Link>
          <br />
          Medium:{' '}
          <Link href="https://medium.com/policy/medium-privacy-policy-f03bf92035c9">
            https://medium.com/policy/medium-privacy-policy-f03bf92035c9
          </Link>
        </Paragraph>
        <TitleSubSection>4.8 Telegram</TitleSubSection>
        <Paragraph>
          In order to provide user support we created a group on Telegram (
          <Link href="https://telegram.org/">https://telegram.org</Link>) to
          facilitate the resolution of any questions and concerns should these
          arise.
        </Paragraph>
        <Paragraph>
          By accepting this Privacy Policy, you are deemed to consent to
          providing the following Personal Data to persons looking to resolve
          any dispute:
        </Paragraph>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>Name and surname;</Li>
          <Li>Used wallet address;</Li>
          <Li>Detailed enquiry description;</Li>
          <Li>The date and time that the issue arose;</Li>
          <Li>The outcome sought.</Li>
        </Ol>
        <Paragraph>
          Please note that Telegram may use and/or collect your Personal Data.
          Thus, we recommend to view Telegram’s Privacy Policy at the following
          link:{' '}
          <Link href="https://telegram.org/privacy">
            https://telegram.org/privacy
          </Link>
          , on a periodical basis.
        </Paragraph>
        <TitleSubSection>4.9 Gitter</TitleSubSection>
        <Paragraph>
          In order to provide user support we created a group on Gitter (
          <Link href="https://gitter.im/">https://gitter.im</Link>) to
          facilitate the resolution of any questions and concerns should these
          arise.
        </Paragraph>
        <Paragraph>
          By accepting this Privacy Policy, you are deemed to consent to
          providing the following Personal Data to persons looking to resolve
          any dispute:
        </Paragraph>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>Name and surname;</Li>
          <Li>Used wallet address;</Li>
          <Li>Detailed enquiry description;</Li>
          <Li>The date and time that the issue arose;</Li>
          <Li>The outcome sought.</Li>
        </Ol>
        <Paragraph>
          Gitter is owned and operated by GitLab (
          <Link href="https://gitlab.com/">https://gitlab.com</Link>). Please
          note that GitLab may use and/or collect your Personal Data. Thus, we
          recommend to view GitLab’s Privacy Policy at the following link:{' '}
          <Link href="https://about.gitlab.com/privacy/">
            https://about.gitlab.com/privacy/
          </Link>
          , on a periodical basis.
        </Paragraph>
        <TitleSubSection>4.10 Mailchimp</TitleSubSection>
        <Paragraph>
          We use Mailchimp (
          <Link href="https://mailchimp.com/">https://mailchimp.com/</Link>) for
          our email notification service to subscribers. Mailchimp allows us to
          prepare customized Emails and manage our subscribers.
        </Paragraph>
        <Paragraph>
          We do not store any information collected by Mailchimp. Mailchimp’s
          privacy policy is available at{' '}
          <Link href="https://mailchimp.com/legal/privacy">
            https://mailchimp.com/legal/privacy
          </Link>
          .
        </Paragraph>
        <Paragraph>
          Mailchimp’s purpose and function is further explained under the
          following link:{' '}
          <Link href="https://mailchimp.com/">https://mailchimp.com/</Link>
        </Paragraph>
        <TitleSubSection>4.11 Conflux</TitleSubSection>
        <Paragraph>
          We are collecting user feedback via{' '}
          <Link href="https://getconflux.com/">https://getconflux.com/</Link>
        </Paragraph>
        <Paragraph>
          We do not collect or store any personal data collected via Conflux.
          Conflux’s privacy policy is available at{' '}
          <Link href="https://getconflux.com/privacy-policy">
            https://getconflux.com/privacy-policy
          </Link>
          .
        </Paragraph>
        <TitleSubSection>4.12 Dovetail</TitleSubSection>
        <Paragraph>
          We are using Dovetail (
          <Link href="https://dovetailapp.com/">https://dovetailapp.com/</Link>)
          for collecting user research notes.
        </Paragraph>
        <Paragraph>
          We do not store any information collected by Dovetail. Dovetail’s
          privacy policy is available at{' '}
          <Link href="https://dovetailapp.com/security/">
            https://dovetailapp.com/security/
          </Link>{' '}
          <span> .</span>
        </Paragraph>
        <Paragraph>
          Dovetail’s purpose and function is further explained under the
          following link:{' '}
          <Link href="https://dovetailapp.com/">https://dovetailapp.com/</Link>
        </Paragraph>
        <TitleSubSection>4.13 Intercom</TitleSubSection>
        <Paragraph>
          We are using Intercom (
          <Link href="https://www.intercom.com/">
            https://www.intercom.com/
          </Link>
          ) for instant customer chat services.
        </Paragraph>
        <Paragraph>
          Intercom’s purpose and function is further explained under the
          following link{' '}
          <Link href="https://www.intercom.com/what-is-intercom">
            https://www.intercom.com/what-is-intercom
          </Link>
          .
        </Paragraph>
        <Paragraph>
          We do not store any information collected by Intercom, Intercom’s
          privacy policy is available at{' '}
          <Link href="https://www.intercom.com/legal/privacy">
            https://www.intercom.com/legal/privacy
          </Link>
          .
        </Paragraph>
        <TitleSubSection>4.14 Onboard.js</TitleSubSection>
        <Paragraph>
          We are using Onboard.js{' '}
          <Link href="https://www.blocknative.com/onboard">
            (https://www.blocknative.com/onboard)
          </Link>{' '}
          to help users get from no wallet to their first transaction.
        </Paragraph>
        <Paragraph>
          We do not store any information collected by them. Onboard’s privacy
          policy is available at{' '}
          <Link href="https://www.blocknative.com/privacy-policy.">
            https://www.blocknative.com/privacy-policy.
          </Link>
        </Paragraph>
        <TitleSubSection>4.15 WalletConnect</TitleSubSection>
        <Paragraph>
          We are using WalletConnect for connecting desktop Dapps to mobile
          Wallets using end-to-end encryption by scanning a QR code.
        </Paragraph>
        <Paragraph>
          We do not store any information collected by WalletConnect.
          WalletConnect does not collect or process any type of personal data.
        </Paragraph>
        <TitleSubSection>4.16 Discord</TitleSubSection>
        <Paragraph>
          In order to provide user support we created a group on Discord{' '}
          <Link href="https://discord.com/new">(https://discord.com/new)</Link>{' '}
          to facilitate the resolution of any questions and concerns should
          these arise.
        </Paragraph>
        <Paragraph>
          By accepting this Privacy Policy, you are deemed to consent to
          providing the following Personal Data to persons looking to resolve
          any dispute:
        </Paragraph>
        <Ol style={{ listStyleType: 'decimal' }}>
          <Li>Used wallet address;</Li>
          <Li>Detailed enquiry description;</Li>
          <Li>The date and time that the issue arose;</Li>
          <Li>The outcome sought.</Li>
        </Ol>
        <Paragraph>
          Please note that Discord may use and/or collect your Personal Data.
          Thus, we recommend to view Discord’s Privacy Policy at the following
          link:{' '}
          <Link href="https://discord.com/new/privacy">
            https://discord.com/new/privacy
          </Link>
          , on a periodical basis.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>5. Sharing Your Personal Data</TitleSection>
        <Paragraph>
          We may pass your information to our Business Partners, administration
          centres, third party service providers, agents, subcontractors and
          other associated organisations for the purposes of completing tasks
          and providing our services to you.
        </Paragraph>
        <Paragraph>
          In addition, when we use any other third-party service providers, we
          will disclose only the personal information that is necessary to
          deliver the service required and we will ensure, that they keep your
          information secure and not to use it for their own direct marketing
          purposes. In addition, we may transfer your personal information to a
          third party as part of a sale of some, or all, of our business and
          assets or as part of any business restructuring or reorganisation, or
          if we are under a duty to disclose or share your personal data in
          order to comply with any legal obligation. However, we will take steps
          to ensure that your privacy rights continue to be protected.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>6. Transferring Your data outside of the EU</TitleSection>
        <Paragraph>
          The data mentioned in section 3.2b) and c) will the stored in our
          Amazon Web Server, which is based in the US. Amazon is certified under
          the EU- US Privacy Shield. Fabric.io and Firebase are part of the
          Google LLC., which is based in the US. Google is certified under the
          EU-US Privacy Shield
        </Paragraph>
        <Paragraph>
          Intercom is based in the USA, however has self-certified to the
          EU-U.S. and Swiss-U.S. Privacy Shield.
        </Paragraph>
        <Paragraph>
          Onboard is based in the USA, as per their{' '}
          <Link href="https://www.blocknative.com/privacy-policy">
            Privacy Policy
          </Link>
          , they are in compliance with the EU-US Privacy Shield (Swiss-US
          Privacy Shield).
        </Paragraph>
        <RedMessage>
          However, when interacting with the blockchain, as explained above in
          this Policy, the blockchain is a global decentralized public network
          and accordingly any personal data written onto the blockchain may be
          transferred and stored across the globe.
        </RedMessage>
      </Section>
      <Section>
        <TitleSection>7. Existence of Automated Decision-making</TitleSection>
        <Paragraph>
          We do not use automatic decision-making or profiling when processing
          Personal Data.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>8. Data Security</TitleSection>
        <Paragraph>
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used or accessed in an
          unauthorised way, altered or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors and
          other third parties who have a business need to know. They will only
          process your personal data on our instructions and they are subject to
          a duty of confidentiality.
        </Paragraph>
        <Paragraph>
          We have put in place procedures to deal with any suspected personal
          data breach and will notify you and any applicable regulator of a
          breach where we are legally required to do so.
        </Paragraph>
      </Section>
      <TitleSection>9. Your Rights as a Data Subject</TitleSection>
      <Paragraph>
        You have certain rights under applicable legislation, and in particular
        under Regulation EU 2016/679 (General Data Protection Regulation or
        ‘GDPR’). We explain these below. You can find out more about the GDPR
        and your rights by accessing the{' '}
        <Link href="https://ec.europa.eu/info/law/law-topic/data-protection_en">
          European Commission’s website
        </Link>
        .
      </Paragraph>
      <TitleSubSection>Right Information and access</TitleSubSection>
      <Paragraph>
        You have a right to be informed about the processing of your personal
        data (and if you did not give it to us, information as to the source)
        and this Privacy Policy intends to provide the information. Of course,
        if you have any further questions you can contact us on the above
        details.
      </Paragraph>
      <TitleSubSection>Right to rectification</TitleSubSection>
      <Paragraph>
        You have the right to have any inaccurate personal information about you
        rectified and to have any incomplete personal information about you
        completed. You may also request that we restrict the processing of that
        information. The accuracy of your information is important to us. If you
        do not want us to use your Personal Information in the manner set out in
        this Privacy Policy, or need to advise us of any changes to your
        personal information, or would like any more information about the way
        in which we collect and use your Personal Information, please contact us
        at the above details.
      </Paragraph>
      <TitleSubSection>
        Right to erasure (right to be ‘forgotten’)
      </TitleSubSection>
      <Paragraph>
        You have the general right to request the erasure of your personal
        information in the following circumstances:
      </Paragraph>
      <ol style={{ listStyleType: 'circle' }}>
        <Li>
          the personal information is no longer necessary for the purpose for
          which it was collected;
        </Li>
        <Li>
          you withdraw your consent to consent based processing and no other
          legal justification for processing applies;
        </Li>
        <Li>you object to processing for direct marketing purposes;</Li>
        <Li>we unlawfully processed your personal information; and</Li>
        <Li>
          erasure is required to comply with a legal obligation that applies to
          us.
        </Li>
      </ol>
      <RedMessage>
        However, when interacting with the blockchain we may not be able to
        ensure that your personal data is deleted. This is because the
        blockchain is a public decentralized network and blockchain technology
        does not generally allow for data to be deleted and your right to
        erasure may not be able to be fully enforced. In these circumstances we
        will only be able to ensure that all personal data that is held by us is
        permanently deleted.
      </RedMessage>
      <Paragraph>
        We will proceed to comply with an erasure request without delay unless
        continued retention is necessary for:
      </Paragraph>
      <Ol style={{ listStyleType: 'circle' }}>
        <Li>Exercising the right of freedom of expression and information;</Li>
        <Li>
          Complying with a legal obligation under EU or other applicable law;
        </Li>
        <Li>The performance of a task carried out in the public interest;</Li>
        <Li>
          Archiving purposes in the public interest, scientific or historical
          research purposes, or statistical purposes, under certain
          circumstances; and/or
        </Li>
        <Li>The establishment, exercise, or defence of legal claims.</Li>
      </Ol>
      <TitleSubSection>
        Right to restrict processing and right to object to processing
      </TitleSubSection>
      <Paragraph>
        You have a right to restrict processing of your personal information,
        such as where:
      </Paragraph>
      <Ol style={{ listStyleType: 'circle' }}>
        <Li>you contest the accuracy of the personal information;</Li>
        <Li>
          where processing is unlawful you may request, instead of requesting
          erasure, that we restrict the use of the unlawfully processed personal
          information;
        </Li>
        <Li>
          we no longer need to process your personal information but need to
          retain your information for the establishment, exercise, or defence of
          legal claims.
        </Li>
      </Ol>
      <Paragraph>
        You also have the right to object to processing of your personal
        information under certain circumstances, such as where the processing is
        based on your consent and you withdraw that consent. This may impact the
        services we can provide and we will explain this to you if you decide to
        exercise this right.
      </Paragraph>
      <RedMessage>
        However, when interacting with the blockchain, as it is a public
        decentralized network, we will likely not be able to prevent external
        parties from processing any personal data which has been written onto
        the blockchain. In these circumstances we will use our reasonable
        endeavours to ensure that all processing of personal data held by us is
        restricted, notwithstanding this, your right to restrict to processing
        may not be able to be fully enforced.
      </RedMessage>
      <TitleSubSection>Right to data portability</TitleSubSection>
      <Paragraph>
        Where the legal basis for our processing is your consent or the
        processing is necessary for the performance of a contract to which you
        are party or in order to take steps at your request prior to entering
        into a contract, you have a right to receive the personal information
        you provided to us in a structured, commonly used and machine-readable
        format, or ask us to send it to another person.
      </Paragraph>
      <TitleSubSection>
        Right to freedom from automated decision-making
      </TitleSubSection>
      <Paragraph>
        As explained above, we do not use automated decision-making, but where
        any automated decision-making takes place, you have the right in this
        case to express your point of view and to contest the decision, as well
        as request that decisions based on automated processing concerning you
        or significantly affecting you and based on your personal data are made
        by natural persons, not only by computers.
      </Paragraph>
      <TitleSubSection>
        Right to object to direct marketing (‘opting out’)
      </TitleSubSection>
      <Paragraph>
        You have a choice about whether or not you wish to receive information
        from us. We will not contact you for marketing purposes unless:
      </Paragraph>
      <Ol style={{ listStyleType: 'circle' }}>
        <Li>
          you have a business relationship with us, and we rely on our
          legitimate interests as the lawful basis for processing (as described
          above)
        </Li>
        <Li>
          you have otherwise given your prior consent (such as when you download
          one of our guides)
        </Li>
      </Ol>
      <Paragraph>
        You can change your marketing preferences at any time by contacting us
        on the above details. On each and every marketing communication, we will
        always provide the option for you to exercise your right to object to
        the processing of your personal data for marketing purposes (known as
        ‘opting-out’) by clicking on the ‘unsubscribe’ button on our marketing
        emails or choosing a similar opt-out option on any forms we use to
        collect your data. You may also opt-out at any time by contacting us on
        the below details.
      </Paragraph>
      <Paragraph>
        Please note that any administrative or service-related communications
        (to offer our services, or notify you of an update to this Privacy
        Policy or applicable terms of business, etc.) will solely be directed at
        our clients or business partners, and such communications generally do
        not offer an option to unsubscribe as they are necessary to provide the
        services requested. Therefore, please be aware that your ability to
        opt-out from receiving marketing and promotional materials does not
        change our right to contact you regarding your use of our website or as
        part of a contractual relationship we may have with you.
      </Paragraph>
      <TitleSubSection>Right to request access</TitleSubSection>
      <Paragraph>
        You also have a right to access information we hold about you. We are
        happy to provide you with details of your Personal Information that we
        hold or process. To protect your personal information, we follow set
        storage and disclosure procedures, which mean that we will require proof
        of identity from you prior to disclosing such information. You can
        exercise this right at any time by contacting us on the above details.
      </Paragraph>
      <TitleSubSection>Right to withdraw consent</TitleSubSection>
      <Paragraph>
        Where the legal basis for processing your personal information is your
        consent, you have the right to withdraw that consent at any time by
        contacting us on the above details.
      </Paragraph>
      <TitleSubSection>
        Raising a complaint about how we have handled your personal data
      </TitleSubSection>
      <Paragraph>
        If you wish to raise a complaint on how we have handled your personal
        data, you can contact us as set out above and we will then investigate
        the matter.
      </Paragraph>
      <TitleSubSection>
        Right to lodge a complaint with a relevant supervisory authority
      </TitleSubSection>
      <Paragraph>
        If we have not responded to you within a reasonable time or if you feel
        that your complaint has not been resolved to your satisfaction, you are
        entitled to make a complaint to the Data Protection Commissioner under
        the Data Protection Act, which is presently the{' '}
        <Link href="http://www.gra.gi/">Gibraltar Regulatory Authority</Link>{' '}
        (GRA). You may contact the GRA on the below details:
      </Paragraph>
      <Paragraph>
        Gibraltar Data Protection Commissioner
        <br />
        Gibraltar Regulatory Authority
        <br />
        2nd Floor, Eurotowers 4
        <br />
        1 Europort Road
        <br />
        Gibraltar
        <br />
        Email: info@gra.gi
        <br />
        Phone:(+350) 200 74636
        <br />
        Fax: (+350) 200 72166
      </Paragraph>
      <Paragraph>
        You also have the right to lodge a complaint with the supervisory
        authority in the country of your habitual residence, place of work, or
        the place where you allege an infringement of one or more of our rights
        has taken place, if that is based in the EEA.
      </Paragraph>
      <Section>
        <TitleSection>10. Storing Personal Data</TitleSection>
        <Paragraph>
          We retain your information only for as long as is necessary for the
          purposes for which we process the information as set out in this
          policy.
        </Paragraph>
        <Paragraph>
          However, we may retain your Personal Data for a longer period of time
          where such retention is necessary for compliance with a legal
          obligation to which we are subject, or in order to protect your vital
          interests or the vital interests of another natural person.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>11. Changes to this Privacy Policy</TitleSection>
        <Paragraph>
          We may make changes to this Policy from time to time. Where we do so,
          we will notify those who have a business relationship with us or who
          are subscribed to our emailing lists directly of the changes, and
          change the ‘Last updated’ date above. We encourage you to review the
          Policy whenever you access or use our website to stay informed about
          our information practices and the choices available to you. If you do
          not agree to the revised Policy, you should discontinue your use of
          this website.
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>12. Our details</TitleSection>
        <Paragraph>
          This website is owned and operated by Gnosis Limited.
        </Paragraph>
        <Paragraph>
          We are registered in Gibraltar under registration number 115571, and
          our registered office is located at:
        </Paragraph>
        <Paragraph>You can contact us via:</Paragraph>
        <Paragraph>
          Gnosis Limited
          <br />
          World Trade Center
          <br />
          6 Bayside Rd,
          <br />
          GX111AA Gibraltar
        </Paragraph>
        <Paragraph>
          If you have any queries concerning your rights under this Privacy
          Policy, please contact us at{' '}
          <Link href="mailto:dataprotection@gnosis.pm">
            dataprotection@gnosis.pm
          </Link>
          .
        </Paragraph>
      </Section>
    </ContentWrapper>
  </Layout>
)

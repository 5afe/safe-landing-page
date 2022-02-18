import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import {
  ContentWrapper,
  Title,
  Section,
  TitleSection,
  Paragraph,
  Link,
  B,
} from '../styles/legalPagesStyles'

const Tr = styled.span`
  display: flex;
  padding: 10px 0;
`

const Td1 = styled.span`
  overflow-wrap: break-word;
  width: 37%;
`

const Td2 = styled.span`
  overflow-wrap: break-word;
  padding: 0 20px;
  width: 63%;
`

export default () => (
  <Layout title="Licenses">
    <ContentWrapper>
      <Title>Licenses</Title>
      <Section>
        <TitleSection>Libraries We Use</TitleSection>
        <Paragraph>
          This page contains a list of atTribution notices for third party
          software that may be contained in portions of the Gnosis Safe. We
          thank the open source community for all of their contributions.
        </Paragraph>
        <TitleSection>Android</TitleSection>
        <Paragraph>
          <Tr>
            <Td1>
              <B>Library</B>
            </Td1>
            <Td2>
              <B>License</B>
            </Td2>
          </Tr>
          <Tr>
            <Td1>AndroidX</Td1>
            <Td2>
              <Link href="https://android.googlesource.com/platform/frameworks/support/%2B/androidx-master-dev/LICENSE.txt">
                https://android.googlesource.com/platform/frameworks/support/+/androidx-master-dev/LICENSE.txt
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>Bivrost for Kotlin</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/bivrost-kotlin/blob/master/LICENSE">
                https://github.com/gnosis/bivrost-kotlin/blob/master/LICENSE
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Dagger</Td1>
            <Td2>
              <Link href="https://github.com/google/dagger#license">
                https://github.com/google/dagger#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>FloatingActionButton</Td1>
            <Td2>
              <Link href="https://github.com/Clans/FloatingActionButton/blob/master/LICENSE">
                https://github.com/Clans/FloatingActionButton/blob/master/LICENSE
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Material Progress Bar</Td1>
            <Td2>
              <Link href="https://github.com/DreaminginCodeZH/MaterialProgressBar/blob/master/LICENSE">
                https://github.com/DreaminginCodeZH/MaterialProgressBar/blob/master/LICENSE
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Kethereum</Td1>
            <Td2>
              <Link href="https://github.com/walleth/kethereum/blob/master/LICENSE">
                https://github.com/walleth/kethereum/blob/master/LICENSE
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Koptional</Td1>
            <Td2>
              <Link href="https://github.com/gojuno/koptional#license">
                https://github.com/gojuno/koptional#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Moshi</Td1>
            <Td2>
              <Link href="https://github.com/square/moshi#license">
                https://github.com/square/moshi#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>OkHttp</Td1>
            <Td2>
              <Link href="https://github.com/square/okhttp#license">
                https://github.com/square/okhttp#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Okio</Td1>
            <Td2>
              <Link href="https://github.com/square/okio#license">
                https://github.com/square/okio#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Phrase</Td1>
            <Td2>
              <Link href="https://github.com/square/phrase/#license">
                https://github.com/square/phrase/#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Picasso</Td1>
            <Td2>
              <Link href="https://github.com/square/picasso#license">
                https://github.com/square/picasso#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>ReTrofit</Td1>
            <Td2>
              <Link href="https://github.com/square/reTrofit#license">
                https://github.com/square/reTrofit#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>RxAndroid</Td1>
            <Td2>
              <Link href="https://github.com/ReactiveX/RxAndroid#license">
                https://github.com/ReactiveX/RxAndroid#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>RxBinding</Td1>
            <Td2>
              <Link href="https://github.com/JakeWharton/RxBinding#license">
                https://github.com/JakeWharton/RxBinding#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>RxJava</Td1>
            <Td2>
              <Link href="https://github.com/ReactiveX/RxJava#license">
                https://github.com/ReactiveX/RxJava#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>RxKotlin</Td1>
            <Td2>
              <Link href="https://github.com/ReactiveX/RxKotlin/blob/2.x/LICENSE">
                https://github.com/ReactiveX/RxKotlin/blob/2.x/LICENSE
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>SpongyCastle</Td1>
            <Td2>
              <Link href="https://github.com/rtyley/spongycastle/blob/spongy-master/LICENSE.html">
                https://github.com/rtyley/spongycastle/blob/spongy-master/LICENSE.html
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Svalinn Android</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/svalinn-kotlin/blob/master/LICENSE">
                https://github.com/gnosis/svalinn-kotlin/blob/master/LICENSE
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Timber</Td1>
            <Td2>
              <Link href="https://github.com/JakeWharton/timber#license">
                https://github.com/JakeWharton/timber#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Zxing</Td1>
            <Td2>
              <Link href="https://github.com/zxing/zxing/blob/master/LICENSE">
                https://github.com/zxing/zxing/blob/master/LICENSE
              </Link>
              &nbsp;
            </Td2>
          </Tr>
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>iOS</TitleSection>
        <Paragraph>
          <Tr>
            <Td1>
              <B>Library</B>
            </Td1>
            <Td2>
              <B>License</B>
            </Td2>
          </Tr>
          <Tr>
            <Td1>BigInt</Td1>
            <Td2>
              <Link href="https://github.com/attaswift/BigInt/blob/master/LICENSE.md">
                https://github.com/attaswift/BigInt/blob/master/LICENSE.md
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>BlockiesSwift</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/BlockiesSwift/blob/master/LICENSE">
                https://github.com/gnosis/BlockiesSwift/blob/master/LICENSE
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>CryptoEthereumSwift</Td1>
            <Td2>
              <Link href="https://github.com/yuzushioh/CryptoEthereumSwift/blob/master/LICENSE">
                https://github.com/yuzushioh/CryptoEthereumSwift/blob/master/LICENSE
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>CryptoSwift</Td1>
            <Td2>
              <Link href="https://github.com/krzyzanowskim/CryptoSwift#license">
                https://github.com/krzyzanowskim/CryptoSwift#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>DateTools</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/DateTools#license">
                https://github.com/gnosis/DateTools#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>EthereumKit</Td1>
            <Td2>
              <Link href="https://github.com/D-Technologies/EthereumKit#license">
                https://github.com/D-Technologies/EthereumKit#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Keycard.swift</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/Keycard.swift/blob/master/LICENSE">
                https://github.com/gnosis/Keycard.swift/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>Kingfisher</Td1>
            <Td2>
              <Link href="https://github.com/onevcat/Kingfisher#license">
                https://github.com/onevcat/Kingfisher#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>SipHash</Td1>
            <Td2>
              <Link href="https://github.com/attaswift/SipHash/blob/master/LICENSE.md">
                https://github.com/attaswift/SipHash/blob/master/LICENSE.md
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>Starscream</Td1>
            <Td2>
              <Link href="https://github.com/daltoniam/Starscream/blob/master/LICENSE">
                https://github.com/daltoniam/Starscream/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>RsBarcodesSwift</Td1>
            <Td2>
              <Link href="https://github.com/yeahdongcn/RSBarcodes_Swift#license">
                https://github.com/yeahdongcn/RSBarcodes_Swift#license
              </Link>
              &nbsp;
            </Td2>
          </Tr>
          <Tr>
            <Td1>libidn2</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/libidn2/blob/master/COPYING.LESSERv3">
                https://github.com/gnosis/libidn2/blob/master/COPYING.LESSERv3
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>libunisTring</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/libunisTring/blob/master/COPYING.LIB">
                https://github.com/gnosis/libunisTring/blob/master/COPYING.LIB
              </Link>
            </Td2>
          </Tr>
        </Paragraph>
      </Section>
      <Section>
        <TitleSection>Web</TitleSection>
        <Paragraph>
          <Tr>
            <Td1>
              <B>Library</B>
            </Td1>
            <Td2>
              <B>License</B>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@gnosis.pm/safe-conTracts</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/safe-conTracts/blob/development/LICENSE">
                https://github.com/gnosis/safe-conTracts/blob/development/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@gnosis.pm/util-conTracts</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/util-conTracts/blob/master/LICENSE">
                https://github.com/gnosis/util-conTracts/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@material-ui</Td1>
            <Td2>
              <Link href="https://github.com/mui-org/material-ui/blob/master/LICENSE">
                https://github.com/mui-org/material-ui/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@testing-library/jest-dom</Td1>
            <Td2>
              <Link href="https://github.com/testing-library/jest-dom/blob/master/LICENSE">
                https://github.com/testing-library/jest-dom/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@welldone-software/why-did-you-render</Td1>
            <Td2>
              <Link href="https://github.com/welldone-software/why-did-you-render/blob/master/LICENSE">
                https://github.com/welldone-software/why-did-you-render/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>axios</Td1>
            <Td2>
              <Link href="https://github.com/axios/axios/blob/master/LICENSE">
                https://github.com/axios/axios/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>bignumber.js</Td1>
            <Td2>
              <Link href="https://github.com/MikeMcl/bignumber.js/blob/master/LICENCE">
                https://github.com/MikeMcl/bignumber.js/blob/master/LICENCE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>connected-react-router</Td1>
            <Td2>
              <Link href="https://github.com/supasate/connected-react-router/blob/master/LICENSE.md">
                https://github.com/supasate/connected-react-router/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>date-fns</Td1>
            <Td2>
              <Link href="https://github.com/date-fns/date-fns/blob/master/LICENSE.md">
                https://github.com/date-fns/date-fns/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>ethereum-ens</Td1>
            <Td2>
              <Link href="https://github.com/ensdomains/ensjs/blob/master/LICENSE">
                https://github.com/ensdomains/ensjs/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>final-form</Td1>
            <Td2>
              <Link href="https://github.com/final-form/final-form/blob/master/LICENSE">
                https://github.com/final-form/final-form/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>history</Td1>
            <Td2>
              <Link href="https://github.com/ReactTraining/history/blob/master/LICENSE">
                https://github.com/ReactTraining/history/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>immortal-db</Td1>
            <Td2>
              <Link href="https://github.com/gruns/ImmortalDB/blob/master/LICENSE.txt">
                https://github.com/gruns/ImmortalDB/blob/master/LICENSE.txt
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>immutable</Td1>
            <Td2>
              <Link href="https://github.com/immutable-js/immutable-js/blob/master/LICENSE">
                https://github.com/immutable-js/immutable-js/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>material-ui-search-bar</Td1>
            <Td2>
              <Link href="https://github.com/TeamWertarbyte/material-ui-search-bar/blob/master/LICENSE">
                https://github.com/TeamWertarbyte/material-ui-search-bar/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>notistack</Td1>
            <Td2>
              <Link href="https://github.com/iamhosseindhv/notistack/blob/master/LICENSE.md">
                https://github.com/iamhosseindhv/notistack/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>optimize-css-assets-webpack-plugin</Td1>
            <Td2>
              <Link href="https://github.com/NMFR/optimize-css-assets-webpack-plugin/blob/master/LICENSE">
                https://github.com/NMFR/optimize-css-assets-webpack-plugin/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>qrcode.react</Td1>
            <Td2>
              <Link href="https://github.com/zpao/qrcode.react/blob/master/LICENSE">
                https://github.com/zpao/qrcode.react/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react</Td1>
            <Td2>
              <Link href="https://github.com/facebook/react/blob/master/LICENSE">
                https://github.com/facebook/react/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react-dom</Td1>
            <Td2>
              <Link href="https://github.com/facebook/react/blob/master/LICENSE">
                https://github.com/facebook/react/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react-final-form</Td1>
            <Td2>
              <Link href="https://github.com/final-form/react-final-form/blob/master/LICENSE">
                https://github.com/final-form/react-final-form/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react-final-form-listeners</Td1>
            <Td2>
              <Link href="https://github.com/final-form/react-final-form-listeners/blob/master/LICENSE">
                https://github.com/final-form/react-final-form-listeners/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react-hot-loader</Td1>
            <Td2>
              <Link href="https://github.com/gaearon/react-hot-loader/blob/master/LICENSE">
                https://github.com/gaearon/react-hot-loader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react-infinite-scroll-component</Td1>
            <Td2>
              <Link href="https://github.com/ankeetmaini/react-infinite-scroll-component/blob/master/license">
                https://github.com/ankeetmaini/react-infinite-scroll-component/blob/master/license
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react-qr-reader</Td1>
            <Td2>
              <Link href="https://github.com/JodusNodus/react-qr-reader/blob/master/LICENSE">
                https://github.com/JodusNodus/react-qr-reader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react-redux</Td1>
            <Td2>
              <Link href="https://github.com/reduxjs/react-redux/blob/master/LICENSE.md">
                https://github.com/reduxjs/react-redux/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react-router-dom</Td1>
            <Td2>
              <Link href="https://github.com/ReactTraining/react-router/blob/master/LICENSE">
                https://github.com/ReactTraining/react-router/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>react-window</Td1>
            <Td2>
              <Link href="https://github.com/bvaughn/react-window/blob/master/LICENSE.md">
                https://github.com/bvaughn/react-window/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>recompose</Td1>
            <Td2>
              <Link href="https://github.com/acdlite/recompose/blob/master/LICENSE.md">
                https://github.com/acdlite/recompose/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>redux</Td1>
            <Td2>
              <Link href="https://github.com/reduxjs/redux/blob/master/LICENSE.md">
                https://github.com/reduxjs/redux/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>redux-actions</Td1>
            <Td2>
              <Link href="https://github.com/redux-utilities/redux-actions/blob/master/LICENSE">
                https://github.com/redux-utilities/redux-actions/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>redux-thunk</Td1>
            <Td2>
              <Link href="https://github.com/reduxjs/redux-thunk/blob/master/LICENSE.md">
                https://github.com/reduxjs/redux-thunk/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>reselect</Td1>
            <Td2>
              <Link href="https://github.com/reduxjs/reselect/blob/master/LICENSE">
                https://github.com/reduxjs/reselect/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>web3</Td1>
            <Td2>
              <Link href="https://github.com/ethereum/web3.js/blob/1.x/LICENSE">
                https://github.com/ethereum/web3.js/blob/1.x/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/cli</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/core</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-class-properties</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-decorators</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-do-expressions</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-export-default-from</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-export-namespace-from</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-function-bind</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-function-sent</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-json-sTrings</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-logical-assignment-operators</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-nullish-coalescing-operator</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-numeric-separator</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-optional-chaining</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-pipeline-operator</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-proposal-throw-expressions</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-syntax-dynamic-import</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-syntax-import-meta</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-Transform-member-expression-literals</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/plugin-Transform-property-literals</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/polyfill</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/preset-env</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/preset-flow</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@babel/preset-react</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@sambego/storybook-state</Td1>
            <Td2>
              <Link href="https://github.com/Sambego/storybook-state/blob/master/LICENSE">
                https://github.com/Sambego/storybook-state/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@storybook/addon-actions</Td1>
            <Td2>
              <Link href="https://github.com/storybookjs/storybook/blob/next/LICENSE">
                https://github.com/storybookjs/storybook/blob/next/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@storybook/addon-knobs</Td1>
            <Td2>
              <Link href="https://github.com/storybookjs/storybook/blob/next/LICENSE">
                https://github.com/storybookjs/storybook/blob/next/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@storybook/addon-links</Td1>
            <Td2>
              <Link href="https://github.com/storybookjs/storybook/blob/next/LICENSE">
                https://github.com/storybookjs/storybook/blob/next/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@storybook/react</Td1>
            <Td2>
              <Link href="https://github.com/storybookjs/storybook/blob/next/LICENSE">
                https://github.com/storybookjs/storybook/blob/next/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>@testing-library/react</Td1>
            <Td2>
              <Link href="https://github.com/testing-library/react-testing-library/blob/master/LICENSE">
                https://github.com/testing-library/react-testing-library/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>autoprefixer</Td1>
            <Td2>
              <Link href="https://github.com/postcss/autoprefixer/blob/master/LICENSE">
                https://github.com/postcss/autoprefixer/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>babel-core</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel/blob/master/LICENSE">
                https://github.com/babel/babel/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>babel-eslint</Td1>
            <Td2>
              <Link href="https://github.com/babel/babel-eslint/blob/master/LICENSE">
                https://github.com/babel/babel-eslint/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>babel-jest</Td1>
            <Td2>
              <Link href="https://github.com/facebook/jest/blob/master/LICENSE">
                https://github.com/facebook/jest/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>babel-loader</Td1>
            <Td2 id="cmnt_ref1">
              <Link href="https://github.com/babel/babel-loader/blob/master/LICENSE">
                https://github.com/babel/babel-loader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>babel-plugin-dynamic-import-node</Td1>
            <Td2 id="cmnt_ref2">
              <Link href="https://github.com/airbnb/babel-plugin-dynamic-import-node/blob/master/LICENSE">
                https://github.com/airbnb/babel-plugin-dynamic-import-node/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>babel-plugin-Transform-es3-member-expression-literals</Td1>
            <Td2>
              <Link href="https://www.npmjs.com/package/babel-plugin-Transform-es3-member-expression-literals">
                https://www.npmjs.com/package/babel-plugin-Transform-es3-member-expression-literals
              </Link>{' '}
              <sup>
                <Link href="#cmnt1">[a]</Link>
              </sup>
            </Td2>
          </Tr>
          <Tr>
            <Td1>babel-plugin-Transform-es3-property-literals</Td1>
            <Td2>
              <Link href="https://www.npmjs.com/package/babel-plugin-Transform-es3-property-literals">
                https://www.npmjs.com/package/babel-plugin-Transform-es3-property-literals
              </Link>{' '}
              <sup>
                <Link href="#cmnt2">[b]</Link>
              </sup>
            </Td2>
          </Tr>
          <Tr>
            <Td1>classnames</Td1>
            <Td2>
              <Link href="https://github.com/JedWatson/classnames/blob/master/LICENSE">
                https://github.com/JedWatson/classnames/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>css-loader</Td1>
            <Td2>
              <Link href="https://github.com/webpack-conTrib/css-loader/blob/master/LICENSE">
                https://github.com/webpack-conTrib/css-loader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>detect-port</Td1>
            <Td2>
              <Link href="https://github.com/node-modules/detect-port/blob/master/LICENSE">
                https://github.com/node-modules/detect-port/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>eslint</Td1>
            <Td2>
              <Link href="https://github.com/eslint/eslint/blob/master/LICENSE">
                https://github.com/eslint/eslint/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>eslint-config-airbnb</Td1>
            <Td2>
              <Link href="https://github.com/airbnb/javascript/blob/master/LICENSE.md">
                https://github.com/airbnb/javascript/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>eslint-plugin-flowtype</Td1>
            <Td2>
              <Link href="https://github.com/gajus/eslint-plugin-flowtype/blob/master/LICENSE">
                https://github.com/gajus/eslint-plugin-flowtype/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>eslint-plugin-import</Td1>
            <Td2>
              <Link href="https://github.com/benmosher/eslint-plugin-import/blob/master/LICENSE">
                https://github.com/benmosher/eslint-plugin-import/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>eslint-plugin-jest</Td1>
            <Td2>
              <Link href="https://github.com/jest-community/eslint-plugin-jest/blob/master/LICENSE">
                https://github.com/jest-community/eslint-plugin-jest/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>eslint-plugin-jsx-a11y</Td1>
            <Td2>
              <Link href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/LICENSE.md">
                https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/LICENSE.md
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>eslint-plugin-react</Td1>
            <Td2>
              <Link href="https://github.com/yannickcr/eslint-plugin-react/blob/master/LICENSE">
                https://github.com/yannickcr/eslint-plugin-react/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>ethereumjs-abi</Td1>
            <Td2>
              <Link href="https://github.com/ethereumjs/ethereumjs-abi/blob/master/LICENSE">
                https://github.com/ethereumjs/ethereumjs-abi/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>exTract-text-webpack-plugin</Td1>
            <Td2>
              <Link href="https://github.com/webpack-conTrib/exTract-text-webpack-plugin/blob/master/LICENSE">
                https://github.com/webpack-conTrib/exTract-text-webpack-plugin/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>file-loader</Td1>
            <Td2>
              <Link href="https://github.com/webpack-conTrib/file-loader/blob/master/LICENSE">
                https://github.com/webpack-conTrib/file-loader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>flow-bin</Td1>
            <Td2>
              <Link href="https://github.com/flowtype/flow-bin/blob/master/license">
                https://github.com/flowtype/flow-bin/blob/master/license
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>fs-exTra</Td1>
            <Td2>
              <Link href="https://github.com/jprichardson/node-fs-exTra/blob/master/LICENSE">
                https://github.com/jprichardson/node-fs-exTra/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>html-loader</Td1>
            <Td2>
              <Link href="https://github.com/webpack-conTrib/html-loader/blob/master/LICENSE">
                https://github.com/webpack-conTrib/html-loader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>html-webpack-plugin</Td1>
            <Td2>
              <Link href="https://github.com/jantimon/html-webpack-plugin/blob/master/LICENSE">
                https://github.com/jantimon/html-webpack-plugin/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>jest</Td1>
            <Td2>
              <Link href="https://github.com/facebook/jest/blob/master/LICENSE">
                https://github.com/facebook/jest/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>jest-dom (DEPRECATED)</Td1>
            <Td2></Td2>
          </Tr>
          <Tr>
            <Td1>json-loader</Td1>
            <Td2>
              <Link href="https://github.com/webpack-conTrib/json-loader/blob/master/LICENSE">
                https://github.com/webpack-conTrib/json-loader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>mini-css-exTract-plugin</Td1>
            <Td2>
              <Link href="https://github.com/webpack-conTrib/mini-css-exTract-plugin/blob/master/LICENSE">
                https://github.com/webpack-conTrib/mini-css-exTract-plugin/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>postcss-loader</Td1>
            <Td2>
              <Link href="https://github.com/postcss/postcss-loader/blob/master/LICENSE">
                https://github.com/postcss/postcss-loader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>postcss-mixins</Td1>
            <Td2>
              <Link href="https://github.com/postcss/postcss-mixins/blob/master/LICENSE">
                https://github.com/postcss/postcss-mixins/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>postcss-simple-vars</Td1>
            <Td2>
              <Link href="https://github.com/postcss/postcss-simple-vars/blob/master/LICENSE">
                https://github.com/postcss/postcss-simple-vars/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>pre-commit</Td1>
            <Td2>
              <Link href="https://github.com/observing/pre-commit/blob/master/LICENSE">
                https://github.com/observing/pre-commit/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>prettier-eslint-cli</Td1>
            <Td2>
              <Link href="https://github.com/prettier/prettier-eslint-cli/blob/master/LICENSE">
                https://github.com/prettier/prettier-eslint-cli/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>run-with-tesTrpc</Td1>
            <Td2>
              <Link href="https://github.com/gnosis/run-with-tesTrpc/blob/master/LICENSE">
                https://github.com/gnosis/run-with-tesTrpc/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>storybook-host</Td1>
            <Td2>
              <Link href="https://github.com/philcockfield/storybook-host/blob/master/LICENSE">
                https://github.com/philcockfield/storybook-host/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>storybook-router</Td1>
            <Td2>
              <Link href="https://github.com/gvaldambrini/storybook-router/blob/master/LICENSE">
                https://github.com/gvaldambrini/storybook-router/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>style-loader</Td1>
            <Td2>
              <Link href="https://github.com/webpack-conTrib/style-loader/blob/master/LICENSE">
                https://github.com/webpack-conTrib/style-loader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>Truffle</Td1>
            <Td2>
              <Link href="https://github.com/Trufflesuite/Truffle/blob/master/packages/Truffle/LICENSE">
                https://github.com/Trufflesuite/Truffle/blob/master/packages/Truffle/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>Truffle-conTract</Td1>
            <Td2>
              <Link href="https://github.com/Trufflesuite/Truffle/blob/master/packages/conTract/LICENSE">
                https://github.com/Trufflesuite/Truffle/blob/master/packages/conTract/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>Truffle-solidity-loader</Td1>
            <Td2>
              <Link href="https://github.com/Trufflesuite/Truffle/blob/master/packages/solidity-loader/LICENSE">
                https://github.com/Trufflesuite/Truffle/blob/master/packages/solidity-loader/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>uglifyjs-webpack-plugin</Td1>
            <Td2>
              <Link href="https://github.com/webpack-conTrib/uglifyjs-webpack-plugin/blob/master/LICENSE">
                https://github.com/webpack-conTrib/uglifyjs-webpack-plugin/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>url-loader</Td1>
            <Td2>
              <Link href="https://github.com/webpack-conTrib/url-loader/blob/master/LICENSE">
                https://github.com/webpack-conTrib/url-loader/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>webpack</Td1>
            <Td2>
              <Link href="https://github.com/webpack/webpack/blob/master/LICENSE">
                https://github.com/webpack/webpack/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>webpack-cli</Td1>
            <Td2>
              <Link href="https://github.com/webpack/webpack-cli/blob/next/LICENSE">
                https://github.com/webpack/webpack-cli/blob/next/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>webpack-dev-server</Td1>
            <Td2>
              <Link href="https://github.com/webpack/webpack-dev-server/blob/master/LICENSE">
                https://github.com/webpack/webpack-dev-server/blob/master/LICENSE
              </Link>
            </Td2>
          </Tr>
          <Tr>
            <Td1>webpack-manifest-plugin</Td1>
            <Td2>
              <Link href="https://github.com/danethurber/webpack-manifest-plugin/blob/master/license">
                https://github.com/danethurber/webpack-manifest-plugin/blob/master/license
              </Link>
            </Td2>
          </Tr>
        </Paragraph>
      </Section>
      <br />
      <br />
      <br />
      <Section>
        <Paragraph>
          <Link href="#cmnt_ref1" id="cmnt1">
            [a]
          </Link>{' '}
          No sources found. npmjs.com says it&#39;s a MIT license
        </Paragraph>
        <Paragraph>
          <Link href="#cmnt_ref2" id="cmnt2">
            [b]
          </Link>{' '}
          No sources found. npmjs.com says it&#39;s a MIT license
        </Paragraph>
      </Section>
    </ContentWrapper>
  </Layout>
)

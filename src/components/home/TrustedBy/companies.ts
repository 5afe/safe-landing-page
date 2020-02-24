interface TrustedByEntry {
  name: string
  imageURL: string
  websiteURL: string
}

const TRUSTED_BY_COMPANIES: TrustedByEntry[] = [
  {
    name: 'Aragon',
    imageURL: '/images/aragon.png',
    websiteURL: 'https://aragon.org/',
  },
  {
    name: 'ConsenSys',
    imageURL: '/images/consensys.png',
    websiteURL: 'https://consensys.net/',
  },
  {
    name: 'ENS',
    imageURL: '/images/ENS.png',
    websiteURL: 'https://ens.domains/',
  },
  {
    name: 'EthHub',
    imageURL: '/images/ethhub.png',
    websiteURL: 'https://ethhub.io/',
  },
  {
    name: 'Kyber Network',
    imageURL: '/images/kyber.png',
    websiteURL: 'https://kyber.network/',
  },
  {
    name: 'Pepo',
    imageURL: '/images/pepo.png',
    websiteURL: 'https://pepo.com/',
  },
  {
    name: 'Protofire',
    imageURL: '/images/protofire.png',
    websiteURL: 'https://protofire.io/',
  },
  {
    name: 'Request Network',
    imageURL: '/images/requestnet.png',
    websiteURL: 'https://request.network/',
  },
  {
    name: 'Runtime Verification',
    imageURL: '/images/rv.png',
    websiteURL: 'https://runtimeverification.com/',
  },
  {
    name: 'UniLogin',
    imageURL: '/images/unilogin.png',
    websiteURL: 'https://unilogin.io/',
  },
]

export { TRUSTED_BY_COMPANIES }

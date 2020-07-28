interface TrustedByEntry {
  name: string
  imageURL: string
  websiteURL: string
}

const TRUSTED_BY_COMPANIES: TrustedByEntry[] = [
  {
    name: 'ConsenSys',
    imageURL: '/images/consensys.png',
    websiteURL: 'https://consensys.net/',
  },
  {
    name: 'Synthetix',
    imageURL: '/images/synthetix.png',
    websiteURL: 'https://www.synthetix.io',
  },
  {
    name: 'EthHub',
    imageURL: '/images/ethhub.png',
    websiteURL: 'https://ethhub.io/',
  },
  {
    name: 'ENS',
    imageURL: '/images/ens.svg',
    websiteURL: 'https://ens.domains/',
  },
  {
    name: 'Zerion',
    imageURL: '/images/zerion.png',
    websiteURL: 'https://zerion.io',
  },
  {
    name: 'Kyber Network',
    imageURL: '/images/kyber.png',
    websiteURL: 'https://kyber.network/',
  },
  {
    name: 'Balancer',
    imageURL: '/images/balancer.png',
    websiteURL: 'https://balancer.finance/',
  },
  {
    name: 'Runtime Verification',
    imageURL: '/images/rv.png',
    websiteURL: 'https://runtimeverification.com/',
  },
]

export { TRUSTED_BY_COMPANIES }

interface Project {
  name: string
  imageURL: string
  websiteURL: string
}

const PROJECTS: Project[] = [
  {
    name: 'Altoros',
    imageURL: '/images/altoros-white.svg',
    websiteURL: 'https://altoros.com/',
  },
  {
    name: 'ConsenSys',
    imageURL: '/images/consensys-white.png',
    websiteURL: 'https://consensys.net/',
  },
  {
    name: 'Energy Web Foundation',
    imageURL: '/images/ewfsq-white.png',
    websiteURL: 'https://energyweb.org',
  },
]

export { PROJECTS }

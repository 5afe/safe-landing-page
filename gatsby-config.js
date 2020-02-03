const path = require('path')

module.exports = {
  siteMetadata: {
    site: `Gnosis-safe`,
    title: `Gnosis Safe`,
    titleTemplate: `%s - Gnosis Safe`,
    description: `The Gnosis Safe aims to provide all users with a convenient, yet secure way to manage their funds and interact with decentralized applications on Ethereum.`,
    siteUrl: `https://gnosis-safe.io`,
    language: `en`,
    color: `#003580`,
    twitter: 'gnosisSafe',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}

const path = require('path')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    site: `safe`,
    description: `Safe is the most trusted platform to manage digital assets on Ethereum`,
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        // Safe Audience
        endpoint:
          'https://gnosis.us13.list-manage.com/subscribe/post?u=1a123436baa68728b8cfa3402&amp;id=4a4457c2ce',
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-client-side-redirect`
  ],
}

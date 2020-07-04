/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Add environment variables to process.env
// https://www.gatsbyjs.org/docs/environment-variables/
require('dotenv').config({
  path: '.env'
});

module.exports = {
  siteMetadata: {
    title: 'Про CSS',
    url: 'https://css.yoksel.ru/'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!--more-->',
        plugins: [
          {
            resolve: 'gatsby-codepen-markup-converter'
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          }
        ]
      }
    }
  ]
};

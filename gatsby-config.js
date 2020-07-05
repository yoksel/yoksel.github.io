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
    siteUrl: 'https://css.yoksel.ru/',
    description: 'Статьи про CSS и SVG'
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
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const url = `${site.siteMetadata.siteUrl}/${edge.node.fields.slug}`;

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.desc,
                  date: edge.node.fields.date,
                  url,
                  guid: url
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: fileAbsolutePath }
                  filter: { fields: { type: { eq: "post" }, isArchived: { ne: true } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                        url
                        date
                      }
                      frontmatter {
                        title
                        desc
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'Про CSS'
          }
        ]
      }
    }
  ]
};

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
    siteUrl: 'http://css.yoksel.ru/',
    description: 'Статьи про CSS и SVG',
    counter: '<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter22204352 = new Ya.Metrika({id:22204352, webvisor:true, clickmap:true, trackLinks:true, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/22204352" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-preact',
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
                  filter: { fields: {
                    type: { eq: "post" },
                    isArchived: { ne: true },
                    isDraft: { ne: true }
                  } }
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
    },
    'gatsby-plugin-no-javascript' // must be last
  ]
};

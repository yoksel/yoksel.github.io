import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import LayoutBase from '../layouts/layout-base';

import Post from '../components/post';

// Component used for creating new pages

export default function BlogPost ({ data, pageContext, location }) {
  const { url: siteUrl, title: siteTitle } = data.site.siteMetadata;
  const { html, frontmatter } = data.markdownRemark;
  const { title, desc, image, layout, customCSS, customJs, tags, links } = frontmatter;
  const { pathname } = location;
  const { slug, date, type, includeContent, previous, next } = pageContext;

  const customStyles = customCSS ? (
    <link rel="stylesheet" href={`../assets/css/${customCSS}`} />
  ) : null;

  const customScripts = customJs ? (
    <script src={`../assets/js/${customJs}`}></script>
  ) : null;

  const customContent = includeContent ? (
    <div
      className="post__custom-content"
      dangerouslySetInnerHTML={{ __html: includeContent }}
    />
  ) : null;

  return (
    <LayoutBase
      isSingle={true}
      path={pathname}
      layout={layout}
      articleType={type}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${title} • ${siteTitle}`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content={desc} />
        <meta name='yandex-verification' content='50720d52dcb3b0b9' />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>

        <meta name="theme-color" content="#ffffff"/>

        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}${slug}`} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={desc} />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:creator" content="@yoksel"/>

        {customStyles}
        {customScripts}
      </Helmet>

      {customContent}

      <Post
        title={title}
        date={date}
        content={html}
        tags={tags}
        links={links}
        previous={previous}
        next={next}
        slug={slug}
      />
    </LayoutBase>
  );
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        desc
        customCSS
        customJs
        tags
        layout
        links {
          desc
          name
          url
        }
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
  layout: PropTypes.string
};

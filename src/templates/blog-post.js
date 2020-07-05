import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import LayoutBase from '../layouts/layout-base';

import Post from '../components/post';

// Component used for creating new pages

export default function BlogPost ({ data, pageContext, location }) {
  const { html, frontmatter } = data.markdownRemark;
  const { title, desc, image, layout, customCSS, customJs, tags, links } = frontmatter;
  const { slug, date, type, includeContent, previous, next } = pageContext;
  const { pathname } = location;

  const customStyles = customCSS ? (
    <link rel="stylesheet" href={`/assets/css/${customCSS}`} />
  ) : null;

  const customScripts = customJs ? (
    <script src={`/assets/js/${customJs}`}></script>
  ) : null;

  const includedContent = includeContent ? (
    <div
      className="included-content"
      dangerouslySetInnerHTML={{ __html: includeContent }}
    />
  ) : null;

  const metaData = {
    title,
    desc,
    slug,
    image,
    customStyles,
    customScripts
  };

  return (
    <LayoutBase
      isSingle={true}
      path={pathname}
      layout={layout}
      articleType={type}
      metaData={metaData}
    >
      {includedContent}

      <Post
        title={title}
        date={date}
        content={html}
        tags={tags}
        links={links}
        articleType={type}
        previous={previous}
        next={next}
        slug={slug}
      />
    </LayoutBase>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        desc
        image
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

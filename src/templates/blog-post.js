import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import LayoutBase from '../layouts/layout-base';

// Component used for creating new pages

export default function BlogPost ({ data, pageContext, location }) {
  const { html: content, frontmatter } = data.markdownRemark;
  const { customCSS, customJs } = frontmatter;
  const { type, includeContent } = pageContext;
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

  const pageData = {
    ...frontmatter,
    ...pageContext,
    customStyles,
    customScripts,
    content
  };

  return (
    <LayoutBase
      isSingle={true}
      path={pathname}
      articleType={type}
      pageData={pageData}
    >
      {includedContent}
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

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import LayoutBase from '../layouts/layout-base';
import Drafts from '../components/drafts';

// Component used for creating new pages

export default function BlogPost ({ data, pageContext, location }) {
  const { html: content, frontmatter } = data.markdownRemark;
  const { customCSS, customJs } = frontmatter;
  const { type, includeContent, slug } = pageContext;
  const { pathname } = location;

  const customStyles = customCSS ? (
    <link rel="stylesheet" href={`/assets/css/${customCSS}`} />
  ) : null;

  const customScripts = customJs ? (
    <script src={`/assets/js/${customJs}`}></script>
  ) : null;

  let includedContent = includeContent ? (
    <div
      className="included-content"
      dangerouslySetInnerHTML={{ __html: includeContent }}
    />
  ) : null;

  let pageData = {
    ...frontmatter,
    ...pageContext,
    customStyles,
    customScripts,
    content,
    articleType: type
  };

  if (type === 'service-page') {
    pageData = {
      ...pageData,
      hideComments: true,
      hideSharing: true,
      disableCounter: true
    };
  }

  // Drafts page is generated & filled automatically
  if (slug === 'drafts') {
    includedContent = <Drafts/>;
  }

  return (
    <LayoutBase
      isSingle={true}
      path={pathname}
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

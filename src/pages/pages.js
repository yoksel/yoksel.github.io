import React from 'react';
import PropTypes from 'prop-types';
import LayoutBase from '../layouts/layout-base';
import { graphql } from 'gatsby';
import PostsList from '../components/posts-list';

export default function Pages ({ data, path }) {
  const title = 'Страницы';

  const pageData = {
    title,
    slug: 'archive',
    hideComments: true,
    hideSharing: true
  };

  return (
    <LayoutBase
      title={title}
      path={path}
      pageData={pageData}
    >
      <div className="posts">
        <PostsList items={data.allMarkdownRemark.edges} />
      </div>
    </LayoutBase>
  );
}

export const query = graphql`
  query MyPagesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: fileAbsolutePath }
      filter: { fields: { type: { eq: "page" }, isArchived: { ne: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            image
            tags
          }
          fields {
            date(formatString: "DD/MM/YYYY")
            slug
            url
          }
        }
      }
    }
  }
`;

Pages.propTypes = {
  data: PropTypes.object,
  path: PropTypes.string
};

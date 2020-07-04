import React from 'react';
import PropTypes from 'prop-types';
import LayoutBase from '../layouts/layout-base';
import { graphql } from 'gatsby';
import PostsList from '../components/posts-list';

export default function Archive ({ data, path }) {
  return (
    <LayoutBase title="Архив" path={path}>
      <div className="posts">
        <PostsList items={data.allMarkdownRemark.edges} type="cards" />
      </div>
    </LayoutBase>
  );
}

export const query = graphql`
  query MyArchiveQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: fileAbsolutePath }
      filter: { fields: { type: { eq: "post" }, isArchived: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          frontmatter {
            title
            type
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

Archive.propTypes = {
  data: PropTypes.object,
  path: PropTypes.string
};

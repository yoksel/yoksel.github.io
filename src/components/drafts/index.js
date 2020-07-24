import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import PostsList from '../posts-list';

export default function Drafts ({ path, isMain, articleType }) {
  const data = useStaticQuery(
    graphql`
      query MyDraftsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: fileAbsolutePath }
          filter: { fields: {
            type: { eq: "post" },
            isDraft: { eq: true }
          } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 150)
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
    `
  );

  return (
    <div className="posts">
      <PostsList items={data.allMarkdownRemark.edges} type="cards" />
    </div>
  );
}

Drafts.propTypes = {
  path: PropTypes.string,
  isMain: PropTypes.bool,
  articleType: PropTypes.string
};

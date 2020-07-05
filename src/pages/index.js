import React from 'react';
import PropTypes from 'prop-types';
import LayoutBase from '../layouts/layout-base';
import { graphql, Link } from 'gatsby';
import PostsList from '../components/posts-list';

export default function Home ({ data }) {
  const metaData = {
    title: 'Главная страница',
    desc: 'Статьи про CSS и SVG',
    slug: ''
  };

  return (
    <LayoutBase
      isMain={true}
      title="Статьи"
      metaData={metaData}
    >
      <div className="posts">
        <PostsList items={data.allMarkdownRemark.edges} type="cards" />

        <p>
          <Link to="/archive">Архив</Link>
        </p>
      </div>
    </LayoutBase>
  );
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: fileAbsolutePath }
      filter: { fields: { type: { eq: "post" }, isArchived: { ne: true } } }
    ) {
      edges {
        node {
          id
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

Home.propTypes = {
  data: PropTypes.object
};

import React from 'react';
import PropTypes from 'prop-types';
import LayoutBase from '../layouts/layout-base';
import { graphql } from 'gatsby';

import profilesData from '../data/meta/profiles.json';
import presentationsData from '../data/meta/presentations.json';
import Widget from '../components/widget';

export default function About ({ data, path }) {
  const { html, frontmatter, fields } = data.markdownRemark;

  const pageData = {
    ...frontmatter,
    ...fields
  };

  return (
    <LayoutBase
      path={path}
      pageData={pageData}>
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Widget
        title="Презентации"
        items={presentationsData}
      />

      <Widget
        title="Профили на других сайтах"
        items={profilesData}
      />
    </LayoutBase>
  );
}

export const query = graphql`
  query AboutQuery {
    markdownRemark(fields: { slug: { eq: "about" } }) {
      html
      fields {
        url
        slug
      }
      frontmatter {
        title
        desc
        image
        links {
          desc
          name
          url
        }
      }
    }
  }
`;

About.propTypes = {
  data: PropTypes.object,
  path: PropTypes.string
};

import React from 'react';
import PropTypes from 'prop-types';
import LayoutBase from '../layouts/layout-base';
import { graphql } from 'gatsby';

import profilesData from '../data/meta/profiles.json';
import presentationsData from '../data/meta/presentations.json';
import Widget from '../components/widget';

export default function About ({ data, path }) {
  const { html, frontmatter, fields } = data.markdownRemark;
  const { title, desc, image } = frontmatter;
  const { slug } = fields;

  const metaData = {
    title,
    desc,
    slug,
    image
  };

  return (
    <LayoutBase
      title={frontmatter.title}
      path={path}
      metaData={metaData}>
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Widget
        title="Презентации"
        items={presentationsData}
        listMod={'dashes'}
      />

      <Widget
        title="Профили на других сайтах"
        items={profilesData}
        listMod={'dashes'}
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

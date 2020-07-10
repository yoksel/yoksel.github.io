import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Widget from '../widget';
import { postNodesToList } from '../../helpers';

import projectsData from '../../data/meta/projects.json';

export default function Aside ({ path, isMain, articleType }) {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: fileAbsolutePath }
          filter: { fields: { isArchived: { ne: true } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
                url
                type
              }
            }
          }
        }
      }
    `
  );

  const markdownNodes = data.allMarkdownRemark.edges;
  const posts = markdownNodes.filter(item => item.node.fields.type === 'post');
  const pages = markdownNodes.filter(item => item.node.fields.type === 'page');
  const articlesWidget = !isMain
    ? <Widget
      title="Статьи"
      items={postNodesToList(posts)}
      path={path} />
    : '';
  const pagesWidget = <Widget
    title="Страницы"
    items={postNodesToList(pages)}
    path={path} />;
  const projectsWidget = <Widget
    title="Проекты"
    items={projectsData}
    path={path}
  />;

  const widgetsOrder = articleType === 'page'
      ? <Fragment>
          {pagesWidget}
          {articlesWidget}
          {projectsWidget}
        </Fragment>
      : path === '/about/'
      ? <Fragment>
          {projectsWidget}
          {articlesWidget}
          {pagesWidget}
        </Fragment>
      : <Fragment>
          {articlesWidget}
          {pagesWidget}
          {projectsWidget}
        </Fragment>;

  return (
    <aside className="page-aside">
      <h2 className="visually-hidden">Сайдбар</h2>

      {widgetsOrder}
    </aside>
  );
}

Aside.propTypes = {
  path: PropTypes.string,
  isMain: PropTypes.bool,
  articleType: PropTypes.string
};

import React from 'react';
import LayoutBase from '../layouts/layout-base';
import { graphql } from 'gatsby';
import { getTagsByName } from '../helpers';
import PostsList from '../components/posts-list';

export default class Tags extends React.Component {
  constructor (props) {
    super(props);

    this._props = props;
    this._data = this._props.data;
    this._tagsByName = getTagsByName();
  }

  _getTagCloud () {
    const { group } = this._data.allMarkdownRemark;
    const tagsCounts = group.map(({ totalCount }) => totalCount);
    const tagsMinCount = Math.min(...tagsCounts);
    const tagsMaxCount = Math.max(...tagsCounts);
    const step = Math.floor((tagsMaxCount - tagsMinCount) / 4);

    return group.map(({ tag, totalCount }) => {
      const tagIncrease = Math.round(totalCount / step) * 20;
      const tagFontSize = 100 + tagIncrease;

      return (
        <li className="tags-list__item" key={tag}>
          <button
            className="tags-button"
            data-target-tag={tag}
            title={`Статей по тегу: ${totalCount}`}
            style={{ fontSize: `${tagFontSize}%` }}
          >
            {this._tagsByName[tag] || tag}
          </button>
        </li>
      );
    });
  }

  render () {
    const { path } = this._props;
    const { edges } = this._data.allMarkdownRemark;

    const pageData = {
      title: 'Метки',
      slug: 'tags',
      image: '//yoksel.github.io/assets/img/previews/tags.png',
      hideComments: true,
      hideSharing: true
    };

    return (
      <LayoutBase
        path={path}
        pageData={pageData}
      >
        <ul className="tags-list no-bullets">
          {this._getTagCloud()}
        </ul>

        <h2 className="posts-list-title visually-hidden">Все статьи</h2>

        <PostsList
          items={edges}
          mod="by-tag"
        />
      </LayoutBase>
    );
  }
}

export const query = graphql`
  query MyTagsQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: fields___date},
      filter: {fields: {
      type: {eq: "post"},
      isDraft: {ne: true}
    }}
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          fields {
            date(formatString: "DD/MM/YYYY")
            slug
            url
            isArchived
          }
        }
      }
    }
  }
`;

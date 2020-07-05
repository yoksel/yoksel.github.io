import React from 'react';
import LayoutBase from '../layouts/layout-base';
import { graphql } from 'gatsby';
import { getTagsByName } from '../helpers';
import PostsList from '../components/posts-list';

export default class Tags extends React.Component {
  constructor (props) {
    super(props);

    this._props = props;
    this.state = { currentTag: null };
  }

  componentDidMount () {
    const currentTag = document && document.location.hash
      ? document.location.hash.substring(1)
      : '';
    this.setState({ currentTag });
  }

  render () {
    const { data, path } = this._props;
    const { group, edges } = data.allMarkdownRemark;
    const tagsByName = getTagsByName();
    const tagsCounts = group.map(({ totalCount }) => totalCount);
    const tagsMinCount = Math.min(...tagsCounts);
    const tagsMaxCount = Math.max(...tagsCounts);
    const step = Math.floor((tagsMaxCount - tagsMinCount) / 4);
    const title = 'Метки';

    const metaData = {
      title,
      slug: 'tags',
      image: '//yoksel.github.io/assets/img/previews/tags.png'
    };

    return (
      <LayoutBase
        title={title}
        path={path}
        metaData={metaData}
      >
        <ul className="tags-list">
          {group.map(({ tag, totalCount }) => {
            const tagIncrease = Math.round(totalCount / step) * 20;
            const tagFontSize = 100 + tagIncrease;
            let buttonClassName = 'tags-button';

            if (tag === this.state.currentTag) {
              buttonClassName += ' tags-button--current';
            }

            return (
              <li className="tags-list__item" key={tag}>
                <button
                  className={buttonClassName}
                  data-target-tag={tag}
                  onClick={() => {
                    const currentTag =
                      tag === this.state.currentTag ? null : tag;
                    this.setState({ currentTag });
                    document.location.hash = tag;
                  }}
                  style={{ fontSize: `${tagFontSize}%` }}
                >
                  {tagsByName[tag] || tag}
                </button>
              </li>
            );
          })}
        </ul>

        <PostsList
          items={edges}
          currentTag={this.state.currentTag}
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
      filter: {fields: {type: {eq: "post"}}}
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

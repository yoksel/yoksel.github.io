import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './styles.scss';
import { dateToAttr } from '../../helpers';

export default function PostsList ({
  items,
  mod = '',
  type = 'list'
}) {
  if (items.length === 0) {
    return;
  }

  const listClassNameBase = 'posts-list';
  const itemClassNameBase = 'post-item';

  let listClassName = listClassNameBase;

  if (mod) {
    listClassName += ` ${listClassNameBase}--${mod}`;
  }

  if (type && type !== 'list') {
    listClassName += ` ${listClassNameBase}--${type}`;

    if (type === 'cards') {
      listClassName += ' no-bullets';
    }
  }

  return (
    <ul className={listClassName}>
      {items.map(({ node }) => {
        const { excerpt, frontmatter, fields, id } = node;
        let { title, desc, tags } = frontmatter;
        const { date, url, isArchived } = fields;
        const dateAttr = dateToAttr(date);
        desc = desc || excerpt;
        tags = tags || [];

        let className = itemClassNameBase;

        if (mod === 'by-tag') {
          tags.forEach(tag => {
            className += ` tag-${tag}`;
          });
        }

        const isArchivedMark = isArchived ? (
          <span className="posts-list__archive-mark faded-text">в архиве</span>
        ) : (
          ''
        );

        let itemContent = (
          <Fragment>
            <Link to={url}>{title}</Link>

            {isArchivedMark}
          </Fragment>
        );

        if (type === 'cards') {
          itemContent = (
            <Fragment>
              <h3 className="post-item__title">
                <Link to={url}>{frontmatter.title}</Link>
              </h3>

              <div className="post-item__text">{desc}</div>

              <div className="post-item__footer">
                <Link to={url}>Читать дальше →</Link>

                <time className="post-item__date faded-text" dateTime={dateAttr}>{date}</time>
              </div>
            </Fragment>
          );
        }

        return (
          <li className={className} key={id}>
            {itemContent}
          </li>
        );
      })}
    </ul>
  );
}

PostsList.propTypes = {
  items: PropTypes.array,
  mod: PropTypes.string,
  type: PropTypes.string
};

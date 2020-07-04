import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './styles.scss';

export default function PostLinks ({ title, items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <dl className="post-links">
      <dt className="post-links__title">{title}</dt>

      {items.map(({ id, name, url, desc }) => {
        const link = url || `#${id}`;
        const nameText = name || url;
        const descElement = desc ? (
          <span className="faded-text"> — {desc}</span>
        ) : (
          ''
        );

        return (
          <dd className="post-links__item" key={nanoid()}>
            <a href={link}>{nameText}</a>
            {descElement}
          </dd>
        );
      })}
    </dl>
  );
}

PostLinks.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

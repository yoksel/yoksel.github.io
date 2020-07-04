import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { getTagsByName } from '../../helpers';

import './styles.scss';

export default function PostTags ({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  const tagsByName = getTagsByName();

  return (
    <dl className="post-tags">
      <dt className="post-tags__title">Метки:</dt>

      {items.map((name, index) => {
        return (
          <dd className="post-tags__item" key={name}>
            <Link to={`/tags/#${name}`}>{tagsByName[name] || name}</Link>

            {index < items.length - 1 && (
              <span className="post-tags__delim">,&nbsp;</span>
            )}
          </dd>
        );
      })}
    </dl>
  );
}

PostTags.propTypes = {
  items: PropTypes.array
};

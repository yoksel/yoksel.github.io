import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function PostPrevNext (params) {
  const { previous, next } = params;

  if (!previous && !next) {
    return null;
  }

  const links = [];

  for (const key in params) {
    const link = params[key];

    if (!link) {
      continue;
    }

    links.push(
      <a
        href={link.fields.url}
        key={key}
        className={`post-prevnext__item post-prevnext__item--${key}`}
      >
        {key === 'previous' && <span className="post-prevnext__arrow">←</span>}
        <span className="post-prevnext__text">{link.frontmatter.title}</span>
        {key === 'next' && <span className="post-prevnext__arrow">→</span>}
      </a>
    );
  }

  return <div className="post-prevnext">{links}</div>;
}

PostPrevNext.propTypes = {
  params: PropTypes.shape({
    previous: PropTypes.object,
    next: PropTypes.object
  })
};

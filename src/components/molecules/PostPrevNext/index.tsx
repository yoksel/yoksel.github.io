import React from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import Link from '../../atoms/Link';

interface PrevNextLink {
  id: string;
  href: string;
  text: string;
}

interface PostPrevNextProps {
  previous?: PrevNextLink;
  next?: PrevNextLink;
}

const PostPrevNext = ({ previous, next }: PostPrevNextProps) => {
  if (!previous && !next) {
    return null;
  }

  return (
    <div className={styles['post-prevnext']}>
      {[previous, next].map((link) => {
        if (!link) return null;

        return (
          <Link
            href={link.href}
            key={link.id}
            className={classNames(
              styles['post-prevnext__item'],
              styles[`post-prevnext__item--${link.id}`],
            )}
            title={link.text}
          >
            {link.id === 'previous' && <span className={styles['post-prevnext__arrow']}>←</span>}
            <span className={styles['post-prevnext__text']}>{link.text}</span>
            {link.id === 'next' && <span className={styles['post-prevnext__arrow']}>→</span>}
          </Link>
        );
      })}
    </div>
  );
};

export default PostPrevNext;

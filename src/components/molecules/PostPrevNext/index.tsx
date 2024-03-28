import React from 'react';

import classNames from 'classnames';
import Link from '../../atoms/Link';
import { PrevNextProps } from '@src/types';

import styles from './styles.module.scss';

const PostPrevNext = ({ prev, next }: PrevNextProps) => {
  if (!(prev || next)) {
    return null;
  }

  return (
    <div className={styles['post-prevnext']}>
      {[prev, next].map((link) => {
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

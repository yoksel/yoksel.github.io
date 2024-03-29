import React from 'react';

import classNames from 'classnames';
import Link from '../../atoms/Link';
import { PrevNextProps } from '@src/types';

import styles from './styles.module.scss';

const ArticlePrevNext = ({ prev, next }: PrevNextProps) => {
  if (!(prev || next)) {
    return null;
  }

  return (
    <div className={styles['articlePrevNext']}>
      {[prev, next].map((link) => {
        if (!link) return null;

        return (
          <Link
            href={link.href}
            key={link.id}
            className={classNames(
              styles['articlePrevNext__item'],
              styles[`articlePrevNext__item--${link.id}`],
            )}
            title={link.text}
          >
            {link.id === 'previous' && <span className={styles['articlePrevNext__arrow']}>←</span>}
            <span className={styles['articlePrevNext__text']}>{link.text}</span>
            {link.id === 'next' && <span className={styles['articlePrevNext__arrow']}>→</span>}
          </Link>
        );
      })}
    </div>
  );
};

export default ArticlePrevNext;

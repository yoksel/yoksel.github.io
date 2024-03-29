import React from 'react';
import { getTagsByName } from '../../../utils/getTagsByName';
import Link from '../../atoms/Link';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface ArticleTags {
  items: string[];
}

const ArticleTags = ({ items }: ArticleTags) => {
  if (!items?.length) {
    return null;
  }

  const tagsByName = getTagsByName();

  return (
    <dl className={classNames(styles['articleTags'], 'no-bullets')}>
      <dt className={styles['articleTags__title']}>Метки:</dt>

      {items.map((name, index) => {
        return (
          <dd
            className={styles['articleTags__item']}
            key={name}
          >
            <Link href={`/tags/#${name}`}>{tagsByName[name] || name}</Link>

            {index < items.length - 1 && (
              <span className={styles['articleTags__delim']}>,&nbsp;</span>
            )}
          </dd>
        );
      })}
    </dl>
  );
};

export default ArticleTags;

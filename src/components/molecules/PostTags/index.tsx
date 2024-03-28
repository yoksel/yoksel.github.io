import React from 'react';
import { getTagsByName } from '../../../utils/getTagsByName';
import Link from '../../atoms/Link';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface PostTags {
  items: string[];
}

const PostTags = ({ items }: PostTags) => {
  if (!items?.length) {
    return null;
  }

  const tagsByName = getTagsByName();

  return (
    <dl className={classNames(styles['post-tags'], 'no-bullets')}>
      <dt className={styles['post-tags__title']}>Метки:</dt>

      {items.map((name, index) => {
        return (
          <dd
            className={styles['post-tags__item']}
            key={name}
          >
            <Link href={`/tags/#${name}`}>{tagsByName[name] || name}</Link>

            {index < items.length - 1 && (
              <span className={styles['post-tags__delim']}>,&nbsp;</span>
            )}
          </dd>
        );
      })}
    </dl>
  );
};

export default PostTags;

import React from 'react';
import classNames from 'classnames';

import ArticleCard, { ArticleWithDate } from '../ArticleCard';

import styles from './styles.module.scss';

interface ArticlesListProps {
  items: ArticleWithDate[];
  mod?: string;
}

const ArticlesList = ({ items, mod }: ArticlesListProps) => {
  if (!items.length) {
    return;
  }

  const listClassNameBase = 'posts-list';

  return (
    <ul
      className={classNames(
        styles[listClassNameBase],
        mod && styles[`${listClassNameBase}--${mod}`],
      )}
    >
      {items.map((post, index) => (
        <li
          className={styles['post-item']}
          key={index}
        >
          <ArticleCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;

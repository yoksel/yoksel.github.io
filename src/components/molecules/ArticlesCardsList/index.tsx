import React from 'react';
import classNames from 'classnames';

import ArticleCard, { ArticleWithDate } from '../ArticleCard';

import styles from './styles.module.scss';

interface ArticlesCardsListProps {
  items: ArticleWithDate[];
  mod?: string;
}

const ArticlesCardsList = ({ items, mod }: ArticlesCardsListProps) => {
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

export default ArticlesCardsList;

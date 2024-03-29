import React from 'react';
import classNames from 'classnames';

import ArticleCard, { ArticleWithDate } from '../ArticleCard';

import styles from './styles.module.scss';

interface ArticlesCardsListProps {
  items: ArticleWithDate[];
}

const ArticlesCardsList = ({ items }: ArticlesCardsListProps) => {
  if (!items.length) {
    return;
  }

  const listClassNameBase = 'articleCardsLis';

  return (
    <ul className={styles[listClassNameBase]}>
      {items.map((article, index) => (
        <li key={index}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
};

export default ArticlesCardsList;

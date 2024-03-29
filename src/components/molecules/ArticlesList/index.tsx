import React from 'react';

import Link from '../../atoms/Link';
import { WidgetItem } from '../../../types';

import styles from './styles.module.scss';
import FadedText from '../../atoms/FadedText';

interface ArticlesListProps {
  items: WidgetItem[];
}

const ArticlesList = ({ items }: ArticlesListProps) => {
  if (!items.length) {
    return;
  }

  return (
    // class moved to div to be able to use lists mixin
    <div className={styles['articlesList']}>
      <ul>
        {items.map((post, index) => (
          <li
            className={styles['articlesList__item']}
            key={index}
          >
            {/* isArchived */}
            <Link href={post.href}>{'text' in post && post.text}</Link>
            {post.isArchived && (
              <FadedText className={styles['articlesList__archive-mark']}>в архиве</FadedText>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;

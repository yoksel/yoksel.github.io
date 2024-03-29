import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import FadedText from '../../atoms/FadedText';
import Link from '../../atoms/Link';
import { PageUrl } from '@src/types';

import styles from './styles.module.scss';

interface ArticleLinksProps {
  title: string;
  items: PageUrl[];
}

const ArticleLinks = ({ title, items }: ArticleLinksProps) => {
  const filteredItems = items.filter(
    (item) => ('id' in item && item.id) || ('href' in item && item.href),
  );

  if (!filteredItems?.length) {
    return null;
  }

  return (
    <dl className={styles['post-links']}>
      <dt className={styles['post-links__title']}>{title}</dt>

      {filteredItems.map((item) => {
        const { text, level, desc } = item;

        const url = ('href' in item && item.href) || ('id' in item && `#${item.id}`);

        if (!url) return null;

        return (
          <dd
            className={classNames(
              styles['post-links__item'],
              level && styles[`post-links__item--level-${level}`],
            )}
            key={uuidv4()}
          >
            <Link href={url}>{text || url}</Link>
            {desc && <FadedText> — {desc}</FadedText>}
          </dd>
        );
      })}
    </dl>
  );
};

export default ArticleLinks;

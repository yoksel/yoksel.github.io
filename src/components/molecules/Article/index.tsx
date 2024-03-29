'use client';

import React, { useEffect, useRef } from 'react';

import ArticleLinks from '../ArticleLinks';
import ArticleTags from '../ArticleTags';
import { ArticleData } from '@src/types';
import ContentAsHtml from '../../atoms/ContentAsHtml';
import ArticleDate from '../../atoms/ArticleDate';

import styles from './styles.module.scss';

const Article = ({ article }: { article: ArticleData }) => {
  const { title, date, content, tags, links, navItems } = article;
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Work on static version on second visited page but for all rerenders
    heading?.current?.focus();

    if (typeof window !== 'undefined') {
      // https://blog.codepen.io/documentation/embedded-pens/#delayed-embeds
      (window as any).__CPEmbed?.();
    }
  });

  return (
    <article
      className={styles['post']}
      id="begin"
      aria-labelledby="article-title"
    >
      <header className={styles['post__header']}>
        <h1
          className={styles['post__title']}
          ref={heading}
          id="article-title"
        >
          {title}
        </h1>

        {date && (
          <ArticleDate
            date={date}
            className={styles['post__date']}
          />
        )}
      </header>

      {navItems && (
        <ArticleLinks
          title="Содержание:"
          items={navItems}
        />
      )}

      {content && (
        <ContentAsHtml
          className={styles['post__content']}
          content={content}
        />
      )}

      {links && (
        <ArticleLinks
          title="Ссылки по теме:"
          items={links}
        />
      )}

      {tags && <ArticleTags items={tags} />}
    </article>
  );
};

export default Article;

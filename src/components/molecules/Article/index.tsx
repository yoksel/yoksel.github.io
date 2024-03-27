'use client';

import React, { useEffect, useRef } from 'react';

import PostLinks from '../PostLinks';
import PostTags from '../PostTags';
import { dateToAttr } from '../../../helpers';
import { ArticleData } from '../../../types';
import FadedText from '../../atoms/FadedText';

import styles from './styles.module.scss';
import ContentAsHtml from '../../atoms/ContentAsHtml';

const Article = ({ article }: { article: ArticleData }) => {
  const { title, date, content, tags, links, navItems } = article;
  const dateAttr = dateToAttr(date);
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
          <time
            className={styles['post__date']}
            dateTime={dateAttr}
          >
            <FadedText>{date}</FadedText>
          </time>
        )}
      </header>

      {navItems && (
        <PostLinks
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
        <PostLinks
          title="Ссылки по теме:"
          items={links}
        />
      )}

      {tags && <PostTags items={tags} />}
    </article>
  );
};

export default Article;

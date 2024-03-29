import React, { useEffect } from 'react';

import Script from 'next/script';
import Article from '../Article';
import Footer from '../Footer';
import Aside from '../Aside';
import CustomHead from '../../atoms/CustomHead';
import { ArticleData, PrevNextProps, WidgetItem } from '@src/types';
import Header from '../Header';
import Counter from '../../atoms/Counter';
import styles from './styles.module.scss';
import classNames from 'classnames';
import VisuallyHiddenText from '../../atoms/VisuallyHiddenText';
import ArticlePrevNext from '../ArticlePrevNext';

interface LayoutProps extends React.PropsWithChildren {
  isMain?: boolean;
  article?: ArticleData;
  posts?: WidgetItem[];
  pages?: WidgetItem[];
  prevNext?: PrevNextProps;
}

const Layout = ({ article, isMain = false, children, posts, pages, prevNext }: LayoutProps) => {
  const layout = article?.layout || 'default';

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.code !== 'Tab') return;

      document.body.classList.add('keyboard-navigation');
    });
  });

  return (
    <div className={classNames(styles['page'], isMain ? 'page--main' : 'page--single')}>
      <CustomHead article={article} />
      <Script src={`/assets/js/${article?.customJs}`} />

      <Header isMain={isMain} />

      <div
        className={classNames(styles['page-main-wrapper'], styles[`page-main-wrapper--${layout}`])}
      >
        <main className={styles['page-main']}>
          {article && <Article article={article} />}
          {children}

          {prevNext && (
            <ArticlePrevNext
              prev={prevNext.prev}
              next={prevNext.next}
            />
          )}
          <a
            href="#begin"
            className="post__marker post__marker--hidden"
            title="Наверх"
          >
            <VisuallyHiddenText>Наверх</VisuallyHiddenText>
          </a>
        </main>

        {layout !== 'onecolumn' && (
          <Aside
            slug={article?.slug}
            isMain={isMain}
            articleType={article?.type}
            posts={posts}
            pages={pages}
          />
        )}
      </div>

      <Footer
        slug={article?.slug}
        isMain={isMain}
      />

      {!article?.disableCounter && <Counter />}
    </div>
  );
};

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import HeadMeta from '../components/head-meta';
import Post from '../components/post';

import '../scss/styles.scss';
import './styles.scss';

export default function LayoutBase (props) {
  const {
    isMain,
    isSingle,
    children,
    path,
    pageData
  } = props;
  // Brrrrrr
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            counter
          }
        }
      }
    `
  );

  const layout = pageData.layout || 'default';

  const siteData = data.site.siteMetadata;
  const { title: siteTitle, counter } = siteData;

  const wrapperClassNameBase = 'page';
  let wrapperClassName = wrapperClassNameBase;

  if (isMain) {
    wrapperClassName += ` ${wrapperClassName}--main-page`;
  } else if (isSingle) {
    wrapperClassName += ` ${wrapperClassName}--single-page`;
  }

  const aside = layout !== 'onecolumn'
    ? <Aside
        path={path}
        isMain={isMain}
        articleType={pageData.articleType}
      />
    : '';

  const className = `
    page-container
    page-main-wrapper
    page-main-wrapper--${layout}`;

  const content = isMain
    ? children
    : (
        <Post {...pageData}>
          {children}
        </Post>
    );

  return (
    <div className={wrapperClassName}>
      <HeadMeta
        siteData={siteData}
        pageData={pageData}
      />

      <Header title={siteTitle} isMain={isMain} />

      <div className={className}>
        <main className="page-main">
          {content}
        </main>

        {aside}
      </div>

      <Footer path={path}/>

      <div
        className="counter"
        dangerouslySetInnerHTML={{ __html: counter }}
      />
    </div>
  );
}

LayoutBase.propTypes = {
  isMain: PropTypes.bool,
  isSingle: PropTypes.bool,
  children: PropTypes.node,
  path: PropTypes.string,
  pageData: PropTypes.object
};

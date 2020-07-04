import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

import '../scss/styles.scss';
import './styles.scss';
import Aside from '../components/aside';

export default function LayoutBase (props) {
  const {
    isMain,
    isSingle,
    children,
    path,
    title: pageTitle,
    layout,
    articleType
  } = props;
  // Brrrrrr
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const siteData = data.site.siteMetadata;
  const { title: siteTitle } = siteData;

  const wrapperClassNameBase = 'page';
  let wrapperClassName = wrapperClassNameBase;
  const pageTitleElement = pageTitle && !isMain
    ? <h1>{pageTitle}</h1>
    : null;

  if (isMain) {
    wrapperClassName += ` ${wrapperClassName}--main-page`;
  } else if (isSingle) {
    wrapperClassName += ` ${wrapperClassName}--single-page`;
  }

  const aside = layout !== 'onecolumn'
    ? <Aside path={path} isMain={isMain} articleType={articleType}/>
    : '';

  const className = `
    page-container
    page-main-wrapper
    page-main-wrapper--${layout}`;

  return (
    <div className={wrapperClassName}>
      <Header title={siteTitle} isMain={isMain} />

      <div className={className}>
        <main className="page-main">
          {pageTitleElement}

          {children}
        </main>

        {aside}
      </div>

      <Footer path={path}/>
    </div>
  );
}

LayoutBase.propTypes = {
  isMain: PropTypes.bool,
  isSingle: PropTypes.bool,
  children: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string,
  articleType: PropTypes.string,
  layout: PropTypes.string
};

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function HeadMeta (props) {
  const {
    siteData,
    pageData
  } = props;

  const desc = pageData.desc || siteData.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'ru'
      }}>
      <meta charSet="utf-8" />
      <title>{`${pageData.title} • ${siteData.title}`}</title>
      <link rel="canonical" href={siteData.siteUrl} />
      <meta name="description" content={desc} />
      <meta name='yandex-verification' content='50720d52dcb3b0b9' />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      <meta name="theme-color" content="#ffffff" />

      <meta property="og:site_name" content={siteData.title} />
      <meta property="og:title" content={pageData.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteData.siteUrl}/${pageData.slug}`} />
      {pageData.image && <meta property="og:image" content={pageData.image} />}
      <meta property="og:description" content={desc} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@yoksel" />
      {pageData.image && <meta name="twitter:image" content={pageData.image} />}

      {pageData.customStyles}
      {pageData.customScripts}
    </Helmet>
  );
}

HeadMeta.propTypes = {
  siteData: PropTypes.object,
  pageData: PropTypes.object
};

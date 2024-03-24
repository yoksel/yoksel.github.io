import Head from 'next/head';
import siteData from '../../../../data/config';
import { ArticleData } from '../../../types';

interface CustomHeadProps {
  article: ArticleData;
}

const CustomHead = ({ article }: CustomHeadProps) => {
  const absolutePageUrl = `${siteData?.siteUrl}/${article?.slug}`.replace('//', '/');
  const description = article?.description || siteData?.description;
  let title = `${article?.title} • ${siteData?.title}`;

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={siteData.description}
      ></meta>
      <meta charSet="utf-8" />
      <link
        rel="canonical"
        href={absolutePageUrl}
      />
      <meta
        name="description"
        content={description}
      />
      <meta
        name="yandex-verification"
        content="50720d52dcb3b0b9"
      />

      <link
        rel="shortcut icon"
        href="/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="manifest"
        href="/manifest.json"
      />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#5bbad5"
      />

      <meta
        name="theme-color"
        content="#ffffff"
      />

      <meta
        property="og:site_name"
        content={siteData?.title}
      />
      {
        <meta
          property="og:title"
          content={article?.title}
        />
      }
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content={absolutePageUrl}
      />
      {article?.image && (
        <meta
          property="og:image"
          content={article?.image}
        />
      )}
      <meta
        property="og:description"
        content={description}
      />

      <meta
        name="twitter:card"
        content="summary"
      />
      <meta
        name="twitter:creator"
        content="@yoksel"
      />
      {article?.image && (
        <meta
          name="twitter:image"
          content={article?.image}
        />
      )}

      <meta
        name="google-site-verification"
        content="F-TG-dOz9FIzxUZCGD9MBMwsTukpyzq9LXIX6ZsJl_k"
      />

      {article?.customStyles}
      {article?.customScripts}

      <script
        src="/assets/js/common.js"
        type="module"
      ></script>
    </Head>
  );
};

export default CustomHead;

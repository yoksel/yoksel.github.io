import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { getAllArticles } from '../utils/api';
import Layout from '../components/molecules/Layout';
import ArticlesCardsList from '../components/molecules/ArticlesCardsList';
import { ArticleWithDate } from '../components/molecules/ArticleCard';
import Link from '../components/atoms/Link';

export const getStaticProps = (async () => {
  const posts = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'post',
  )) as ArticleWithDate[];

  const pages = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'page',
  )) as ArticleWithDate[];

  return { props: { posts, pages } };
}) satisfies GetStaticProps<{
  posts: ArticleWithDate[];
  pages: ArticleWithDate[];
}>;

export default function Page({ posts, pages }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      isMain={true}
      pages={pages}
    >
      <ArticlesCardsList items={posts} />

      <p>
        <Link href="/archive">Архив</Link>
      </p>
    </Layout>
  );
}

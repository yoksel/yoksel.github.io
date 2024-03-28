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

  return { props: { posts } };
}) satisfies GetStaticProps<{
  posts: ArticleWithDate[];
}>;

export default function Page({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout isMain={true}>
      <ArticlesCardsList items={posts} />

      <p>
        <Link href="/archive">Архив</Link>
      </p>
    </Layout>
  );
}

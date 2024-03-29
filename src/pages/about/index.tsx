import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import Widget from '../../components/molecules/Widget';
import { getAllArticles, getArticleBySlug } from '../../utils/api';
import { ArticleData, WidgetItem } from '../../types';
import Layout from '../../components/molecules/Layout';

import profilesData from '../../../data/meta/profiles.json';
import presentationsData from '../../../data/meta/presentations.json';

export const getStaticProps = (async () => {
  const article = await getArticleBySlug({
    slug: 'about',
    fields: ['title', 'slug', 'content', 'links', 'additional_links'],
    type: 'service-page',
  });

  if (!article) {
    throw new Error('Article not found');
  }

  const posts = (await getAllArticles(['title', 'slug', 'order'], 'post')) as WidgetItem[];
  const pages = (await getAllArticles(['title', 'slug', 'order'], 'page')) as WidgetItem[];

  return { props: { article, posts, pages } };
}) satisfies GetStaticProps<{
  article: ArticleData;
  posts: WidgetItem[];
  pages: WidgetItem[];
}>;

export default function Page({
  article,
  posts,
  pages,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const slug = '/about';

  return (
    <Layout
      article={article}
      posts={posts}
      pages={pages}
    >
      <Widget
        title="Презентации"
        items={presentationsData}
        id="presentations"
        slug={slug}
      />

      <Widget
        title="Профили на других сайтах"
        items={profilesData}
        id="profiles"
        slug={slug}
      />
    </Layout>
  );
}

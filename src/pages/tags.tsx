import React, { useState } from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { getAllArticles } from '../utils/api';
import Layout from '../components/molecules/Layout';
import { getTagsByName } from '../utils/getTagsByName';
import { WidgetItem } from '../types';
import TagCloud from '../components/molecules/TagCloud';
import ArticlesList from '../components/molecules/ArticlesList';

interface ArticleWitTags extends WidgetItem {
  date: string;
  tags: string[];
}

interface TagsWithPosts {
  id: string;
  name: string;
  posts: ArticleWitTags[];
  totalCount: number;
}

interface TagsByNameWithPosts {
  [key: string]: TagsWithPosts;
}

export const getStaticProps = (async () => {
  const tagsByName = getTagsByName();

  const posts = (await getAllArticles(['title', 'slug', 'tags'], 'post')) as ArticleWitTags[];
  const archivedPosts = (await getAllArticles(
    ['title', 'slug', 'tags'],
    'archive',
  )) as ArticleWitTags[];
  const allPosts = posts.concat(archivedPosts);

  const tagsByNameWithPosts: TagsByNameWithPosts = {};

  for (const tagId in tagsByName) {
    const tagName = tagsByName[tagId];
    const postsByTag = allPosts.filter(({ tags }) => tags?.includes(tagId));

    tagsByNameWithPosts[tagId] = {
      id: tagId,
      name: tagName,
      posts: postsByTag,
      totalCount: postsByTag.length,
    };
  }

  return { props: { tagsByNameWithPosts, posts: allPosts } };
}) satisfies GetStaticProps<{
  tagsByNameWithPosts: TagsByNameWithPosts;
  posts: ArticleWitTags[];
}>;

export default function Page({
  tagsByNameWithPosts,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [tagId, setTagId] = useState<string>();
  const currentTag = tagId ? tagsByNameWithPosts[tagId] : undefined;

  const articlesList = currentTag ? currentTag.posts : posts;

  const toggleTagId = (id: string) => {
    if (id === tagId) {
      setTagId(undefined);
      document.location.hash = '';
      return;
    }

    setTagId(id);
    document.location.hash = id;
  };

  return (
    <Layout article={{ title: 'Метки' }}>
      <TagCloud
        tagsByNameWithPosts={tagsByNameWithPosts}
        currentId={tagId}
        tagOnClick={toggleTagId}
      />
      <ArticlesList items={articlesList} />
    </Layout>
  );
}

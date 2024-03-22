import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import PropTypes from 'prop-types';
import LayoutBase from '../layouts/layout-base';

import profilesData from '../data/meta/profiles.json';
import presentationsData from '../data/meta/presentations.json';
import Widget from '../components/widget';
import markdownToHtml from '../utils/markdownToHtml';
import { getArticleBySlug } from '../utils/api';
import { Post } from '../types';
import Layout from '../components/layout';
import Article from '../components/article';

export const getStaticProps = (async () => {
  const post = getArticleBySlug({
    slug: 'about',
    fields: ['title', 'slug', 'content', 'links', 'additional_links'],
    type: 'service-page',
  });

  console.log(post);

  if (!post) {
    throw new Error('Post not found');
  }

  // const allPosts = getAllPosts(['title', 'slug', 'order']);

  return { props: { post, allPosts: [] } };
}) satisfies GetStaticProps<{
  post: Post;
  allPosts: Post[];
}>;

export default function Page({
  post,
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const content = markdownToHtml(post?.content || '');

  console.log(content);

  return (
    <Layout
      slug={post.slug!}
      post={post}
      allPosts={allPosts}
    >
      <Article content={content} />
    </Layout>
  );
}

interface AboutProps {
  data: {};
  path: string;
}

const About = ({ data, path }: AboutProps) => {
  // const { html: content, frontmatter, fields } = data.markdownRemark;

  // const pageData = {
  //   ...frontmatter,
  //   ...fields,
  //   content
  // };

  return <div>hello</div>;

  // return (
  //   <LayoutBase
  //     path={path}
  //     pageData={pageData}>
  //     <Widget
  //       title="Презентации"
  //       items={presentationsData}
  //     />

  //     <Widget
  //       title="Профили на других сайтах"
  //       items={profilesData}
  //     />
  //   </LayoutBase>
  // );
};

// export default About;

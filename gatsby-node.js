const path = require('path');
const fs = require('fs');
const { promises: fsPromises } = require('fs');
const glob = require('tiny-glob');
const pLimit = require('p-limit');
const { createFilePath } = require('gatsby-source-filesystem');
const {
  allActualPostsQuery,
  allArchivedPostsQuery,
  allDraftsPostsQuery,
  allActualPagesQuery,
  allServicePagesQuery,
  allServicePagesDevQuery
} = require('./queries');

// https://www.gatsbyjs.org/tutorial/part-seven/

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const filePromise = new Promise((resolve, reject) => {
    if (!node.frontmatter.include) {
      resolve('');
      return;
    }

    fs.readFile(node.frontmatter.include, 'utf8', (err, data) => {
      if (err) reject(err);

      resolve(data);
    });
  });

  const filePath = createFilePath({ node, getNode, basePath: 'data/' }).replace(
    /^\/|\/$/g,
    ''
  );
  let date = null;
  let slug = '';
  let type = 'none';
  let isArchived = false;
  let isDraft = false;
  const includeContent = await filePromise;
  const regexp = new RegExp('(\\d{4}-\\d{2}-\\d{2})-(.*)');
  const urlParts = filePath.match(regexp);
  date = urlParts ? new Date(urlParts[1]) : null;
  slug = urlParts ? urlParts[2] : 'no-slug';

  if (filePath.startsWith('posts/')) {
    type = 'post';
  } else if (filePath.startsWith('pages/')) {
    type = 'page';
    slug = `pages/${slug}`;
  } else if (filePath.startsWith('service-pages/')) {
    slug = filePath.replace('service-pages/', '');
    type = 'service-page';
  } else {
    throw new Error('Unknow folder with markdown files');
  }

  if (filePath.includes('archive/')) {
    isArchived = true;
  }
  if (filePath.includes('drafts/')) {
    isDraft = true;
  }

  createNodeField({
    node,
    name: 'slug',
    value: slug
  });

  createNodeField({
    node,
    name: 'url',
    value: `/${slug}`
  });

  createNodeField({
    node,
    name: 'date',
    value: date
  });

  createNodeField({
    node,
    name: 'type',
    value: type
  });

  createNodeField({
    node,
    name: 'includeContent',
    value: includeContent
  });

  createNodeField({
    node,
    name: 'isArchived',
    value: isArchived
  });

  createNodeField({
    node,
    name: 'isDraft',
    value: isDraft
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // 3+ requests instead of one
  // need to get proper prev & next links
  const promises = [
    graphql(allActualPostsQuery),
    graphql(allArchivedPostsQuery),
    graphql(allActualPagesQuery),
    graphql(allServicePagesQuery)
  ];

  // Save drafts from leaking to build
  if (process.env.NODE_ENV === 'development') {
    promises.push(graphql(allServicePagesDevQuery));
    promises.push(graphql(allDraftsPostsQuery));
  }
  const results = await Promise.all(promises);

  results.forEach(result => {
    result.data.allMarkdownRemark.edges.forEach(params => {
      const { node, previous, next } = params;
      const { slug, date, url, type, includeContent, isArchived } = node.fields;

      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          // Prev & next will be available in pageContext
          // (not in fields)
          slug,
          date,
          url,
          type,
          includeContent,
          isArchived,
          previous,
          next
        }
      });
    });
  });
};

// https://github.com/gatsbyjs/gatsby/issues/17761#issuecomment-533816520
// Fix hosting static html (demos)
const express = require('express');

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('public'));
};

// Source: https://github.com/jmsv/gatsby-plugin-prettier-build/blob/master/gatsby-node.js
// was modified
exports.onPostBuild = async (_, opts = {}) => {
  const fileTypesToFormat = ['html'];
  const verbose = true;

  const [files] = await Promise.all([
    glob(`public/**/*.{${fileTypesToFormat.join(',')}}`)
  ]);

  const limit = pLimit(opts.concurrency || 20);
  let filesPrettified = 0;

  return Promise.all(
    files.map((filePath) =>
      limit(() =>
        prettifyFile(filePath, {}).then((done) => {
          if (done) {
            filesPrettified += 1;
          }
        })
      )
    )
  ).then(() => {
    if (verbose) {
      console.log(
        `✨ finished prettifying ${filesPrettified} Gatsby build file${
        filesPrettified ? 's' : ''
        }`
      );
    }
  });
};

const prettifyFile = async (filePath, prettierOpts) => {
  // Don't attempt format if not a file
  if (!(await fsPromises.lstat(filePath)).isFile()) return false;

  const fileBuffer = await fsPromises.readFile(filePath);

  // Clean up gatsby tails from final code
  const formatted = fileBuffer
    .toString()
    .replace(/ data-react-helmet="true"/g, '')
    .replace(/ id="___gatsby"/g, '')
    .replace(/style="outline:none" tabindex="-1" id="gatsby-focus-wrapper"/g, '')
    .replace(/<div id="gatsby-announcer"[^</]{0,}<\/div>/g, '');

  await fsPromises.writeFile(filePath, formatted);

  return true;
};

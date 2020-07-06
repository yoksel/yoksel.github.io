const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');

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
};

// order: ASC need for correct direction
// of post navigation
const allActualPostsQuery = `
query allActualPostsQuery {
  allMarkdownRemark(
    sort: {order: ASC, fields: fileAbsolutePath},
    filter: {fields: {
      type: {eq: "post"},
      isArchived: {ne: true}
    }}
  ) {
    edges {
      node {
        fields {
          slug
          date(formatString: "DD/MM/YYYY")
          url
          type
          includeContent
          isArchived
        }
      }
      next {
        frontmatter {
          title
        }
        fields {
          url
          type
          isArchived
        }
      }
      previous {
        frontmatter {
          title
        }
        fields {
          url
          type
          isArchived
        }
      }
    }
  }
}
`;

// order: ASC need for correct direction
// of post navigation
const allArchivedPostsQuery = `
query allArchivedPostsQuery {
  allMarkdownRemark(
    sort: {order: ASC, fields: fileAbsolutePath},
    filter: {fields: {
      type: {eq: "post"},
      isArchived: {eq: true}
    }}
  ) {
    edges {
      node {
        fields {
          slug
          date(formatString: "DD/MM/YYYY")
          url
          type
          includeContent
          isArchived
        }
      }
      next {
        frontmatter {
          title
        }
        fields {
          url
          type
          isArchived
        }
      }
      previous {
        frontmatter {
          title
        }
        fields {
          url
          type
          isArchived
        }
      }
    }
  }
}
`;

// order: ASC need for correct direction
// of post navigation
const allActualPagesQuery = `
query allActualPagesQuery {
  allMarkdownRemark(
    sort: {order: ASC, fields: fileAbsolutePath},
    filter: {fields: {
      type: {eq: "page"},
      isArchived: {ne: true}
    }}
  ) {
    edges {
      node {
        fields {
          slug
          date(formatString: "DD/MM/YYYY")
          url
          type
          includeContent
          isArchived
        }
      }
      next {
        frontmatter {
          title
        }
        fields {
          url
          type
          isArchived
        }
      }
      previous {
        frontmatter {
          title
        }
        fields {
          url
          type
          isArchived
        }
      }
    }
  }
}
`;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // 3 requests instead of one
  // need to get proper prev & next links
  const results = await Promise.all([
    graphql(allActualPostsQuery),
    graphql(allArchivedPostsQuery),
    graphql(allActualPagesQuery)
  ]);

  results.forEach(result => {
    result.data.allMarkdownRemark.edges.forEach(params => {
      const { node, previous, next } = params
      const { slug, date, url, type, includeContent, isArchived } = node.fields

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

  // })
};

// https://github.com/gatsbyjs/gatsby/issues/17761#issuecomment-533816520
// Fix hosting static html (demos)
const express = require('express')

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('public'));
};

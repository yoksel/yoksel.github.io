// order: ASC need for correct direction
// of post navigation
const sort = (
  `order: ASC,
  fields: fileAbsolutePath`
);

const nodeFields = (
  `slug
  date(formatString: "DD/MM/YYYY")
  url
  type
  includeContent
  isArchived
  isDraft`
);

const prevnext = (
  `next {
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
  }`
);

const allActualPostsQuery = `
query allActualPostsQuery {
  allMarkdownRemark(
    sort: {${sort}},
    filter: {fields: {
      type: {eq: "post"},
      isArchived: {ne: true},
      isDraft: {ne: true}
    }}
  ) {
    edges {
      node {
        fields {
          ${nodeFields}
        }
      }
      ${prevnext}
    }
  }
}
`;

const allArchivedPostsQuery = `
query allArchivedPostsQuery {
  allMarkdownRemark(
    sort: {${sort}},
    filter: {fields: {
      type: {eq: "post"},
      isArchived: {eq: true}
    }}
  ) {
    edges {
      node {
        fields {
          ${nodeFields}
        }
      }
      ${prevnext}
    }
  }
}
`;

const allDraftsPostsQuery = `
query allDraftsPostsQuery {
  allMarkdownRemark(
    sort: {${sort}},
    filter: {fields: {
      type: {eq: "post"},
      isDraft: {eq: true}
    }}
  ) {
    edges {
      node {
        fields {
          ${nodeFields}
        }
      }
      ${prevnext}
    }
  }
}
`;

const allActualPagesQuery = `
query allActualPagesQuery {
  allMarkdownRemark(
    sort: {${sort}},
    filter: {fields: {
      type: {eq: "page"},
      isArchived: {ne: true}
    }}
  ) {
    edges {
      node {
        fields {
          ${nodeFields}
        }
      }
      ${prevnext}
    }
  }
}
`;

const allServicePagesQuery = `
query allServicePagesQuery {
  allMarkdownRemark(filter: {frontmatter: {createPage: {eq: true}}}) {
    edges {
      node {
        fields {
          ${nodeFields}
        }
      }
    }
  }
}
`;
const allServicePagesDevQuery = `
query allServicePagesDevQuery {
  allMarkdownRemark(filter: {frontmatter: {createPageOnDev: {eq: true}}}) {
    edges {
      node {
        fields {
          ${nodeFields}
        }
      }
    }
  }
}
`;

module.exports = {
  allActualPostsQuery,
  allArchivedPostsQuery,
  allDraftsPostsQuery,
  allActualPagesQuery,
  allServicePagesQuery,
  allServicePagesDevQuery
};

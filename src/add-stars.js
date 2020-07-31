require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');

const projectsFilePath = 'src/data/meta/projects.json';
const apiUrl = 'https://api.github.com/graphql';
const token = process.env.GITHUB_TOKEN;

const queryToGithub = {
  query: `query($first: Int) {
    rateLimit {
      limit
      cost
      remaining
      resetAt
    }
    search(
      type: REPOSITORY,
      query: "user:yoksel is:public stars:>=10",
      first: $first
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
  `,
  variables: {
    first: 30
  }
};

const fetchGithubData = fetch(apiUrl, {
  headers: {
    authorization: token
  },
  method: 'POST',
  body: JSON.stringify(queryToGithub)
});

const readProjectsFile = new Promise((resolve) => {
  fs.readFile(projectsFilePath, 'utf8', (error, data) => {
    if (error) {
      throw new Error(error);
    }

    resolve(data);
   });
});

const getRepositoriesByName = (githubDataJson) => {
  const nodes = githubDataJson.data.search.edges;

  return nodes.reduce((prev, { node }) => {
    prev[node.name] = node.stargazers.totalCount;

    return prev;
  }, {});
};

const getFilesData = async () => {
  try {
    const data = await Promise.all([fetchGithubData, readProjectsFile]);
    const githubPromiseStatus = data[0].status;
    const githubPromiseStatusText = data[0].statusText;

    if (githubPromiseStatus < 200 || githubPromiseStatus > 300) {
      throw new Error(`Github API: ${githubPromiseStatus} ${githubPromiseStatusText}`);
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getStars = async () => {
  if (!token) {
    throw new Error('Auth token not found');
  }

  const filesData = await getFilesData();
  let repositoriesStars;
  let projectsJson = [];

  try {
    const githubDataJson = await filesData[0].json();
    repositoriesStars = getRepositoriesByName(githubDataJson);
  } catch (error) {
    throw new Error(`Github data JSON: ${error}`);
  }

  try {
    projectsJson = JSON.parse(filesData[1]);
  } catch (error) {
    throw new Error(`Projects JSON: ${error}`);
  }

  for (const project of projectsJson) {
    const projectUrlParts = project.url
      .replace(/\/$/, '')
      .split('/');
    const projectName = projectUrlParts[projectUrlParts.length - 1];
    const stars = repositoriesStars[projectName];

    if (stars) {
      project.stars = stars;
    }
  }

  fs.writeFile(projectsFilePath, JSON.stringify(projectsJson, null, '  '), (error) => {
    if (error) {
      throw new Error(`Write projects to file: ${error}`);
    }

    console.log('\n* Stars were added to projects *\n');
  });
};

getStars()
  .catch(error => {
    console.log(`${error}\n\n`);
  });

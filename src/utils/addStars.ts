import fs from 'fs';
import dotenv from 'dotenv';
// https://github.com/octokit/core.js#readme
import { Octokit } from 'octokit';
import { WidgetItem } from '../types';

dotenv.config();

// https://github.com/settings/tokens
// might expire soon, update if needed
const token = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

const PROJECTS_FILEPATH = 'data/meta/projects.json';

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
};

const fetchGithubData = async (): Promise<GithubResponseJson> => {
  return octokit.graphql(queryToGithub.query, { login: 'octokit', first: 30 });
};

const readProjectsFilePromise: Promise<string> = new Promise((resolve) => {
  fs.readFile(PROJECTS_FILEPATH, 'utf8', (error, data) => {
    if (error) {
      throw error;
    }

    resolve(data);
  });
});

interface GithubResponseJson {
  search: { edges: [{ node: { name: string; stargazers: { totalCount: number } } }] };
}

const getRepositoriesByName = (githubDataJson: GithubResponseJson) => {
  const nodes = githubDataJson.search.edges;

  return nodes.reduce((prev, { node }) => {
    prev[node.name] = node.stargazers.totalCount;

    return prev;
  }, {} as RepositoriesStars);
};

interface FilesData {
  githubResponse: GithubResponseJson;
  projectsFile: any;
}

const getFilesData = async (): Promise<FilesData | undefined> => {
  try {
    const [githubResponse, projectsFile] = await Promise.all([
      fetchGithubData(),
      readProjectsFilePromise,
    ]);

    if ('errors' in githubResponse && githubResponse?.errors) {
      const error = (githubResponse as { errors: [{ type: string; message: string }] })
        ?.errors?.[0];
      throw new Error(`Github API: ${error?.type} ${error?.message}`);
    }

    return { githubResponse, projectsFile };
  } catch (error) {
    throw new Error(`Error in getFilesData():\n${error}`);
  }
};

interface RepositoriesStars {
  [key: string]: number;
}

const getStars = async () => {
  if (!token) {
    throw new Error('Auth token not found');
  }

  const filesData = await getFilesData();
  const { githubResponse, projectsFile } = filesData || {};

  if (!githubResponse) {
    throw new Error(`No github response`);
  }

  let repositoriesStars = getRepositoriesByName(githubResponse);
  let projectsJson: WidgetItem[] = [];

  try {
    projectsJson = JSON.parse(projectsFile as string);
  } catch (error) {
    throw new Error(`Projects JSON: ${error}`);
  }

  for (const project of projectsJson) {
    const projectUrlParts = project.href.replace(/\/$/, '').split('/');
    const projectName = projectUrlParts[projectUrlParts.length - 1];
    const stars = repositoriesStars[projectName];

    if (stars) {
      project.stars = stars;
    }
  }

  fs.writeFile(PROJECTS_FILEPATH, JSON.stringify(projectsJson, null, '  '), (error) => {
    if (error) {
      throw new Error(`Write projects to file: ${error}`);
    }

    console.log('\n* Stars were added to projects *\n');
  });
};

getStars().catch((error) => {
  console.log(`${error}\n\n`);
});

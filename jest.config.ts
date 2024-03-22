// jest.config.js
import nextJest from 'next/jest';

/**
 * @see https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
 */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

/**
 * @see https://jestjs.io/docs/configuration
 */
const jestConfig = {
  // The directory where Jest should store its cached dependency information.
  cacheDirectory: '.jest',

  /**
   * Automatically clears all information stored in the mockFn.mock.calls, mockFn.mock.instances and mockFn.mock.results arrays before every test.
   * Often this is useful when you want to clean up a mocks usage data between two assertions.
   * Beware that this will replace mockFn.mock, not just these three properties!
   * You should, therefore, avoid assigning mockFn.mock to other variables, temporary or not, to make sure you don't access stale data.
   *
   * @see https://jestjs.io/docs/configuration#clearmocks-boolean
   * @see https://jestjs.io/docs/jest-object#jestclearallmocks
   * @see https://jestjs.io/docs/mock-function-api#mockfnmockclear
   */
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: '.coverage',

  // A list of reporter names that Jest uses when writing coverage reports. Any istanbul reporter can be used.
  coverageReporters: ['text', 'lcov'],

  // The list of directories that should be included in the coverage report
  collectCoverageFrom: [
    './src/**',
    // Excluded from code coverage
    '!src/pages/**',
  ],

  /**
   * This will be used to configure minimum threshold enforcement for coverage results.
   * Thresholds can be specified as global, as a glob, and as a directory or file path.
   * If thresholds aren't met, jest will fail.
   * Thresholds specified as a positive number are taken to be the minimum percentage required.
   * Thresholds specified as a negative number represent the maximum number of uncovered entities allowed.
   */
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },

  // A preset that is used as a base for Jest's configuration.
  preset: 'ts-jest',

  // A list of paths to directories that Jest should use to search for files in.
  roots: ['<rootDir>/src'],

  // The glob patterns Jest uses to detect test files.
  testMatch: ['**/?(*.)+(test).+(ts|tsx)'],

  verbose: true,

  // Required for React Testing Library
  testEnvironment: 'jest-environment-jsdom',

  // setupFiles: ['<rootDir>/test/config/setEnvVars.ts', '<rootDir>/test/mocks/text-utils.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const config = createJestConfig(jestConfig);

export default config;

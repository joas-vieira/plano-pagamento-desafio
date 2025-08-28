import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '@modules/(.*)$': ['<rootDir>/src/modules/$1'],
    '@common/(.*)$': ['<rootDir>/src/common/$1'],
  },
  transform: { '^.+\\.ts$': 'ts-jest' },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;

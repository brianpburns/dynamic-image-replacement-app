const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ...moduleNameMapper,
    'package.json': '<rootDir>/package.json',
  },
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  },
  testMatch: ['**/?(*.)+(test).(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/lib'],
  coveragePathIgnorePatterns: ['mocks', 'node_modules'],
};


const path = require('path')
module.exports = {
  jest: function(config) {
    config.collectCoverageFrom = ['client/**/*.{js,jsx,ts,tsx}', '!client/**/*.d.ts'];
    config.testMatch = [
      '<rootDir>/client/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/client/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ];
    config.roots = ['<rootDir>/client'];
    return config;
  },

  // The paths config
  paths: function(paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'client/index.tsx');
    paths.appSrc = path.resolve(__dirname, 'client');
    return paths;
  },
};
module.exports = {
  // Enable verbose mode with proper reporting. Can be disabled for tighter
  // output.
  // See: https://facebook.github.io/jest/docs/en/configuration.html#verbose-boolean
  verbose: true,

  // The default test environment for Jest since v27.0.1 is Node which means
  // that we don't have access to the DOM anymore that was provided by jsdom.
  // https://github.com/facebook/jest/pull/9874
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },

  // We need to specify the components folder in particular. If we resolve the
  // generic folder with a regex (e.g. ~(.*)$), this will interfere with Jest
  // in watch mode and it will run all tests, not just the ones that have
  // changes.
  moduleNameMapper: {
    "~/components/(.*)$": "<rootDir>/src/components/$1",
    "~/helpers/(.*)$": "<rootDir>/src/helpers/$1",
  },
};

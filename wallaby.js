module.exports = wallaby => {
  process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

  const compiler = wallaby.compilers.babel();
  return {
    files: ['!src/**/*.spec.js', 'src/**/*', 'package.json', 'tsconfig.json'],
    tests: ['src/**/*.spec.js'],

    preprocessors: {
      '**/*.js': compiler,
      '**/*.vue': require('wallaby-vue-compiler')(compiler)
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    setup(wallaby) {
      const Vue = require('vue');
      Vue.config.productionTip = false;
      const jestConfig = require('./package').jest || require('./jest.config');
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest'
  };
};

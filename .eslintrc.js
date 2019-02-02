module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    test: true,
    expect: true,
  },
  rules: {
    'no-bitwise': 0,
    'import/prefer-default-export': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
  },
};

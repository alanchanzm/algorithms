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
  },
};

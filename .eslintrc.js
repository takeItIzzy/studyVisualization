module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    'jsx-control-statements/jsx-control-statements': true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-control-statements/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react'
    // 'plugin:jest/recommended',
    // 'jest-enzyme'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-control-statements',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': 1,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    eqeqeq: ['warn', 'always'],
    'prefer-const': [
      'error',
      { destructuring: 'all', ignoreReadBeforeAssign: true }
    ],
    '@typescript-eslint/indent': [
      'off',
      2,
      { VariableDeclarator: 0, SwitchCase: 1 }
    ],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-triple-slash-reference': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'always', types: 'never', lib: 'never' }
    ],
    // React相关校验规则
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'jsx-control-statements/jsx-use-if-tag': 0
  }
};

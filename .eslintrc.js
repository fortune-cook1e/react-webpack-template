module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    }
  },
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: '2017',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-var-requires': 0,

    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': 'off',
    'react-hooks/rules-of-hooks': 1,
    'react/no-string-refs': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react/self-closing-comp': 2,
    'react/jsx-max-props-per-line': [2, { maximum: 3 }],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-newline': 2,
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-pascal-case': 1,
    'react/jsx-props-no-multi-spaces': 2
  }
}

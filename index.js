module.exports = {
  extends: [
    '@benestudioco/eslint-config-benestudio',
    require.resolve('./rules/base'),
    require.resolve('./rules/typescript'),
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
  ignorePatterns: ['build/*'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};

module.exports = {
  extends: [
    '@benestudioco/eslint-config-benestudio',
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
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};

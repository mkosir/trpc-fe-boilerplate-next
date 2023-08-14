/** @type {import("eslint").Linter.Config} */

module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },

  plugins: ['@typescript-eslint', 'import'],

  extends: [
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    'prefer-template': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',

    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: { regex: '^T[A-Z]', match: true },
      },
    ],

    'import/no-default-export': 'error',
  },

  overrides: [
    {
      files: ['src/**/*.stories.*', 'src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  ignorePatterns: [
    '!.*',
    'node_modules',
    '.next',
    'dist',
    'compiled',
    'build-next-static',
    'api-types',
    'next-env.d.ts',
  ],

  settings: { react: { version: 'detect' } },
};

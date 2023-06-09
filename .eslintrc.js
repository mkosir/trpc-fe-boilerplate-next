/** @type {import("eslint").Linter.Config} */

module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: ['./tsconfig.json'],
  },

  plugins: ['@typescript-eslint', 'import'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
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
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],

    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },

  overrides: [
    {
      files: ['ProcessEnv.d.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
      },
    },
    {
      files: ['src/**/*.stories.*', 'src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  ignorePatterns: ['!.*', 'node_modules', '.next', 'dist', 'compiled', 'next-env.d.ts'],

  settings: {
    'import/resolver': {
      typescript: { project: 'tsconfig.json' },
    },
    react: {
      version: 'detect',
    },
  },
};

// eslint.config.mjs
import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'none',
          printWidth: 80
        }
      ]
    }
  }
];

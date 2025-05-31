import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

const plugin = {
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': 'error',
    'indent': ['error', 2],
    'camelcase': 'error',
    'arrow-parens': ['error', 'always'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
    'func-call-spacing': ['error', 'never'],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'prefer-const': 'error',
    'no-var': 'error',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'prefer-template': 'error',
    'prefer-arrow-callback': 'error'
  }
};



export default defineConfig([
  plugin,
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
]);

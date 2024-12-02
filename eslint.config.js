const { configs } = require('@typescript-eslint/eslint-plugin');
const { parser } = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['./src/**/*.ts'], // 명시적으로 src 디렉토리의 모든 .ts 파일을 지정
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      ...configs.recommended.rules,
      'prettier/prettier': 'error',
      'import/no-anonymous-default-export': 'off',
      'prefer-const': 'off',
    },
  },
];
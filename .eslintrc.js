module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  rules: {
    // any 타입 금지
    '@typescript-eslint/no-explicit-any': 'error',
    // unknown 타입 금지
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    // undefined 반환 금지
    '@typescript-eslint/no-undefined-return': 'error',
    // 명시적 타입 정의 필요
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    // 미사용 변수 금지
    '@typescript-eslint/no-unused-vars': ['error', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    // 엄격한 null 체크
    '@typescript-eslint/strict-null-checks': 'error'
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  }
};
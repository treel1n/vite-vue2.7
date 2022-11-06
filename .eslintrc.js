module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    // override/add rules settings here, such as:
    'vue/multi-word-component-names': 0,
    'vue/comment-directive': 0,
    'vue/v-on-event-hyphenation': [
      'warn',
      'always',
      {
        autofix: true,
        ignore: []
      }
    ],
    'vue/require-default-prop': 0,
    'vue/no-unused-vars': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-useless-escape': 2,
    'no-async-promise-executor': 2,
    'no-empty-pattern': 2,
    'no-irregular-whitespace': 2,
    'vue/no-v-html': 0, //关闭v-html xss警告
    'prettier/prettier': [
      'error',
      // 针对会被 ESLint 格式化的文件类型，Prettier 会作为 ESLint 的一个规则运行并格式化文件，因此需要添加如下配置
      {
        singleQuote: true,
        endOfLine: 'auto'
      }
    ]
  }
}

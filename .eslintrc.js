/*
  * 0: off
  * 1: warn
  * 2: error 
*/
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    // 'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': [1, 'single'], // 引号约定
    'camelcase': [1, { properties: 'always' }], // 骆驼拼写法命名约定
    'semi-style': ['error', 'last'], // 强制分号的位置
    'semi': [1, 'always'],// 要求或禁止使用分号代替 ASI
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};

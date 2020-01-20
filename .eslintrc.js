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
    `plugin:vue/essential`,
    `eslint:recommended`
  ],
  rules: {
    'no-console': process.env.NODE_ENV === `production` ? `error` : `off`,
    'no-debugger': process.env.NODE_ENV === `production` ? `error` : `off`,
    'quotes': [1,`backtick`], // 引号约定
    'camelcase': [1,{properties: `always`}], // 骆驼拼写法命名约定
  },
  parserOptions: {
    parser: `babel-eslint`,
    ecmaVersion: 2018,
    sourceType: `module`
  }
}

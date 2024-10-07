/* eslint-disable no-undef */
module.exports = {
  extends: '@cybozu/eslint-config/presets/kintone-customize-es5-prettier', // @cybozuではなく、一般的な設定に変更
  rules: {
    'max-statements': ['warn', 200],
    semi: ['error', 'always'],
  },
  parserOptions: {
    ecmaVersion: 6, // ES6構文を許可
  },
  globals: {
    kintone: 'readonly',
  },
};

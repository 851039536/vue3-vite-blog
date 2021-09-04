/*
 * @Author: your name
 * @Date: 2021-09-04 09:13:13
 * @LastEditTime: 2021-09-04 11:01:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\.eslintrc.js
 */
//.eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    //在此处写规则
    'no-unused-vars': 0, // 定义未使用的变量
    "prettier/prettier": "off", //关闭prettier的提示
  },


};
//.eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'vue-global-api'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    //在此处写规则
    'no-unused-vars': 0, // 定义未使用的变量
    "prettier/prettier": "off", //关闭prettier的提示
  },
  globals: {
    defineProps: true,
    defineEmits: true,
    useRoute: true,
    useRouter: true,
    axios: true
  }

};
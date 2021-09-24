/*
 * @Author: your name
 * @Date: 2021-09-04 08:39:20
 * @LastEditTime: 2021-09-24 10:01:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\main.ts
 */
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from '@/App.vue'
import './index.css'

// v-md
// import VueMarkdownEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/base-editor.css';

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// vuepress github 主题
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import '@kangc/v-md-editor/lib/theme/style/github.css';

import Prism from 'prismjs';
//import hljs from 'highlight.js';

VMdPreview.use(vuepressTheme, {
  Prism,
  //Hljs: hljs,
  // extend(md) {
  //   // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
  //   // md.set(option).use(plugin);
  // },
});
//  end v-md


import 'ant-design-vue/dist/antd.css';
import router from './router/index'
import store from './store/index'
import axios from './api/http/axios'

// use
const app = createApp(App);
app.use(VMdPreview);
app.use(Antd);
app.use(router)
app.use(store);
// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$api = axios
app.mount("#app");


import { createApp } from 'vue'
import App from '@/App.vue'
import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/notification/style/css'
import 'virtual:windi.css'
import 'nprogress/nprogress.css'

// v-md
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// vuepress github 主题
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VMdPreview.use(vuepressTheme, {
  Prism,

});
//  end v-md

import router from './router/index'
import store from './store/index'

// use
const app = createApp(App);
app.use(VMdPreview);
app.use(router)
app.use(store);
app.mount("#app");

/*
 * @Author: your name
 * @Date: 2021-09-04 08:39:20
 * @LastEditTime: 2021-09-04 09:30:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\main.ts
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import './index.css'
import router from './router/index'
import store from './store/index'
import axios from './api/axios'
// use
const app = createApp(App);
app.use(router)
app.use(store);
// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$api = axios
app.mount("#app");

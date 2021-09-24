/*
 * @Author: your name
 * @Date: 2021-09-04 08:39:20
 * @LastEditTime: 2021-09-24 10:01:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\env.d.ts
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_DOMAIN: string,
}


declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
// declare module 'axios';
declare module 'qs';

declare module '@kangc/v-md-editor';
declare module 'prismjs';

declare module '@kangc/v-md-editor/lib/theme/hljs';
declare module '@kangc/v-md-editor/lib/plugins/line-number/index';
declare module '@kangc/v-md-editor/lib/preview';
declare module '@kangc/v-md-editor/lib/theme/vuepress.js';
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
declare module 'nprogress';
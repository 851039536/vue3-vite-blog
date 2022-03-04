/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_DOMAIN: string,
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
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
declare module 'highlight.js/lib/core'
declare module 'highlight.js/lib/languages/csharp'
declare module 'highlight.js/lib/languages/css'
declare module '@kangc/v-md-editor/lib/plugins/highlight-lines/index'
declare module 'highlight.js/lib/languages/javascript'
declare module 'highlight.js/lib/languages/typescript'
declare module '@kangc/v-md-editor/lib/plugins/copy-code/index'
declare module '@kangc/v-md-editor/lib/theme/github.js'
declare module 'highlight.js/lib/languages/bash'
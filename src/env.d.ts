/*
 * @Author: your name
 * @Date: 2021-09-04 08:39:20
 * @LastEditTime: 2021-09-04 10:53:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\env.d.ts
 */
/// <reference types="vite/client" />


declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
// declare module 'axios';
declare module 'qs';

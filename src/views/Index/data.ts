/*
 * @Author: your name
 * @Date: 2021-10-27 13:55:07
 * @LastEditTime: 2021-10-27 14:29:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\Index\data.ts
 */

import { reactive } from "@vue/runtime-dom";

interface State {
  resultData: any;
  count: number;
  page: number; //页码
  pagesize: number; //每页条数
  ipuName: string;
  tagsData: any
  tagsCount: number
  classifyCount: number
}
const state: State = reactive({
  resultData: [],
  count: 0,
  page: 1, //页码
  pagesize: 5, //每页条数
  ipuName: '',
  tagsData: [],
  tagsCount: 0,
  classifyCount: 0,
});

export {
  state
}
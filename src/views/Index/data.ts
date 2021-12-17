/*
 * @Author: your name
 * @Date: 2021-10-27 13:55:07
 * @LastEditTime: 2021-10-29 15:25:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\Index\data.ts
 */

import { reactive } from "@vue/runtime-dom";

interface State {
  resultData: any;
  classifyData: any;
  count: number;
  page: number; //页码
  pagesize: number; //每页条数
  ipuName: string;
  tagsData: any
  tagsCount: number
  classifyCount: number,
  navStr: string
  current: number
}
const state: State = reactive({
  resultData: [],
  classifyData: [],
  count: 0,
  page: 1, //页码
  pagesize: 8, //每页条数
  ipuName: '',
  tagsData: [],
  tagsCount: 0,
  classifyCount: 0,
  navStr: 'ALL',
  current: 1
});

export {
  state
}
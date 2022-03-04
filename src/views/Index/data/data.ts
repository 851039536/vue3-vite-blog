import { reactive } from "@vue/runtime-dom";

interface State {
  resultData: any;
  classifyData: any;
  count: number;
  page: number; //页码
  pagesize: number; //每页条数
  ipuName: string;
  classifyCount: number,
  navStr: string
  current: number
}
const state: State = reactive({
  resultData: [],
  classifyData: [],
  count: 0,
  page: 1, //页码
  pagesize: 11, //每页条数
  ipuName: '',
  classifyCount: 0,
  navStr: 'ALL',
  current: 1
});

export {
  state
}
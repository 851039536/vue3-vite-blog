interface State {
  resData: any;
  resClassify: any;
  count: number;
  page: number;
  pagesize: number;
  ipuName: string;
  classifyCount: number,
  navStr: string
  current: number
}

const state: State = reactive({
  resData: [],
  resClassify: [],
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
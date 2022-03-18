interface State {
  resData: any;
  resClassify: any;
  resClassifyType: any;
  resTag: any,
  count: number;
  page: number;
  pagesize: number;
  ipuName: string;
  typeStr: string,
  ztypeStr: string,
  tagStr: string,
  current: number
}

const state: State = reactive({
  resData: [],
  resClassify: [],
  resClassifyType: [],
  resTag: [],
  count: 0,
  page: 1, //页码
  pagesize: 9, //每页条数
  ipuName: '',
  typeStr: '所有分类',
  ztypeStr: '所有子分类',
  tagStr: '所有标签',
  current: 1
});

export {
  state
}
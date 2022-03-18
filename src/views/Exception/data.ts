// import { ExceptionType } from "@/api/data/interData"

export const formState: any = reactive({
  id: 0,
  name: '',
  issue: '',
  particulars: '',
  create_time: '',
  identity: 0,
  reply: '',
  phone: '',
  typeId: 1
})

export const state: any = reactive({
  count: 0,
  page: 1, //页码
  pagesize: 8, //每页条数
  current: 1,
  visible: false
})


export const resData: any = reactive({
  resultData: [],
  resultData3: []
})

export const resAccomplish: any = ref([])
export const resExPending: any = ref([])
export const resType: any = ref([])
export const setStr: any = ref('所有分类')
import { Classify, ClassifyType } from "@/api/data/interData"

interface State {
  resData?: any,
  classTypeId: number,
}
const state: State = reactive({
  resData: [],
  classTypeId: 0,
})
export const classifyState: Classify = reactive({
  id: 0,
  name: '',
})
export const classifyTypeState: ClassifyType = reactive({
  id: 0,
  name: '',
  classifyId: 0,
})

export const resClassifyType: any = ref([])
export const resClassify: any = ref([])
export const invisible = ref<boolean>(false)
export const quVisible = ref<boolean>(false)
export const quVisible2 = ref<boolean>(false)
export const edVisible = ref<boolean>(false)
const columns = [
  { title: '名称', width: 40, dataIndex: 'name', key: 'id' },

  {
    title: '主键',
    dataIndex: 'id',
    width: 40,
    align: 'center'
  },
  {
    title: '操作',
    key: '子类',
    align: 'center',
    width: 10,
    slots: { customRender: 'qu' } // 绑定插槽
  },
  {
    title: '操作',
    key: '编辑',
    align: 'center',
    width: 10,
    slots: { customRender: 'ed' } // 绑定插槽
  },
  {
    title: '操作',
    key: '删除',
    width: 10,
    align: 'center',
    slots: { customRender: 'de' } // 绑定插槽
  }
]

export { columns, state }

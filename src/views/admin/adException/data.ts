import { Snippet as s } from "@/api/data/interData"

interface State {
  resData: any,
  auditStr: string,
  typeStr: string,
  visible: boolean,
  checked1: boolean
  checked2: boolean
}
const state: State = reactive({
  resData: [],
  auditStr: '未审核',
  typeStr: '所有分类',
  visible: false,
  checked1: false,
  checked2: false
})
const resType: any = ref([])
const resTag: any = ref([])

const formState: s = reactive({
  id: 0,
  name: '',
  text: '',
  typeId: 0,
  tagId: 0,
  userId: 0,
})
const columns = [
  { title: '主键', width: 10, dataIndex: 'id', key: 'id', fixed: 'left', align: 'center', ellipsis: true },
  {
    title: '提问人',
    dataIndex: 'name',
    width: 20,
    align: 'center'
  },
  {
    title: '审核人',
    dataIndex: 'auditor',
    width: 20,
    align: 'center',
    ellipsis: true
  },
  {
    title: '问题',
    dataIndex: 'issue',
    width: 40,
    align: 'center'
  },
  {
    title: '审核',
    dataIndex: 'identity',
    width: 10,
    align: 'center'
  },

  {
    title: '联系电话',
    dataIndex: 'phone',
    width: 20,
    align: 'center'
  },
  {
    title: '类别',
    dataIndex: 'exceptionTypes.name',
    width: 20,
    align: 'center',
    ellipsis: true
  },

  {
    title: '提问时间',
    dataIndex: 'createTime',
    width: 30,
    align: 'center',
    ellipsis: true
  },
  {
    title: '回复时间',
    dataIndex: 'updateTime',
    width: 30,
    align: 'center',
    ellipsis: true
  },

  {
    title: '操作',
    key: '编辑',
    width: 20,
    fixed: 'right',
    align: 'center',
    slots: { customRender: 'ed' } // 绑定插槽
  },
  {
    title: '操作',
    key: '删除',
    width: 20,
    fixed: 'right',
    align: 'center',
    slots: { customRender: 'de' } // 绑定插槽
  }
]

export { columns, state, formState, resType, resTag }

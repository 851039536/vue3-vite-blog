import { Snippet as s } from "@/api/data/interData"

interface State {
  resData: any,
  userStr: string,
  typeStr: string,
  order: boolean
}
const state: State = reactive({
  resData: [],
  userStr: '所有用户',
  typeStr: '所有分类',
  order: true
})
const resUser: any = ref([])
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
  { title: '标题', width: 40, dataIndex: 'name', key: 'id', fixed: 'left', ellipsis: true },
  {
    title: '用户',
    dataIndex: 'users.nickname',
    width: 20,
    align: 'center'
  },
  {
    title: '分类',
    dataIndex: 'types.name',
    width: 20,
    align: 'center'
  },
  {
    title: '标签',
    dataIndex: 'tags.name',
    width: 20,
    align: 'center'
  },

  {
    title: '主键',
    dataIndex: 'id',
    width: 20,
    align: 'center'
  },
  {
    title: '片段',
    dataIndex: 'text',
    width: 50,
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

export { columns, state, formState, resUser, resType, resTag }

import { IntSnippet } from "@/api/data/interData"

const state: any = reactive({
  dataResult: [],
  resType: [],
  resTag: [],
  userResult: [],
  labelStr: 'ALL',
  order: true
})

const formState: IntSnippet = reactive({
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
    title: '标签',
    dataIndex: 'tags.name',
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
    title: '用户',
    dataIndex: 'users.nickname',
    width: 20,
    align: 'center'
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

export { columns, state, formState }

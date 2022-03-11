interface State {
  resData: [],
  labelStr: string,
  order: boolean
}

export const state: State = reactive({
  resData: [],
  labelStr: 'ALL',
  order: true
})

export const resTag: any = ref([])
export const resUser: any = ref([])
export const resClassify: any = ref([])

export const columns = [
  { title: '标题', width: 50, dataIndex: 'title', key: 'title', fixed: 'left', ellipsis: true },
  {
    title: '用户',
    dataIndex: 'user.nickname',
    width: 20,
    align: 'center'
  },
  {
    title: '分类',
    dataIndex: 'classify.name',
    width: 30,
    align: 'center'
  },

  {
    title: '标签',
    dataIndex: 'tag.name',
    width: 30,
    align: 'center'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 55,
    align: 'center'
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    width: 55,
    align: 'center'
  },

  {
    title: '操作',
    key: '编辑',
    width: 25,
    fixed: 'right',
    align: 'center',
    slots: { customRender: 'ed' } // 绑定插槽
  },
  {
    title: '操作',
    key: '删除',
    width: 25,
    fixed: 'right',
    align: 'center',
    slots: { customRender: 'de' } // 绑定插槽
  }
]

export const formState: any = reactive({
  id: 0,
  title: '标题',
  content: '',
  description: "描述",
  createTime: '2021-11-13T03:18:19.821Z',
  updateTime: '2021-11-13T03:18:20.821Z',
  userId: 0,
  classifyId: 1,
  tagId: 10
})



const state: any = reactive({
  dataResult: [],
  labelStr: 'ALL',
})

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

const formState: any = reactive({
  id: 0,
  name: '',
})

export { columns, state, formState }

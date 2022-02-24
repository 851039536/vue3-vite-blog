
import { IntSoftware } from "@/api/data/interData";

const state: any = reactive({
  dataResult: [],
  classifyResult: [],
  tagResult: [],
  userResult: [],
  labelStr: 'ALL',
  order: true
})

const columns = [
  { title: '标题', width: 60, dataIndex: 'name', key: 'name', fixed: 'left', ellipsis: true },
  {
    title: '格式/版本',
    dataIndex: 'version',
    width: 30,
    align: 'center'
  },
  {
    title: '分类',
    dataIndex: 'classifyName',
    width: 30,
    align: 'center'
  },

  {
    title: '描述',
    dataIndex: 'description',
    ellipsis: true, //超过宽度省略...
    width: 50,
    align: 'center'
  },
  {
    title: '发布人',
    dataIndex: 'author.nickname',
    width: 30,
    align: 'center'
  },
  {
    title: '路径',
    dataIndex: 'relativePath',
    ellipsis: true,
    width: 100,
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

const formState: IntSoftware = reactive({
  id: 0,
  name: '标题',
  version: '版本',
  classifyName: "分类",
  description: "描述",
  createTime: '2021-11-13T03:18:19.821Z',
  updateTime: '2021-11-13T03:18:20.821Z',
  relativePath: "路径",
  authorId: 0,
})

export { columns, state, formState }

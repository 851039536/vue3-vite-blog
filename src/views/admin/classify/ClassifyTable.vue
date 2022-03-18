<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state, classifyState, resClassifyType, quVisible, invisible, edVisible } from './data'
import { classify, classifyType } from '@/api'
import { navName } from '../utils/data'
import ClQuType from './components/ClQuType.vue'
import ClInType from './components/ClInType.vue'
import ClEdType from './components/ClEdType.vue'

const reload: any = inject('reload')

const showModal = () => {
  invisible.value = true
  classifyState.name = ''
}
const confirm = async (data: any) => {
  await classify.Delete(data.id).then((res) => {
    if (res.data.succeeded) {
      message.success('删除成功')
      reload()
    }
  })
}
const cancel = () => {
  message.info('已取消')
}
const edit = (id: number) => {
  classify.GetById(id).then((res) => {
    classifyState.name = res.data.data.name
    classifyState.id = res.data.data.id
  })
  edVisible.value = true
}

const quit = async (id: any) => {
  quVisible.value = true
  state.classTypeId = id
  await classifyType.GetFy(3, state.classTypeId, 1, 100).then((res) => {
    resClassifyType.value = res.data.data.items
  })
}

onMounted(async () => {
  await classify.GetAll().then((res) => {
    state.resData = res.data.data
  })
  navName.name = '文章'
  navName.name2 = '分类管理'
})
</script>
<template>
  <section>
    <div class="flex table-operations">
      <div>
        <a-button @click="showModal">添加</a-button>
      </div>
      <div>
        <a-button @click="reload()">刷新</a-button>
      </div>
    </div>
    <div>
      <a-table
        size="small"
        :bordered="true"
        :columns="columns"
        rowKey="id"
        :data-source="state.resData"
        :pagination="{ pageSize: 12 }"
        :scroll="{ y: 390 }"
      >
        <template #qu="{ record }">
          <a ghost @click="quit(record.id)">子类</a>
        </template>
        <template #ed="{ record }">
          <a type="primary" ghost @click="edit(record.id)">编辑</a>
        </template>
        <template #de="{ record }">
          <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="confirm(record)" @cancel="cancel">
            <a href="#">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>

    <cl-qu-type></cl-qu-type>
    <cl-in-type></cl-in-type>
    <cl-ed-type></cl-ed-type>
  </section>
</template>

<style lang="scss" scoped>
.table-operations {
  @apply bg-gray-100 p-1;
  div {
    @apply ml-1;
  }
}
</style>

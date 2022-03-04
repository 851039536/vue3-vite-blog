<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state } from './data'
import { snippet, user } from '@/api'
import { routers, routerId } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'

const reload: any = inject('reload')
const Deletes = async (entity: any) => {
  if (entity.users.id === storage.get('id')) {
    await snippet.Delete(entity.id).then(() => {
      message.success('删除成功')
      reload()
    })
  } else {
    message.success('无权限!')
  }
}
const cancel = () => {
  message.info('已取消')
}

const Edit = (record: any) => {
  if (record.users.id === storage.get('id')) {
    routerId('/Admin-index/SnippetEdit', record.id)
  } else {
    message.success('无权限!')
  }
}

async function GetContains(entity: any) {
  if (entity.data === null && state.labelStr === 'ALL') {
    await QueryFyAll(true)
  } else if (state.labelStr === 'ALL') {
    state.dataResult = await (await snippet.GetContains(0, 'null', entity.data)).data.data.items
  } else {
    state.dataResult = await (await snippet.GetContains(3, state.labelStr, entity.data)).data.data.items
  }
}
async function GetUsers() {
  if (state.labelStr === 'ALL') {
    await QueryFyAll(true)
  } else {
    state.dataResult = await (await snippet.GetFy(2, state.labelStr, 1, 1000, true)).data.data.items
  }
}
async function Ordering() {
  if (state.order) {
    await QueryFyAll(true)
    state.order = false
  } else {
    await QueryFyAll(false)
    state.order = true
  }
}

/**查询分页所有 */
async function QueryFyAll(order: boolean) {
  state.dataResult = await (await snippet.GetFy(0, 'null', 1, 1000, order)).data.data.items
}
onMounted(async () => {
  await QueryFyAll(true)
  state.userResult = await (await user.info(1, 100, true)).data.data
  navName.name = '代码片段'
  navName.name2 = '片段管理'
})
</script>
<template>
  <section>
    <div class="flex table-operations">
      <div>
        <a-button @click="routers('/Admin-index/SnippetAdd')">添加</a-button>
      </div>
      <div>
        <a-button @click="reload()">刷新</a-button>
      </div>
      <div>
        <a-select ref="select" v-model:value="state.labelStr" @change="GetUsers">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option :value="res.nickname" v-for="res in state.userResult" :key="res.id">{{
            res.nickname
          }}</a-select-option>
        </a-select>
      </div>

      <div>
        <a-input-search placeholder="标题搜索" style="width: 200px" @change="GetContains" />
      </div>
      <div>
        <a-button @click="Ordering()">排序</a-button>
      </div>
    </div>
    <div>
      <a-table
        size="small"
        :bordered="true"
        :columns="columns"
        rowKey="id"
        :data-source="state.dataResult"
        :pagination="{ pageSize: 12 }"
        :scroll="{ x: 1280, y: 420 }"
      >
        <template #ed="{ record }">
          <a type="primary" ghost @click="Edit(record)">编辑</a>
        </template>
        <template #de="{ record }">
          <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="Deletes(record)" @cancel="cancel">
            <a href="#">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
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

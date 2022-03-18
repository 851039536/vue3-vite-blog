<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state, resUser, resType } from './data'
import { snippet, user, snippetType } from '@/api'
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

async function GetContain(entity: any) {
  if (entity.data === null && state.userStr === '所有用户') {
    await QueryFyAll(true)
  } else if (state.userStr === '所有用户' && state.typeStr === '所有分类') {
    state.resData = await (await snippet.GetContain(0, 'null', entity.data)).data.data.items
  } else {
    state.resData = await (
      await snippet.GetContain(4, state.userStr + ',' + state.typeStr, entity.data)
    ).data.data.items
  }
}

/**
 * 选择框条件查询
 * @param key 分类
 */
async function GetType(key: number) {
  switch (key) {
    case 1:
      if (state.userStr === '所有用户' && state.typeStr === '所有分类') {
        await QueryFyAll(true)
      } else {
        state.resData = await (await snippet.GetFy(2, state.userStr, 1, 1000, true)).data.data.items
      }
      break
    case 2:
      if (state.typeStr === '所有分类' && state.userStr === '所有用户') {
        await QueryFyAll(true)
      } else if (state.userStr === '所有用户') {
        state.resData = await (await snippet.GetFy(1, state.typeStr, 1, 1000, true)).data.data.items
      } else {
        state.resData = await (
          await snippet.GetFy(4, state.userStr + ',' + state.typeStr, 1, 1000, true)
        ).data.data.items
      }
      break
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
  state.resData = await (await snippet.GetFy(0, 'null', 1, 1000, order)).data.data.items
}
onMounted(async () => {
  await QueryFyAll(true)
  resUser.value = await (await user.info(1, 100, true)).data.data
  resType.value = await (await snippetType.GetFy(1, 100)).data.data.items
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
        <a-select ref="select" v-model:value="state.userStr" style="width: 105px" @change="GetType(1)">
          <a-select-option value="所有用户">所有用户</a-select-option>
          <a-select-option :value="res.nickname" v-for="res in resUser" :key="res.id">{{
            res.nickname
          }}</a-select-option>
        </a-select>
      </div>
      <div>
        <a-select ref="select" v-model:value="state.typeStr" style="width: 105px" @change="GetType(2)">
          <a-select-option value="所有分类">所有分类</a-select-option>
          <a-select-option :value="res.name" v-for="res in resType" :key="res.id">{{ res.name }}</a-select-option>
        </a-select>
      </div>

      <div>
        <a-input-search placeholder="标题搜索" style="width: 200px" @change="GetContain" />
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
        :dataSource="state.resData"
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

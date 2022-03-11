<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state, resUser } from './data'
import { article, user } from '@/api'
import { routers, routerId } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'

const reload: any = inject('reload')
const confirm = async (data: any) => {
  if (data.user.id === storage.get('id')) {
    await article.DeleteAsync(data.id).then(() => {
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

const Edit = (id: number, userId: number) => {
  if (userId === storage.get('id')) {
    routerId('/Admin-index/ArticleEdit', id)
  } else {
    message.success('无权限!')
  }
}

async function GetContains(datas: any) {
  if (datas.data === null && state.labelStr === 'ALL') {
    await GetFy(true)
  } else if (state.labelStr === 'ALL') {
    state.resData = await (await article.contains(0, '0', datas.data)).data.data
  } else {
    state.resData = await (await article.contains(3, state.labelStr, datas.data)).data.data
  }
}
async function GetTag() {
  if (state.labelStr === 'ALL') {
    await GetFy(true)
  } else {
    state.resData = await (await article.GetFy(2, state.labelStr, 1, 1000, 'id', true)).data.data.items
  }
}
async function Ordering() {
  if (state.order) {
    await GetFy(true)
    state.order = false
  } else {
    await GetFy(false)
    state.order = true
  }
}

/**查询分页所有 */
async function GetFy(order: boolean) {
  state.resData = await (await article.GetFy(0, 'null', 1, 1000, 'id', order)).data.data.items
}
onMounted(async () => {
  await GetFy(true)
  resUser.value = await (await user.info(1, 100, true)).data.data
  navName.name = '文章'
  navName.name2 = '文章列表'
})
</script>
<template>
  <section>
    <div class="flex table-operations">
      <div>
        <a-button @click="routers('/Admin-index/ArticleAdd')">添加</a-button>
      </div>
      <div>
        <a-button @click="reload()">刷新</a-button>
      </div>
      <div>
        <a-select ref="select" v-model:value="state.labelStr" @change="GetTag">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option :value="res.nickname" v-for="res in resUser" :key="res.id">{{
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
        :data-source="state.resData"
        :pagination="{ pageSize: 12 }"
        :scroll="{ x: 1280, y: 420 }"
      >
        <template #ed="{ record }">
          <a type="primary" ghost @click="Edit(record.id, record.user.id)">编辑</a>
        </template>
        <template #de="{ record }">
          <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="confirm(record)" @cancel="cancel">
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

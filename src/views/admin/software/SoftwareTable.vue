<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state } from './data'
import { software } from '@/api'
import { routers, routerId } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'

const reload: any = inject('reload')
const confirm = async (data: any) => {
  if (data.author.id === storage.get('id')) {
    await software.Delete(data.id).then(() => {
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
    routerId('/Admin-index/SoftwareEdit', id)
  } else {
    message.success('无权限!')
  }
}

async function GetContains(datas: any) {
  if (datas.data === null) {
    await QueryFyAll(true)
  } else {
    state.dataResult = await (await software.Contains(0, 'null', datas.data)).data.data
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
  state.dataResult = await (await software.GetFy(0, 'null', 1, 1000, 'id', order)).data.data.items
}
onMounted(async () => {
  await QueryFyAll(true)
  navName.name = '软件'
  navName.name2 = '软件列表'
})
</script>
<template>
  <section>
    <div class="flex table-operations">
      <div>
        <a-button @click="routers('/Admin-index/SoftwareAdd')">添加</a-button>
      </div>
      <div>
        <a-button @click="reload()">刷新</a-button>
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
          <a type="primary" ghost @click="Edit(record.id, record.author.id)">编辑</a>
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

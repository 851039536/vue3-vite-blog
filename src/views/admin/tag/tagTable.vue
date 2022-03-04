<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state, formState } from './data'
import { tags } from '@/api'
import { navName } from '../utils/data'

const reload: any = inject('reload')
const visible = ref<boolean>(false)
const edVisible = ref<boolean>(false)

const handleOk = () => {
  tags.Add(formState).then((res) => {
    if (res.data.succeeded) {
      message.success('添加成功')
      visible.value = false
      reload()
    } else {
      message.error('添加失败')
    }
  })
}
const handleEd = () => {
  tags.Update(formState).then((res) => {
    if (res.data.succeeded) {
      message.success('更新成功')
      edVisible.value = false
      reload()
    } else {
      message.error('更新失败')
    }
  })
}

const showModal = () => {
  visible.value = true
  formState.name = ''
}
const confirm = async (data: any) => {
  await tags.Delete(data.id).then((res) => {
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
  tags.GetById(id).then((res) => {
    formState.name = res.data.data.name
    formState.id = res.data.data.id
  })
  edVisible.value = true
}

/**查询所有 */
async function QueryFyAll() {
  await tags.GetAll().then((res) => {
    state.dataResult = res.data.data
  })
}
onMounted(async () => {
  await QueryFyAll()
  navName.name = '文章'
  navName.name2 = '标签管理'
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
        :data-source="state.dataResult"
        :pagination="{ pageSize: 12 }"
        :scroll="{ y: 390 }"
      >
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

    <div>
      <a-modal
        v-model:visible="visible"
        title="添加标签"
        @ok="handleOk"
        cancelText="取消"
        :centered="true"
        okText="添加"
        :closable="false"
      >
        <a-input v-model:value="formState.name" prefix="标签名称:" />
      </a-modal>
    </div>
    <div>
      <a-modal
        v-model:visible="edVisible"
        title="编辑分类"
        @ok="handleEd"
        cancelText="取消"
        :centered="true"
        okText="更新"
        :closable="false"
      >
        <a-input v-model:value="formState.name" prefix="分类名称:" />
      </a-modal>
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

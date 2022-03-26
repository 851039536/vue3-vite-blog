<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state, resType } from './data'
import { navName } from '../utils/data'
import { exception, snippet, exceptionType } from '@/api'
import { storage } from '@/utils/storage/storage'
const reload: any = inject('reload')

const Deletes = async (id: number) => {
  // message.success('无权限!')
  await exception.Delete(id).then(() => {
    reload()
  })
}
const cancel = () => {
  message.info('已取消')
}

const resData: any = ref([])
const Edit = async (id: number) => {
  state.visible = true

  await exception.GetById(id).then((res: any) => {
    resData.value = res.data.data
    if (resData.value.identity === 0) {
      state.checked2 = true
      state.checked1 = false
    } else {
      state.checked1 = true
      state.checked2 = false
    }
  })
}
const Update = async () => {
  resData.value.identity = state.checked1 ? 1 : 0
  resData.value.auditor = storage.get('name')
  await exception.Updata(resData.value).then((res: any) => {
    if (res.data.data.succeeded) {
      message.success('已回复')
    }
  })

  await GetFy(1, 'null')
  state.visible = false
}
const checkedId1 = () => {
  state.checked2 = false
}
const checkedId2 = () => {
  state.checked1 = false
}
async function GetContain(entity: any) {
  if (entity.data === null && state.auditStr === '所有用户') {
    await GetFy(0, 'null')
  } else if (state.auditStr === '所有用户' && state.typeStr === '所有分类') {
    state.resData = await (await snippet.GetContain(0, 'null', entity.data)).data.data.items
  } else {
    state.resData = await (
      await snippet.GetContain(4, state.auditStr + ',' + state.typeStr, entity.data)
    ).data.data.items
  }
}

/**
 * 选择框条件查询
 * @param key 分类
 */
async function GetType(key: number) {
  switch (key) {
    case 0: //审核
      if (state.auditStr === '已通过' && state.typeStr === '所有分类') {
        await GetFy(1, 'null')
      } else if (state.auditStr === '未审核' && state.typeStr === '所有分类') {
        await GetFy(0, 'null')
      } else if (state.typeStr != '所有分类' && state.auditStr === '已通过') {
        await GetFy(2, state.typeStr + ',' + 1)
      } else if (state.typeStr != '所有分类' && state.auditStr === '未审核') {
        await GetFy(2, state.typeStr + ',' + 0)
      }
      break
    case 1:
      if (state.typeStr != '所有分类' && state.auditStr === '已通过') {
        await GetFy(2, state.typeStr + ',' + 1)
      } else if (state.typeStr != '所有分类' && state.auditStr === '未审核') {
        await GetFy(2, state.typeStr + ',' + 0)
      }
      break
  }
}

/**
 * 分页查询
 * @param identity 审核中:0 || 审核通过:1 || 分类/审核:2
 * @param type 查询参数 || 多条件(','分割)
 */
async function GetFy(identity: number, type: string) {
  state.resData = await (await exception.GetFy(identity, type, 1, 1000, 'id', true)).data.data.items
}
onMounted(async () => {
  await GetFy(0, 'null')
  resType.value = await (await exceptionType.GetFy(1, 100)).data.data.items
  navName.name = '异常处理'
  navName.name2 = '异常管理'
})
</script>
<template>
  <section>
    <div class="flex table-operations">
      <div>
        <a-button @click="reload()">刷新</a-button>
      </div>
      <div>
        <a-select ref="select" v-model:value="state.auditStr" style="width: 105px" @change="GetType(0)">
          <a-select-option value="已通过">已通过</a-select-option>
          <a-select-option value="未审核">未审核</a-select-option>
        </a-select>
      </div>
      <div>
        <a-select ref="select" v-model:value="state.typeStr" style="width: 105px" @change="GetType(1)">
          <a-select-option value="所有分类">所有分类</a-select-option>
          <a-select-option :value="res.name" v-for="res in resType" :key="res.id">{{ res.name }}</a-select-option>
        </a-select>
      </div>

      <div>
        <a-input-search placeholder="标题搜索" style="width: 200px" @change="GetContain" />
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
          <a type="primary" ghost @click="Edit(record.id)">审核</a>
        </template>
        <template #de="{ record }">
          <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="Deletes(record.id)" @cancel="cancel">
            <a href="#">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
  </section>

  <section>
    <a-modal
      v-model:visible="state.visible"
      :footer="null"
      :mask="false"
      title="内容审核"
      :centered="true"
      width="80%"
      wrap-class-name="full-modal"
    >
      <div class="font-bold mx-8 text-xl mb-2 p-1">
        <p>{{ resData.issue }}</p>
      </div>
      <div class="mx-8 mb-2 p-1">
        <p>{{ resData.particulars }}</p>
      </div>

      <div class="font-bold mx-8 text-xl mb-4 p-1">
        <v-md-editor v-model="resData.reply" :disabled-menus="[]" :insertWithSize="true" height="250px"></v-md-editor>
      </div>
      <div class="font-bold mx-8 text-xl mb-4 p-1">
        <a-checkbox v-model:checked="state.checked1" @change="checkedId1()">通过</a-checkbox>
        <a-checkbox v-model:checked="state.checked2" @change="checkedId2()">不通过</a-checkbox>
        <a-button type="primary" @click="Update()">回复</a-button>
      </div>
    </a-modal>
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

<script lang="ts" setup>
import { exception } from '@/api'
import { resData, resExPending, state } from '../data'

const currentchange = async (val: number) => {
  state.current = val
  await GetFy(0, 'null', state.current, state.pagesize)
}

const GetFy = async (identity: number, type: string, page: number, pagesize: number) => {
  await exception.GetFy(identity, type, page, pagesize, 'id', true).then((res) => {
    resExPending.value = res.data.data.items
    state.count = res.data.data.totalCount
  })
}
const showModal = async (id: number) => {
  state.visible = true

  await exception.GetById(id).then((result) => {
    resData.resultData3 = result.data.data
  })
}

onMounted(async () => {
  await GetFy(0, 'null', state.page, state.pagesize)
})
</script>
<template>
  <div class="mx-8 mb-8">
    <div class="rounded flex h-[55px] shadow mb-2" v-for="(item, index) in resExPending" :key="index">
      <div class="my-1 text-lg ml-2 parent">
        {{ item.issue }}
      </div>

      <div class="rounded bg-gray-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
        {{ item.name }}
      </div>
      <div class="rounded bg-gray-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
        {{ item.exceptionTypes.name }}
      </div>

      <div class="rounded bg-red-400 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">待处理</div>
      <div class="rounded bg-yellow-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
        {{ item.createTime }}
      </div>

      <div class="rounded font-light bg-gray-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
        {{ item.particulars.substr(0, 15) }}...
      </div>

      <a
        class="rounded font-light bg-lime-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent"
        @click="showModal(item.id)"
      >
        详情
      </a>
    </div>

    <a-pagination
      @change="currentchange"
      :total="state.count"
      :pageSize="state.pagesize"
      :current="state.current"
      show-quick-jumper
    ></a-pagination>
  </div>
</template>

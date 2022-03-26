<script lang="ts" setup>
import { exception, exceptionType } from '@/api'
import { resData, resExPending, state, setStr, resType } from '../data'

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

const GetType = async () => {
  state.current = 1
  if (setStr.value === '所有分类') {
    await GetFy(0, 'null', state.page, state.pagesize)
  } else {
    await GetFy(2, setStr.value + ',' + 0, state.page, state.pagesize)
  }
}

onMounted(async () => {
  await exceptionType.GetFy(1, 100).then((res) => {
    resType.value = res.data.data.items
  })
  await GetFy(0, 'null', state.page, state.pagesize)
})
</script>
<template>
  <div class="mx-8 mb-8">
    <div class="bg-gray-50 py-2 px-1">
      <a-select v-model:value="setStr" style="width: 120px" size="large" @change="GetType()">
        <a-select-option value="所有分类">所有分类</a-select-option>
        <a-select-option v-for="item in resType" :key="item.id" :label="item.id" :value="item.name">{{
          item.name
        }}</a-select-option>
      </a-select>
    </div>
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

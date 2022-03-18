<script lang="ts" setup>
import { exception, exceptionType } from '@/api'
import { resData, state, setStr, resAccomplish } from '../data'

const resType: any = ref([])

const state2: any = reactive({
  count: 0,
  page: 1, //页码
  pagesize: 5, //每页条数
  current: 1
})
const showModal = async (id: number) => {
  state.visible = true

  await exception.GetById(id).then((result) => {
    resData.resultData3 = result.data.data
  })
}
const currentchange2 = async (val: number) => {
  state2.current = val
  if (setStr.value === '所有分类') {
    await GetFy(1, 'null', state2.current, state2.pagesize)
  } else {
    await GetFy(2, setStr.value + ',' + 1, state2.current, state2.pagesize)
  }
}
const GetType = async () => {
  state2.current = 1
  if (setStr.value === '所有分类') {
    await GetFy(1, 'null', state2.page, state2.pagesize)
  } else {
    await GetFy(2, setStr.value + ',' + 1, state2.page, state2.pagesize)
  }
}

const GetFy = async (identity: number, type: string, page: number, pagesize: number) => {
  await exception.GetFy(identity, type, page, pagesize, 'id', true).then((res) => {
    resAccomplish.value = res.data.data.items
    state2.count = res.data.data.totalCount
  })
}

onMounted(async () => {
  await exceptionType.GetFy(1, 100).then((res) => {
    resType.value = res.data.data.items
  })
  await GetFy(1, 'null', state2.page, state2.pagesize)
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
    <div class="rounded flex h-[55px] shadow mb-2" v-for="(item, index) in resAccomplish" :key="index">
      <div class="my-1 text-lg ml-2 parent">
        {{ item.issue }}
      </div>
      <div class="rounded bg-gray-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
        {{ item.name }}
      </div>
      <div class="rounded bg-gray-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
        {{ item.exceptionTypes.name }}
      </div>

      <div class="rounded bg-green-300 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">完成</div>

      <a
        class="rounded font-light bg-lime-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent"
        @click="showModal(item.id)"
      >
        详情
      </a>
    </div>
    <a-pagination
      @change="currentchange2"
      :total="state2.count"
      :pageSize="state2.pagesize"
      :current="state2.current"
      show-quick-jumper
    ></a-pagination>
  </div>
</template>

<style lang="scss" scoped></style>

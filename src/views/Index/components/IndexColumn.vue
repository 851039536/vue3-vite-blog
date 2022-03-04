<script lang="ts" setup>
import { state } from '../data/data'
import { method } from '../data/index'
import { classify } from '@/api/index'

onBeforeMount(async () => {
  await classify.GetAll().then((res) => {
    state.classifyData = res.data.data
  })
})
</script>
<template>
  <section class="fade-in">
    <div class="bg-white rounded flex shadow p-2 px-[1%]">
      <div>
        <a-input-search prefix="查询:" size="large" v-model:value="state.ipuName" @change="method.search()" />
      </div>
      <div class="ml-1">
        <a-select
          ref="select"
          v-model:value="state.navStr"
          size="large"
          style="width: 130px"
          @change="method.handleChange"
        >
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option :value="item.name" v-for="item in state.classifyData" :key="item.id">{{
            item.name
          }}</a-select-option>
        </a-select>
      </div>
    </div>

    <div class="bg-white rounded shadow my-2 p-2">
      <div class="flex m-2 px-4 items-center" v-for="item in state.resultData" :key="item?.id">
        <div class="flex text-lg w-[50%]">
          <div class="mr-1">
            <svg t="1640151371338" viewBox="0 0 1024 1024" version="1.1" p-id="11994" width="24" height="24">
              <path
                d="M373.027855 592.102363l34.792411 0 0 104.377232-34.792411 0 0-104.377232Z"
                p-id="11995"
                fill="#515151"
              ></path>
              <path
                d="M477.405087 522.517541l34.792411 0 0 173.962054-34.792411 0 0-173.962054Z"
                p-id="11996"
                fill="#515151"
              ></path>
              <path
                d="M582.805626 574.706157l34.792411 0 0 121.773438-34.792411 0 0-121.773438Z"
                p-id="11997"
                fill="#515151"
              ></path>
              <path
                d="M799.170418 947.106726 225.645157 947.106726c-29.241998 0-52.213175-24.619724-52.213175-53.861722l-0.815575-764.138554c0-29.259394 22.970154-52.213175 52.213175-52.213175l404.64904 0c12.534478 0 24.704658 4.461615 34.256198 12.551874l170.065304 173.447331c10.741645 8.999978 16.766872 24.594141 16.766872 40.212864l0.815575 591.787184C851.382571 924.161131 828.412416 947.106726 799.170418 947.106726zM224.829582 111.702058c-10.044774 0-18.219967 8.175193-18.219967 18.219967l0.815575 764.138554c0 10.06217 8.175193 18.237363 18.219967 18.237363l573.525262 0c10.044774 0 18.219967-8.175193 18.219967-18.219967l-0.815575-591.787184c0-5.395894-2.353604-10.461259-6.459109-13.93743L640.058584 114.90603c-2.098801-1.674129-6.271844-3.203972-10.579963-3.203972L224.829582 111.702058z"
                p-id="11998"
                fill="#515151"
              ></path>
              <path
                d="M826.352501 313.763077 617.598037 313.763077 617.598037 105.008612 652.390447 105.008612 652.390447 278.970666 826.352501 278.970666Z"
                p-id="11999"
                fill="#515151"
              ></path>
            </svg>
          </div>
          <div class="cursor-pointer hover:text-blue-400" @click="method.skip(item?.id)">{{ item?.title }}</div>
        </div>
        <div class="flex flex-row-reverse text-base w-[50%]">
          <div class="bg-yellow-100 ml-3 p-1">{{ item.classify?.name }}</div>
          <div class="bg-red-50 ml-3 p-1">{{ item.tag?.name }}</div>
          <div class="bg-green-50 ml-3 p-1">{{ item.user?.nickname }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 分页 -->
  <section>
    <div class="blogs-page">
      <a-pagination
        @change="method.currentchange"
        :total="state.count"
        :pageSize="state.pagesize"
        :current="state.current"
        show-quick-jumper
      ></a-pagination>
    </div>
  </section>
  <!-- end 分页 -->
</template>

<style lang="scss" scoped></style>

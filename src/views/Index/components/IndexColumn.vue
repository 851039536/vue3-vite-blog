<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { state } from '../data'
import { method } from '../index'
import { classify } from '@/api/index'

onBeforeMount(async () => {
  await classify.GetAll().then((res) => {
    state.classifyData = res.data.data
  })
})
</script>
<template>
  <!-- 文档列表 -->
  <section class="flex fade-in">
    <div class="bg-white rounded-lg shadow mr-6 w-3/4 row-span-3">
      <div class="border-b flex font-semibold border-gray-100 py-5 px-6 items-center justify-between">
        <span>文档列表</span>
        <a-select
          ref="select"
          :bordered="false"
          v-model:value="state.navStr"
          style="width: 80px"
          @change="method.handleChange"
        >
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option :value="item.name" v-for="item in state.classifyData" :key="item.id">{{
            item.name
          }}</a-select-option>
        </a-select>
      </div>
      <div class="overflow-y-auto" style="max-height: 22rem">
        <ul class="space-y-2 p-6">
          <li class="flex items-center" v-for="item in state.resultData" :key="item.id">
            <div class="mr-1">
              <!-- <FileSearchOutlined :style="{ fontSize: '24px' }" /> -->
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
            <span class=""
              ><a class="text-lg" @click="method.skip(item.id)">{{ item.title }}</a>
            </span>

            <span class="ml-auto text-lg">{{ item.classify.name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow w-1/4 row-span-3">
      <div class="border-b flex font-semibold border-gray-100 py-5 px-6 items-center justify-between">
        <span>标签</span>
        <a-select ref="select" :bordered="false" style="width: 80px"> </a-select>
      </div> 
      <div class="overflow-y-auto" style="max-height: 22rem">
        <ul class="space-y-2 p-6">
          <li class="flex items-center" v-for="item in state.resultData" :key="item.id">
            <div class="mr-1">
              <!-- <ProfileOutlined :style="{ fontSize: '24px' }" /> -->
              <svg t="1640151205803" viewBox="0 0 1024 1024" version="1.1" p-id="8904" width="20" height="20">
                <path
                  d="M469.333533 968.08a52.986667 52.986667 0 0 1-37.713333-15.62l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667l-360.08 360.08a52.986667 52.986667 0 0 1-37.713334 15.62zM53.333533 128a10.666667 10.666667 0 0 0-10.666666 10.666667v360.08a10.573333 10.573333 0 0 0 3.126666 7.54l416 416a10.666667 10.666667 0 0 0 15.08 0l360.08-360.08a10.666667 10.666667 0 0 0 0-15.08l-416-416a10.573333 10.573333 0 0 0-7.54-3.126667z m224 341.333333c-58.813333 0-106.666667-47.853333-106.666666-106.666666s47.853333-106.666667 106.666666-106.666667 106.666667 47.853333 106.666667 106.666667-47.853333 106.666667-106.666667 106.666666z m0-170.666666a64 64 0 1 0 64 64 64.073333 64.073333 0 0 0-64-64z m335.086667 676.42l382.706667-382.706667a53.4 53.4 0 0 0 0-75.426667L569.753533 91.58a21.333333 21.333333 0 0 0-30.173333 30.173333l425.373333 425.373334a10.666667 10.666667 0 0 1 0 15.08l-382.706666 382.706666a21.333333 21.333333 0 0 0 30.173333 30.173334z"
                  fill="#707070"
                  p-id="8905"
                ></path>
              </svg>
            </div>
            <span
              ><a class="text-lg">{{ item.tag.name }}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- end 文档列表-->

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

<style lang="scss" scoped>
//@import "./index.scss";
</style>

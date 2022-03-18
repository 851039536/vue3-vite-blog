<script lang="ts" setup>
import { state } from '../data/data'
import { method } from '../data/index'
import { classify, tags } from '@/api/index'

const cz = async () => {
  state.tagStr = '所有标签'
  state.typeStr = '所有分类'
  method.ArticleFy(0, 'null', state.page, state.pagesize)
  await method.ClassTypeFy(0, 'null', 1, 100)
}

const GetType = async (name: string) => {
  method.ArticleFy(6, name, state.page, state.pagesize)
  state.ztypeStr = name
  console.log('%c [ state.ztypeStr ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', state.ztypeStr)
}

onMounted(async () => {
  method.ArticleFy(0, 'null', state.page, state.pagesize)
  await classify.GetAll().then((res) => {
    state.resClassify = res.data.data
  })
  await tags.GetAll().then((res) => {
    state.resTag = res.data.data
  })
  await method.ClassTypeFy(0, state.typeStr, 1, state.pagesize)
})
</script>
<template>
  <section class="fade-in">
    <div class="bg-white rounded flex shadow p-2 px-[1%]">
      <div class="ml-1">
        <a-select
          ref="select"
          v-model:value="state.typeStr"
          size="large"
          style="width: 130px"
          @change="method.handleChange"
        >
          <a-select-option value="所有分类">所有分类</a-select-option>
          <a-select-option :value="item.name" v-for="item in state.resClassify" :key="item.id">{{
            item.name
          }}</a-select-option>
        </a-select>
      </div>

      <div class="ml-1">
        <a-select
          ref="select"
          v-model:value="state.tagStr"
          size="large"
          style="width: 130px"
          @change="method.handleChange"
        >
          <a-select-option value="所有标签">所有标签</a-select-option>
          <a-select-option :value="item.name" v-for="item in state.resTag" :key="item.id">{{
            item.name
          }}</a-select-option>
        </a-select>
      </div>
      <div class="ml-1">
        <a-input-search prefix="查询:" size="large" v-model:value="state.ipuName" @change="method.search()" />
      </div>
      <div class="ml-1">
        <a-button size="large" type="ghost" @click="cz">重置</a-button>
      </div>
    </div>

    <div class="flex">
      <div class="bg-white rounded shadow my-2 p-2 w-[20%]">
        <div class="flex m-2 px-4 items-center" v-for="item in state.resClassifyType" :key="item?.id">
          <div class="flex text-xl">
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
            <div class="cursor-pointer hover:text-blue-400" @click="GetType(item?.name)">{{ item?.name }}</div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded shadow my-2 ml-2 p-2 w-[80%]">
        <div class="flex m-2 px-4 items-center" v-for="item in state.resData" :key="item?.id">
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
            <div class="bg-green-50 ml-3 p-1">{{ item.user?.nickname }}</div>
            <div class="bg-red-50 ml-3 p-1">{{ item.tag?.name }}</div>

            <div class="bg-yellow-100 ml-3 p-1">{{ item.classifyType?.name }}</div>
            <div class="bg-yellow-100 ml-3 p-1">{{ item.classify?.name }}</div>
          </div>
        </div>

        <section>
          <div class="blogs-page">
            <a-pagination
              :hideOnSinglePage="true"
              @change="method.currentchange"
              :total="state.count"
              :pageSize="state.pagesize"
              :current="state.current"
              show-quick-jumper
            ></a-pagination>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

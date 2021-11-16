<!--
 * @Author: your name
 * @Date: 2021-09-07 11:42:13
 * @LastEditTime: 2021-11-16 17:01:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\Index\Index.vue
-->

<template>
  <div class="index fade-in-fwd">
    <div class="flex min-h-screen bg-gray-100">
      <div class="flex-grow text-gray-800">
        <!-- 头部 -->
        <Headers></Headers>
        <!-- end  头部-->

        <main class="p-6 space-y-6 sm:p-10">
          <!-- 分类页 -->
          <section
            class="
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
              xl:grid-cols-4
              2xl:grid-cols-4
              cursor-pointer
            "
          >
            <div class="flex items-center p-8 bg-white rounded-lg shadow">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-16
                  h-16
                  mr-6
                  text-purple-600
                  bg-purple-100
                  rounded-full
                "
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <span class="block text-2xl font-bold">{{ state.count }}</span>
                <span class="block text-gray-500">文档</span>
              </div>
            </div>
            <div class="flex items-center p-8 bg-white rounded-lg shadow">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-16
                  h-16
                  mr-6
                  text-green-600
                  bg-green-100
                  rounded-full
                "
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <span class="block text-2xl font-bold">{{
                  state.tagsCount
                }}</span>
                <span class="block text-gray-500">标签</span>
              </div>
            </div>
            <div class="flex items-center p-8 bg-white rounded-lg shadow">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-16
                  h-16
                  mr-6
                  text-red-600
                  bg-red-100
                  rounded-full
                "
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <span class="inline-block text-2xl font-bold">{{
                  state.classifyCount
                }}</span>
                <span class="block text-gray-500">分类</span>
              </div>
            </div>
            <div class="flex items-center p-8 bg-white rounded-lg shadow">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-16
                  h-16
                  mr-6
                  text-blue-600
                  bg-blue-100
                  rounded-full
                "
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <span class="block text-2xl font-bold">5</span>
                <span class="block text-gray-500">工具软件</span>
              </div>
            </div>
          </section>
          <!-- end  分类页-->

          <!-- 文档列表 -->
          <section class="flex">
            <div class="w-3/4 mr-6 row-span-3 bg-white rounded-lg shadow">
              <div
                class="
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  font-semibold
                  border-b border-gray-100
                "
              >
                <span>文档列表</span>
                <a-select
                  ref="select"
                  :bordered="false"
                  v-model:value="state.navStr"
                  style="width: 80px"
                  @change="method.handleChange"
                >
                  <a-select-option value="ALL">ALL</a-select-option>
                  <a-select-option
                    :value="item.name"
                    v-for="item in state.classifyData"
                    :key="item.id"
                    >{{ item.name }}</a-select-option
                  >
                </a-select>
              </div>
              <div class="overflow-y-auto" style="max-height: 20rem">
                <ul class="p-6 space-y-2">
                  <li
                    class="flex items-center"
                    v-for="item in state.resultData"
                    :key="item.id"
                  >
                    <div class="mr-1">
                      <FileSearchOutlined :style="{ fontSize: '24px' }" />
                    </div>
                    <span class=""
                      ><a
                        class="text-lg text-gray-600"
                        @click="method.skip(item.id)"
                        >{{ item.title }}</a
                      >
                    </span>

                    <span class="ml-auto text-lg">{{
                      item.classify.name
                    }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-1/4 row-span-3 bg-white rounded-lg shadow">
              <div
                class="
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  font-semibold
                  border-b border-gray-100
                "
              >
                <span>其他</span>
              </div>
              <div class="overflow-y-auto" style="max-height: 20rem">
                <ul class="p-6 space-y-2">
                  <li class="flex items-center">
                    <div class="mr-1">
                      <ProfileOutlined :style="{ fontSize: '24px' }" />
                    </div>
                    <span
                      ><a class="text-lg text-gray-600">Visual Studio Code</a>
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-1">
                      <ProfileOutlined :style="{ fontSize: '24px' }" />
                    </div>
                    <span
                      ><a class="text-lg text-gray-600">Visual Studio Code</a>
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-1">
                      <ProfileOutlined :style="{ fontSize: '24px' }" />
                    </div>
                    <span
                      ><a class="text-lg text-gray-600">Visual Studio Code</a>
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-1">
                      <ProfileOutlined :style="{ fontSize: '24px' }" />
                    </div>
                    <span
                      ><a class="text-lg text-gray-600">Visual Studio Code</a>
                    </span>
                  </li>

                  <li class="flex items-center">
                    <div class="mr-1">
                      <ProfileOutlined :style="{ fontSize: '24px' }" />
                    </div>
                    <span
                      ><a class="text-lg text-gray-600">Visual Studio Code</a>
                    </span>
                  </li>

                  <li class="flex items-center">
                    <div class="mr-1">
                      <ProfileOutlined :style="{ fontSize: '24px' }" />
                    </div>
                    <span
                      ><a class="text-lg text-gray-600">Visual Studio Code</a>
                    </span>
                  </li>

                  <li class="flex items-center">
                    <div class="mr-1">
                      <ProfileOutlined :style="{ fontSize: '24px' }" />
                    </div>
                    <span
                      ><a class="text-lg text-gray-600">Visual Studio Code</a>
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

          <section class="font-semibold text-right text-gray-500">
            <a href="#" class="text-purple-600 hover:underline">工程sw网</a>
            基于
            <a
              href="https://tailwindcss.com/"
              class="text-teal-400 hover:underline"
              >Tailwind CSS</a
            >
            vue, 生产制作
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { tags, classify } from '../../api/index';
import { state } from './data';
import { ProfileOutlined, FileSearchOutlined } from '@ant-design/icons-vue';
import { toScss } from '../../hooks/dynamicScss';
import { method } from './index';
import Headers from '../../components/Headers.vue';

onMounted(async () => {
  await method.GetFyTit();

  await tags.GetCount('ALL').then((res) => {
    state.tagsCount = res.data.data;
  });
  await classify.GetCount('ALL').then((res) => {
    state.classifyCount = res.data.data;
  });
  await classify.GetAll().then((res) => {
    state.classifyData = res.data.data;
  });
  await toScss('common');
});
</script>

<style lang="scss" scoped>
@import '../../design/com.scss';
@import '../../design/uitl.scss';
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}

.index {
  width: 98%;
  @apply m-auto;
}
</style>

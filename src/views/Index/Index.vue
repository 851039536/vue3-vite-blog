<!--
 * @Author: your name
 * @Date: 2021-09-07 11:42:13
 * @LastEditTime: 2021-10-26 15:35:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\Index\Index.vue
-->

<template>
  <div class="index">
    <div class="flex min-h-screen bg-gray-100">
      <div class="flex-grow text-gray-800">
        <header class="flex items-center h-20 px-6 bg-white sm:px-10">
          <div class="relative w-full max-w-md sm:-ml-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              type="text"
              placeholder="Search..."
              v-model="state.ipuName"
              @input="search()"
              class="
                w-full
                py-2
                pl-10
                pr-4
                placeholder-gray-400
                border-4 border-transparent
                rounded-lg
                focus:bg-gray-50
              "
            />
          </div>
          <div class="flex items-center flex-shrink-0 ml-auto">
            <button
              class="
                inline-flex
                items-center
                p-2
                rounded-lg
                hover:bg-gray-100
                focus:bg-gray-100
              "
            >
              <span class="sr-only">User Menu</span>
              <div
                class="hidden md:flex md:flex-col md:items-end md:leading-tight"
              >
                <span class="font-semibold">Grace Simmons</span>
                <span class="text-sm text-gray-600">Lecturer</span>
              </div>
              <span
                class="
                  w-12
                  h-12
                  ml-2
                  mr-2
                  overflow-hidden
                  bg-gray-100
                  rounded-full
                  sm:ml-3
                "
              >
                <!-- <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="user profile photo"
                  class="object-cover w-full h-full"
                /> -->
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="hidden w-6 h-6 text-gray-300 sm:block"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div class="pl-3 ml-3 space-x-1 border-l">
              <button
                class="
                  relative
                  p-2
                  text-gray-400
                  rounded-full
                  hover:bg-gray-100 hover:text-gray-600
                  focus:bg-gray-100 focus:text-gray-600
                "
              >
                <span class="sr-only">Notifications</span>
                <span
                  class="
                    absolute
                    top-0
                    right-0
                    w-2
                    h-2
                    mt-1
                    mr-2
                    bg-red-500
                    rounded-full
                  "
                ></span>
                <span
                  class="
                    absolute
                    top-0
                    right-0
                    w-2
                    h-2
                    mt-1
                    mr-2
                    bg-red-500
                    rounded-full
                    animate-ping
                  "
                ></span>
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button
                class="
                  relative
                  p-2
                  text-gray-400
                  rounded-full
                  hover:bg-gray-100 hover:text-gray-600
                  focus:bg-gray-100 focus:text-gray-600
                "
              >
                <span class="sr-only">Log out</span>
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <main class="p-6 space-y-6 sm:p-10">
          <section class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                <span class="block text-2xl font-bold">6</span>
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
                <span class="inline-block text-2xl font-bold">9</span>
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

          <section
            class="
              grid
              gap-6
              md:grid-cols-1
              xl:grid-cols-1 xl:grid-rows-1 xl:grid-flow-col
            "
          >
            <div class="row-span-3 bg-white rounded-lg shadow">
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
                <button
                  type="button"
                  class="
                    inline-flex
                    justify-center
                    px-1
                    -mr-1
                    text-sm
                    font-medium
                    leading-5
                    text-gray-500
                    bg-white
                    rounded-md
                    hover:text-gray-600
                  "
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  全部
                  <svg
                    class="w-5 h-5 ml-1 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div class="overflow-y-auto" style="max-height: 20rem">
                <ul class="p-6 space-y-2">
                  <li
                    class="flex items-center"
                    v-for="item in state.resultData"
                    :key="item.id"
                  >
                    <div
                      class="
                        w-10
                        h-10
                        mr-3
                        overflow-hidden
                        bg-gray-100
                        rounded-full
                      "
                    >
                      <svg
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-10 h-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <span class="text-gray-600"
                      ><a @click="skip(item.id)">{{ item.title }}</a>
                    </span>

                    <span class="ml-auto font-semibold">{{
                      item.classify.name
                    }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <!-- 分页 -->
            <div class="blogs-page">
              <a-pagination
                size="small"
                @change="currentchange"
                :total="state.count"
                :pageSize="state.pagesize"
                show-quick-jumper
              ></a-pagination>
            </div>
            <!-- end 分页 -->
          </section>

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
import Header from '../../components/Header.vue';
import { onMounted, reactive } from 'vue';
import { article } from '../../api/index';
import { routerId } from '../../hooks/routers';

interface State {
  resultData: any;
  count: number;
  page: number; //页码
  pagesize: number; //每页条数
  ipuName: string;
}
const state: State = reactive({
  resultData: [],
  count: 0,
  page: 1, //页码
  pagesize: 5, //每页条数
  ipuName: '',
});

async function GetFyTit() {
  await article.GetFyAll(state.page, state.pagesize, '1').then((res) => {
    state.resultData = res.data.data.items;
  });
}

async function skip(id: number) {
  routerId('/vmdContent', id);
}

async function currentchange(val: number) {
  state.page = val;
  await GetFyTit();
}
async function search() {
  await article.contains(state.ipuName).then((res) => {
    state.resultData = res.data.data;
    if (state.ipuName === '') {
      GetFyTit();
    }
  });
}

onMounted(async () => {
  await GetFyTit();
  await article.GetCount('ALL').then((res) => {
    state.count = res.data.data;
  });
});
</script>

<style lang="scss" scoped>
@import '../../design/com.scss';
@import '../../design/uitl.scss';
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}

.index {
  // @apply fixed bg-gray-100 overflow-auto;
  // @include w-h(100%, 100%);
  // top: 7.5%;
  // left: 0;
}
</style>

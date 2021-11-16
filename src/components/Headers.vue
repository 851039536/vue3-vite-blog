<!--
 * @Author: your name
 * @Date: 2021-09-07 14:54:28
 * @LastEditTime: 2021-11-16 17:08:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\components\Header.vue
-->
<script setup lang="ts">
import { message } from 'ant-design-vue';
import { article } from '../api/http/article';
import { state } from '../views/Index/data';
// import { method } from '../views/Index/index';

async function search() {
  await article.contains(0, 'null', state.ipuName).then((res) => {
    state.resultData = res.data.data;
    // if (state.ipuName === 'null') {
    //   method.GetFyTit();
    // }
  });
}
</script>
<template>
  <header class="header">
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
    <div
      class="
        flex
        items-center
        flex-shrink-0
        ml-auto
        cursor-pointer
        font-semibold
      "
    >
      <div class="inline-flex items-center text-xl mx-2">
        <a
          class="w-full max-w-xs text-gray-700"
          href="http://10.55.22.34:9124/index.html#/model"
          >后台系统</a
        >
      </div>
      <div class="inline-flex items-center text-xl mx-2">
        <a
          class="w-full max-w-xs text-gray-700"
          href="http://10.55.22.34:9124/index.html#/model"
          >资产管理</a
        >
      </div>

      <div class="inline-flex items-center mx-2">
        <select class="select w-full max-w-xs text-xl text-gray-700">
          <option>其他</option>
          <option>反馈</option>
          <option>工具</option>
          <option>测试</option>
        </select>
      </div>
      <div class="inline-flex items-center">
        <span class="h-12 ml-2 mr-2 overflow-hidden bg-gray-100 sm:ml-3">
          <img
            src="../assets/img/mech.png"
            alt="user profile photo"
            class="object-cover w-full h-full"
          />
        </span>
      </div>

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
          @click="message.info('开发中')"
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
</template>

<style lang="scss" scoped>
.header {
  // @apply fixed top-0 left-0 w-full h-1/6;
  @apply flex items-center h-20 px-6 bg-white sm:px-10;
}
</style>

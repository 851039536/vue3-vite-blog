<script setup lang="ts">
import { article } from '@/api/index'
import { state } from '../views/Index/data'
import { method } from '../views/Index/index'
import { winUrl } from '@/hooks/routers'
// import { winUrl } from '../hooks/routers'

async function search() {
  if (state.ipuName === '') {
    method.GetFyTit()
    return
  }
  await article.contains(0, 'null', state.ipuName).then((res) => {
    state.resultData = res.data.data
  })
}
</script>
<template>
  <header class="header">
    <div class="max-w-md w-full relative sm:-ml-2">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-6 mt-2.5 ml-2 text-gray-600 w-6 absolute"
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
        class="border-transparent rounded-lg w-full py-2 pr-4 pl-10 placeholder-gray-400 focus:bg-gray-50"
      />
    </div>
    <div class="cursor-pointer flex font-semibold ml-auto flex-shrink-0 items-center">
      <div class="mx-2 text-xl inline-flex items-center">
        <a class="max-w-xs w-full text-gray-700" @click="winUrl('http://10.55.22.160:8091')">官网后台</a>
      </div>

      <div class="inline-flex items-center">
        <span class="bg-gray-100 h-12 mr-2 ml-2 overflow-hidden sm:ml-3">
          <img src="../assets/img/mech.png" alt="user profile photo" class="h-full object-cover w-full" />
        </span>
      </div>

      <div class="border-l space-x-1 ml-3 pl-3">
        <button
          class="
            rounded-full
            p-2
            text-gray-400
            relative
            hover:bg-gray-100 hover:text-gray-600
            focus:bg-gray-100 focus:text-gray-600
          "
        >
          <span class="rounded-full bg-red-500 h-2 mt-1 mr-2 top-0 right-0 w-2 absolute"></span>
          <span class="rounded-full bg-red-500 h-2 mt-1 mr-2 top-0 right-0 animate-ping w-2 absolute"></span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply bg-white flex h-20 px-6 items-center sm:px-10;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}
</style>

<script setup lang="ts">
import { article } from '@/api/index'
import { state } from '../views/Index/data'
import { method } from '../views/Index/index'
import { routers } from '@/hooks/routers'

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
    <div class="cursor-pointer flex font-medium ml-auto flex-shrink-0 items-center">
      <div class="mx-2 text-lg inline-flex items-center">
        <a class="max-w-xs w-full" @click="routers('/Login')">登录</a>
      </div>

      <div class="inline-flex items-center">
        <span class="bg-gray-100 h-12 mr-2 ml-2 overflow-hidden sm:ml-3">
          <img src="../assets/img/mech.png" alt="user profile photo" class="h-full object-cover w-full" />
        </span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply bg-white flex h-18 shadow px-6 items-center;
  @apply sm:px-10;
}
</style>

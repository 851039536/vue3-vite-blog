<script setup lang="ts">
import { routers } from '@/hooks/routers'
import { storage } from '@/utils/storage/storage'
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
        class="border-transparent rounded-lg w-full py-2 pr-4 pl-10 placeholder-gray-400 focus:bg-gray-50"
      />
      <!--  v-model="state.ipuName" -->
      <!-- @input="search()" -->
    </div>
    <div class="cursor-pointer flex font-medium ml-auto flex-shrink-0 items-center">
      <div class="mx-2 text-lg inline-flex items-center">
        <div v-if="storage.get('id') === 'id'" @click="routers('/Login')">
          <a-avatar size="large">登录</a-avatar>
        </div>
        <div v-else @click="routers('/Admin-index/ArticleTable')">
          <a-avatar size="large">{{ storage.get('name') }}</a-avatar>
        </div>
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
  @apply bg-white flex h-17 shadow px-6 items-center;
  @apply sm:px-10;
}
</style>

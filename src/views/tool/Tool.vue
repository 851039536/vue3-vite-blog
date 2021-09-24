<!--
 * @Author: your name
 * @Date: 2021-09-23 15:30:37
 * @LastEditTime: 2021-09-23 15:59:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\tool\Tool.vue
-->

<template>
  <div class="mt-3 space-y-4">
    <button
      class="flex flex-col w-full p-3 bg-white rounded-md shadow  dark:bg-gray-800"
    >
      <div
        class="flex flex-col items-center w-full pb-2 mb-2 font-medium text-gray-900 border-gray-200 border-opacity-75  xl:flex-row dark:text-white xl:border-b dark:border-gray-700"
      >
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
          class="mr-2 rounded-full w-7 h-7"
          alt="profile"
        />
        Kathyrn Murphy
      </div>
      <div class="flex items-center w-full">
        <div
          class="px-2 py-1 text-xs leading-none text-blue-500 bg-blue-100 rounded-md  dark:bg-gray-900"
        >
          Design
        </div>
        <div class="ml-auto text-xs text-gray-500">$1,902.00</div>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
//@import "./index.scss";
</style>

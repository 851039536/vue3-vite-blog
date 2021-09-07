<!--
 * @Author: your name
 * @Date: 2021-09-04 08:39:20
 * @LastEditTime: 2021-09-07 15:24:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\home\Home.vue
-->
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const skip = async () => {
  router.push('/index')
};
</script>

<template>
  <div id="home">
    <div class="home_main">
      <div class="min-h-screen hero bg-base-200">
        <div class="text-center hero-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">SW内网</h1>
            <p class="mb-5">技术文档、接口文档 、开发流程汇总</p>
            <button class="btn btn-link" @click="skip">Go</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

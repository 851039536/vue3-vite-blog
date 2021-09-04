<!--
 * @Author: your name
 * @Date: 2021-09-04 08:39:20
 * @LastEditTime: 2021-09-04 10:45:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\home\Home.vue
-->
<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { user } from "../../api/user";

const state = reactive({
  User: [],
});
const getall = async () => {
  await user.GetByIdAsync(4)
    .then((res: any) => {
      state.User = res.data;
    })
};
onMounted(async () => {
  await getall();
});
</script>

<template>
  <div id="BlogHome">
    <div class="home_main">
      <div class="home_main_top">
        <div class="min-h-screen hero bg-base-200">
          <div class="text-center hero-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">哈喽，我叫少年</h1>
              <p class="mb-5">{{ state.User.brief }} 一位热爱生活、xxxxxx开发者。</p>
              <button class="btn btn-primary" @click="skip(1)">冲冲冲！</button>
              <button class="btn btn-link">link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

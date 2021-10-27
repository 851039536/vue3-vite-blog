<!--
 * @Author: your name
 * @Date: 2021-09-04 08:39:20
 * @LastEditTime: 2021-10-27 14:42:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\App.vue
-->
<script setup lang="ts">
// import Header from './components/Header.vue';
</script>

<template>
  <!-- <Header></Header> -->
  <router-view class="fade-in-fwd"></router-view>
</template>

<style lang="scss">
#app {
  @apply bg-white;
  width: 100%;
}
.fade-in-fwd {
  animation: fade-in-fwd 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
</style>

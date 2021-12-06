<script setup lang="ts"></script>

<template>
  <!-- vue3.0配置 -->
  <router-view v-slot="{ Component }">
    <!-- 需要缓存的视图组件 -->
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<style lang="scss">
#app {
  @apply bg-white;
  width: 100%;
}
</style>

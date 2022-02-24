<script setup lang="ts">
import saspin from './components/aspin/SAspin.vue'
</script>

<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>

    <saspin></saspin>
  </div>
</template>

<style lang="scss">
#app {
  @apply bg-white;
  width: 100%;
}
</style>

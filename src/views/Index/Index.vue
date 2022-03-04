<script lang="ts" setup>
import { classify } from '@/api/index'
import { state } from './data/data'
import { method } from './data/index'
import SFooter from '@/components/SFooter.vue'

onMounted(async () => {
  await method.GetFyTit()
  await classify.GetCount('ALL').then((res) => {
    state.classifyCount = res.data.data
  })
})
</script>

<template>
  <div class="index">
    <Headers></Headers>
    <main>
      <Classify></Classify>
      <router-view></router-view>
      <SFooter></SFooter>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.index {
  @apply m-auto min-h-screen bg-gray-100 w-[98%];
  main {
    @apply space-y-3 p-3 sm:p-6;
  }
}
</style>

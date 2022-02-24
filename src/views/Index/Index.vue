<script lang="ts" setup>
import { tags, classify } from '@/api/index'
import { state } from './data'
import { method } from './index'
import SFooter from '../../components/SFooter.vue'

onMounted(async () => {
  await method.GetFyTit()

  await tags.GetCount('ALL').then((res) => {
    state.tagsCount = res.data.data
  })
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

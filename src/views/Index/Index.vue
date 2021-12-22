<script lang="ts" setup>
import { onMounted } from 'vue'
import { tags, classify } from '../../api/index'
import { state } from './data'
import { method } from './index'
// import Headers from '@/components/Headers.vue'

// const classFun = async (names: string) => {
//   state.navStr = names
//   await method.handleChange()
// }

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
  <div class="index fade-in-fwd">
    <div class="flex min-h-screen bg-gray-100">
      <div class="flex-grow text-gray-800">
        <!-- 头部 -->
        <Headers></Headers>
        <!-- end  头部-->

        <main class="p-3 space-y-3 sm:p-6">
          <!-- 分类页 -->
          <Classify></Classify>
          <!-- end  分类页-->

          <router-view></router-view>

          <section class="font-semibold text-right text-gray-500">
            <a href="#" class="text-purple-600 hover:underline">工程sw网</a>
            基于
            <a class="text-teal-400 hover:underline"> VUE</a>
            生产开发
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  width: 98%;
  @apply m-auto;
}
</style>

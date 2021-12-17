<!--
 * @Author: your name
 * @Date: 2021-09-07 11:42:13
 * @LastEditTime: 2021-11-18 15:05:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\Index\Index.vue
-->

<script lang="ts" setup>
import { onMounted } from 'vue'
import { tags, classify } from '../../api/index'
import { state } from './data'
import { method } from './index'
import Headers from '../../components/Headers.vue'
import { routers } from '../../hooks/routers'

const classFun = async (names: string) => {
  state.navStr = names
  await method.handleChange()
}

const skip = (name: string) => {
  routers(name)
}
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
          <section
            class="
              grid
              gap-3
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
              xl:grid-cols-8
              2xl:grid-cols-10
              cursor-pointer
            "
          >
            <div class="main-class">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-10
                  h-10
                  mr-2
                  text-purple-600
                  bg-purple-100
                  rounded-full
                "
              >
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <!-- <span class="block text-2xl font-bold">{{ state.count }}</span> -->
                <span class="block text-gray-500" @click="skip('/index/indexColumn')">文档</span>
              </div>
            </div>
            <div class="main-class">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-10
                  h-10
                  mr-2
                  text-green-600
                  bg-green-100
                  rounded-full
                "
              >
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <!-- <span class="block text-2xl font-bold">{{ state.tagsCount }}</span> -->
                <span class="block text-gray-500">标签</span>
              </div>
            </div>
            <div class="main-class">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-10
                  h-10
                  mr-2
                  text-green-800
                  bg-green-100
                  rounded-full
                "
              >
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <span @click="skip('/index/Procedure')">程序相关</span>
              </div>
            </div>
            <div class="main-class" v-for="item in state.classifyData" :key="item.id">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-10
                  h-10
                  mr-2
                  bg-gray-200 bg-gray-100
                  rounded-full
                "
              >
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <span class="text-base" @click="classFun(item.name)">{{ item.name }}</span>
              </div>
            </div>
          </section>
          <!-- end  分类页-->

          <router-view></router-view>

          <section class="font-semibold text-right text-gray-500">
            <a href="#" class="text-purple-600 hover:underline">工程sw网</a>
            基于
            <a href="https://tailwindcss.com/" class="text-teal-400 hover:underline">Tailwind CSS</a>
            vue, 生产制作
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

  .main-class {
    @apply flex items-center p-3 bg-white rounded-lg shadow;
  }
}
</style>

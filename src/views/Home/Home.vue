<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { toScss } from '../../hooks/dynamicScss'

const router = useRouter()
const skip = async () => {
  router.push('/index/indexColumn')
}

onMounted(async () => {
  await toScss('common')
})
</script>

<template>
  <div id="home fade-in-fwd">
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
@import './index.scss';
</style>

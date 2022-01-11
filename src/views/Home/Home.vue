<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const skip = async () => {
  router.push('/index/indexColumn')
}
</script>

<template>
  <div id="blogHome" class="fade-in">
    <div class="home_main">
      <div class="centeredPrompt">
        <div class="text-4xl">SW内网</div>
        <div class="mt-2 text-base text-gray-500">技术文档、接口文档 、开发流程汇总。</div>
        <div class="mt-2">
          <a class="text-lg" @click="skip">Go</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#blogHome {
  @apply fixed;
  @include w-h;
  @apply bg-white;

  .home_main {
    @apply absolute m-auto top-0 left-0 bottom-0 right-0;
    @include w-h(95%, 90%);
    @apply shadow-2xl rounded;

    .centeredPrompt {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 500px;
      padding: 10px;
    }
  }
}
</style>

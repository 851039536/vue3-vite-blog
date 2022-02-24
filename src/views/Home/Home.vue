<script lang="ts" setup>
const router = useRouter()
const skip = async () => {
  router.push('/index/indexColumn')
}
</script>

<template>
  <div class="home_main fade-in">
    <div class="centeredPrompt">
      <div class="font-light text-5xl">SW内网</div>
      <div class="font-light mt-4 text-lg text-center">
        <p>集成查询系统、后台系统、资产系统、版本管理..</p>
        <p>异常解决方案、技术文档、接口文档 、程序开发流程汇总。</p>
      </div>
      <div class="mt-4 p-1">
        <a class="text-2xl" @click="skip">进入</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home_main {
  @apply m-auto top-0 right-0 bottom-0 left-0 absolute;
  @include w-h(95%, 90%);
  @apply rounded shadow-2xl;

  .centeredPrompt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    padding: 10px;
  }
}
</style>

<script lang="ts" setup>
import { resData } from './data'
</script>
<template>
  <section v-show="resData.show">
    <div class="aspin_main">
      <a-spin size="large" tip="Loading..." />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply top-0 left-0 z-20 fixed;
  @apply h-full w-full;
  .aspin_main {
    @apply top-5/10 left-5/10 absolute;
  }
}
</style>

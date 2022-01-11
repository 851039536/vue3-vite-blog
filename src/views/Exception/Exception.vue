<template>
  <section class="bg-white rounded">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="异常提交">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane key="2" tab="待处理" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3" tab="已处理">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1')
    }
  }
})
</script>

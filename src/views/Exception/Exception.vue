<script lang="ts" setup>
import { resData, state } from './data'
import ExProblem from './components/ExProblem.vue'
import ExPending from './components/ExPending.vue'
import ExAccomplish from './components/ExAccomplish.vue'

const activeKey = ref('3')
</script>
<template>
  <section class="bg-white rounded">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="问题报告">
        <!-- 问题报告 -->
        <ex-problem></ex-problem>
      </a-tab-pane>
      <a-tab-pane key="2" tab="待处理" force-render>
        <!-- 待处理 -->
        <ex-pending></ex-pending>
      </a-tab-pane>
      <a-tab-pane key="3" tab="问题查阅">
        <!-- 已处理 -->
        <ex-accomplish></ex-accomplish>
      </a-tab-pane>
    </a-tabs>
  </section>

  <section>
    <a-modal
      v-model:visible="state.visible"
      :footer="null"
      :mask="false"
      title="问题描述"
      :centered="true"
      width="80%"
      wrap-class-name="full-modal"
    >
      <div class="font-bold mx-8 text-xl mb-4 p-1">
        <p>{{ resData.resultData3.issue }}</p>
      </div>
      <div class="mx-8 p-1">
        <p>{{ resData.resultData3.particulars }}</p>
      </div>

      <div class="font-bold mx-8 mt-4 text-xl p-1">
        <p>解决方案</p>
      </div>
      <div><v-md-preview :text="resData.resultData3.reply"></v-md-preview></div>
    </a-modal>
  </section>
</template>

<style lang="scss">
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-modal {
  .ant-modal {
    max-width: 90%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(90vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>

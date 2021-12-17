<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { article } from '../../api/index'
const route = useRoute()
interface State {
  title: string
  result: string
  id: any
}
const state: State = reactive({
  result: '',
  title: '',
  id: route.query.id
})

article.GetByIdAsync(state.id).then((res: any) => {
  state.result = res.data.data.content
  state.title = res.data.data.title
})
</script>
<template>
  <a-back-top :visibilityHeight="200" />
  <div class="vmd-content fade-in-fwd">
    <div class="main">
      <a-page-header :title="state.title" />
      <v-md-preview :text="state.result"></v-md-preview>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vmd-content {
  @apply bg-gray-50;
  .main {
    @apply m-auto;
    width: 80%;
    .ant-page-header-ghost {
      @apply bg-gray-200 shadow;
    }
  }
}
</style>

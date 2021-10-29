<!--
 * @Author: your name
 * @Date: 2021-09-22 13:52:06
 * @LastEditTime: 2021-10-29 14:24:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\editor\VmdContent.vue
-->

<template>
  <a-back-top />
  <div class="vmdcontent fade-in-fwd">
    <div class="main">
      <a-skeleton :loading="false" :paragraph="{ rows: 15 }" active />
      <!--  @back="() => router.back()"  -->
      <a-page-header :title="state.title" />
      <v-md-preview :text="state.result"></v-md-preview>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { article } from '../../api/index';
import { toScss } from '../../hooks/dynamicScss';
const route = useRoute();
interface State {
  title: string;
  result: string;
  id: any;
}
const state: State = reactive({
  result: '',
  title: '',
  id: route.query.id,
});

article.GetByIdAsync(state.id).then((res: any) => {
  state.result = res.data.data.description;
  state.title = res.data.data.title;
});

onMounted(async () => {
  await toScss('common');
});
</script>

<style lang="scss" scoped>
.vmdcontent {
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

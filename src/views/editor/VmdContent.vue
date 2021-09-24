<!--
 * @Author: your name
 * @Date: 2021-09-22 13:52:06
 * @LastEditTime: 2021-09-24 14:09:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\editor\VmdContent.vue
-->

<template>
  <div class="vmdcontent">
    <a-back-top />
    <a-skeleton :loading="false" :paragraph="{ rows: 15 }" active />
    <a-page-header title="内容" @back="() => router.back()" />
    <v-md-preview :text="state.result" :include-level="[3, 4]"></v-md-preview>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { article } from '../../api/index';
const router = useRouter();
const route = useRoute();
interface State {
  result: string;
  id: any;
}
const state: State = reactive({
  result: '',
  id: route.query.id,
});

article.GetByIdAsync(state.id, false).then((res: any) => {
  state.result = res.data.text;
});
</script>

<style lang="scss" scoped>
.vmdcontent {
  @apply mt-8;
  // width: 90%;
}
</style>

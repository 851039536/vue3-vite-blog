<script lang="ts" setup>
import { classify } from '@/api'
import { message } from 'ant-design-vue'
import { edVisible, classifyState } from '../data'
const reload: any = inject('reload')
const handleEd = async () => {
  await classify.Update(classifyState).then((res) => {
    if (res.data.succeeded) {
      message.success('更新成功')
      edVisible.value = false
      reload()
    } else {
      message.error('更新失败')
    }
  })
}
</script>
<template>
  <div>
    <a-modal
      v-model:visible="edVisible"
      title="编辑分类"
      @ok="handleEd"
      cancelText="取消"
      :centered="true"
      okText="更新"
      :closable="false"
    >
      <a-input v-model:value="classifyState.name" prefix="分类名称:" />
    </a-modal>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
import { classify } from '@/api'
import { message } from 'ant-design-vue'
import { invisible, classifyState } from '../data'
const reload: any = inject('reload')
const handleOk = () => {
  classify.Add(classifyState).then((res) => {
    if (res.data.succeeded) {
      message.success('添加成功')
      invisible.value = false
      reload()
    } else {
      message.error('添加失败')
    }
  })
}
</script>
<template>
  <div>
    <a-modal
      v-model:visible="invisible"
      title="添加分类"
      @ok="handleOk"
      cancelText="取消"
      :centered="true"
      okText="添加"
      :closable="false"
    >
      <a-input v-model:value="classifyState.name" prefix="分类名称:" />
    </a-modal>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
import { exception, exceptionType } from '@/api'
import { message } from 'ant-design-vue'
import { formState, resType } from '../data'

const checkCode = ref('')
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}
const validateMessages = {
  required: '${label} is 不能为空!'
}

const onFinish = async () => {
  if (checkCode.value === 'merryte') {
    await exception.Add(formState).then((result) => {
      if (result.status === 200) {
        message.success('已提交')
        formState.name = ''
        formState.issue = ''
        formState.particulars = ''
        formState.phone = ''
        formState.typeId = 1
      }
    })
  } else {
    message.error('效验码不正确')
  }
}

onMounted(async () => {
  await exceptionType.GetFy(1, 100).then((res) => {
    resType.value = res.data.data.items
  })
})
</script>
<template>
  <div>
    <a-form
      :model="formState"
      v-bind="layout"
      name="nest-messages"
      :validate-messages="validateMessages"
      @finish="onFinish"
    >
      <div>
        <a-form-item :name="['name']" label="提交人" :rules="[{ required: true }]">
          <a-input v-model:value="formState.name" />
        </a-form-item>
      </div>

      <div class="">
        <a-form-item :name="['issue']" label="异常问题" :rules="[{ required: true }]">
          <a-input v-model:value="formState.issue" />
        </a-form-item>
      </div>

      <div class="flex">
        <div class="ml-30 w-[50%]">
          <a-form-item :name="['issue']" label="联系方式" :rules="[{ required: true }]">
            <a-input v-model:value="formState.phone" />
          </a-form-item>
        </div>
        <div class="w-[50%]">
          <a-form-item :name="['typeId']" label="类别" :rules="[{ required: true }]">
            <a-select v-model:value="formState.typeId" placeholder="请选择" style="width: 120px">
              <a-select-option v-for="item in resType" :key="item.id" :label="item.id" :value="item.id">{{
                item.name
              }}</a-select-option>
            </a-select>
          </a-form-item>
        </div>
      </div>
      <div>
        <a-form-item :name="['particulars']" label="异常详情" :rules="[{ required: true }]">
          <a-textarea v-model:value="formState.particulars" :rows="8" />
        </a-form-item>
      </div>
      <div>
        <a-form-item label="效验码" :rules="[{ required: true }]">
          <a-input-password v-model:value="checkCode" />
        </a-form-item>
      </div>
      <div>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 4 }">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </div>
    </a-form>
  </div>
</template>

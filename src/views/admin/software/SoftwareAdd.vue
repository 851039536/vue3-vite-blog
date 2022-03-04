<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { common, software } from '@/api'
import { formState } from './data'
import { go, routers } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'
import { InboxOutlined } from '@ant-design/icons-vue'

const onSubmit = async () => {
  const path = await upShangc(formData)
  formState.authorId = Number(storage.get('id'))
  formState.relativePath = path
  await software.Add(formState).then(() => {
    message.loading('发布中..', 1.5).then(
      () => {
        message.success('发布成功')
        routers('/Admin-index/SoftwareTable')
      },
      () => {}
    )
  })
}

const upShangc = async (file: FormData): Promise<string> => {
  return await common.uploadFile(file).then((res: any) => {
    if (res.status === 200) {
      return res.data
    }
  })
}
const formData = new FormData()
async function handleUploadImage(files: any) {
  formData.delete('file')
  //file键值对应api声明字段
  formData.append('file', files.file)
}

const handleChange = async (info: any) => {
  info.file.status = 'done'
}

onMounted(async () => {
  formState.id = 0
  formState.name = ''
  formState.version = ''
  formState.classifyName = ''
  formState.description = ''
  formState.createTime = '2021-11-13T03:18:20.821Z'
  formState.updateTime = '2021-11-13T03:18:20.821Z'
  formState.relativePath = ''
  formState.authorId = 0
  navName.name = '软件'
  navName.name2 = '发布软件'
})
</script>

<template>
  <section class="overflow-auto">
    <div class="m-auto p-1 py-2 w-[95%]">
      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <a-input v-model:value="formState.name" prefix="标题:" />
      </div>

      <div class="rounded flex bg-gray-50 shadow mt-2 p-2">
        <!-- <div class="mt-auto mb-auto p-1">版本/格式</div> -->
        <div><a-input v-model:value="formState.version" prefix="版本/格式:" /></div>
        <!-- <div class="mt-auto mb-auto ml-2 p-1">类别</div> -->
        <div class="ml-2"><a-input v-model:value="formState.classifyName" prefix="类别:" /></div>
      </div>

      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <div class="mt-auto mb-auto p-1">简述</div>
        <div><a-textarea v-model:value="formState.description" /></div>
      </div>
      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <a-upload-dragger name="file" @change="handleChange" :customRequest="handleUploadImage">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">点击图标/拖动到此进行文件上传</p>
        </a-upload-dragger>
      </div>

      <div class="bg-gray-100 shadow p-2">
        <a-button type="primary" @click="onSubmit">发布</a-button>
        <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
        <!-- <a-button style="margin-left: 10px" @click="reloads">刷新</a-button> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

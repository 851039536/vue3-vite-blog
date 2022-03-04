<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { software } from '@/api'
import { formState } from './data'
import { go, routers } from '@/hooks/routers'
import { navName } from '../utils/data'

const route = useRoute()
const rid: any = reactive({
  id: route.query.id
})

const onSubmit = async () => {
  await software.Update(formState).then((res) => {
    if (res.data.succeeded) {
      message.loading('更新中..', 1.5).then(
        () => {
          message.success('更新成功')
          routers('/Admin-index/SoftwareTable')
        },
        () => {}
      )
    } else {
      message.info('更新失败')
    }
  })
}

// async function handleUploadImage(_event: any, insertImage: any, files: any) {
//   const file = files
//   const formData = new FormData()
//   for (var i = 0; i < file.length; i++) {
//     formData.append('files', files[i])
//   }
//   await common.uploadImg(formData).then((res: any) => {
//     insertImage({
//       url: res.data,
//       desc: files[0].name
//     })
//   })
// }

async function GetApi() {
  await software.GetById(rid.id).then((res) => {
    formState.id = res.data.data.id
    formState.name = res.data.data.name
    formState.version = res.data.data.version
    formState.classifyName = res.data.data.classifyName
    formState.description = res.data.data.description
    formState.createTime = res.data.data.createTime
    formState.updateTime = res.data.data.updateTime
    formState.relativePath = res.data.data.relativePath
    formState.authorId = res.data.data.authorId
  })
}
onMounted(async () => {
  await GetApi()
  navName.name = '软件'
  navName.name2 = '软件编辑'
})
</script>

<template>
  <section class="overflow-auto">
    <div class="m-auto p-1 py-2 w-[95%]">
      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <a-input v-model:value="formState.name" />
      </div>

      <div class="rounded flex bg-gray-50 shadow mt-2 p-2">
        <div class="mt-auto mb-auto p-1">版本/格式</div>
        <div><a-input v-model:value="formState.version" /></div>
        <div class="mt-auto mb-auto ml-2 p-1">类别</div>
        <div><a-input v-model:value="formState.classifyName" /></div>
      </div>

      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <div class="mt-auto mb-auto p-1">简述</div>
        <div><a-textarea v-model:value="formState.description" /></div>
      </div>
      <!-- <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <a-upload-dragger name="file" @change="handleChange" :customRequest="handleUploadImage">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">点击图标/拖动到此进行文件上传</p>
        </a-upload-dragger>
      </div> -->

      <div class="bg-gray-100 shadow p-2">
        <a-button type="primary" @click="onSubmit">更新</a-button>
        <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
        <!-- <a-button style="margin-left: 10px" @click="reloads">刷新</a-button> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { article, classify, tags, common } from '@/api'
import { formState, resTag, resClassify } from './data'
import { go, routers } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'

const onSubmit = async () => {
  formState.userId = storage.get('id')
  await article.Add(formState).then(() => {
    message.loading('添加中..', 1.5).then(
      () => {
        message.success('添加成功', 1)
        routers('/Admin-index/ArticleTable')
      },
      () => {}
    )
  })
}

async function GetApi() {
  await classify.GetAll().then((res) => {
    resClassify.value = res.data.data
  })
  await tags.GetAll().then((res) => {
    resTag.value = res.data.data
  })
}

async function handleUploadImage(_event: any, insertImage: any, files: any) {
  const file = files
  const formData = new FormData()
  for (var i = 0; i < file.length; i++) {
    formData.append('files', file[i])
  }
  await common.uploadImg(formData).then((res: any) => {
    insertImage({
      url: res.data,
      desc: files[0].name
    })
  })
}

const initialize = async () => {
  formState.id = 0
  formState.title = ''
  formState.content = ''
  formState.description = ''
  formState.createTime = '2021-11-13T03:18:19.821Z'
  formState.updateTime = '2021-11-13T03:18:20.821Z'
  formState.userId = 0
  formState.classifyId = 1
  formState.tagId = 10
}

onMounted(async () => {
  await initialize()
  await GetApi()
  navName.name = '文章管理'
  navName.name2 = '新增文章'
})
</script>

<template>
  <section class="overflow-auto">
    <div class="m-auto p-1 py-2 w-[95%]">
      <div class="rounded flex m-auto bg-gray-50 shadow p-2">
        <div class="ml-2">
          标签
          <a-select v-model:value="formState.tagId" placeholder="请选择" style="width: 120px">
            <a-select-option v-for="item in resTag" :key="item.id" :label="item.id" :value="item.id">{{
              item.name
            }}</a-select-option>
          </a-select>
        </div>
        <div class="ml-2">
          分类
          <a-select v-model:value="formState.classifyId" placeholder="请选择" style="width: 120px">
            <a-select-option v-for="item in resClassify" :key="item.id" :label="item.id" :value="item.id">{{
              item.name
            }}</a-select-option>
          </a-select>
        </div>
      </div>
      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <a-input v-model:value="formState.title" prefix="标题:" />
      </div>
      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <v-md-editor
          v-model="formState.content"
          :disabled-menus="[]"
          @upload-image="handleUploadImage"
          :insertWithSize="true"
          mode="edit"
          height="350px"
        ></v-md-editor>
      </div>

      <div class="bg-gray-100 shadow p-2">
        <a-button type="primary" @click="onSubmit">添加</a-button>
        <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

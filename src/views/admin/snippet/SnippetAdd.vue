<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { snippet, snippetType, snippetTag, common } from '@/api'
import { formState, state } from './data'
import { go, routers } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'

const onSubmit = async () => {
  formState.userId = Number(storage.get('id'))
  await snippet.Add(formState).then(() => {
    message.loading('添加中..', 1.5).then(
      () => {
        message.success('添加成功', 1)
        routers('/Admin-index/SnippetTable')
      },
      () => {}
    )
  })
}

async function GetApi() {
  await snippetType.GetFy(1, 1000).then((res) => {
    state.resType = res.data.data.items
  })
  await snippetTag.GetFy(1, 1000).then((res) => {
    state.resTag = res.data.data.items
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

onMounted(async () => {
  formState.id = 0
  formState.name = ''
  formState.text = ''
  formState.userId = 0
  formState.typeId = 1
  formState.tagId = 1
  await GetApi()
  navName.name = '代码片段'
  navName.name2 = '新增片段'
})
</script>

<template>
  <section class="overflow-auto">
    <div class="m-auto p-1 py-2 w-[95%]">
      <div class="rounded flex m-auto bg-gray-50 shadow p-2">
        <div class="ml-2">
          标签
          <a-select v-model:value="formState.tagId" placeholder="请选择" style="width: 120px">
            <a-select-option v-for="item in state.resTag" :key="item.id" :label="item.id" :value="item.id">{{
              item.name
            }}</a-select-option>
          </a-select>
        </div>
        <div class="ml-2">
          分类
          <a-select v-model:value="formState.typeId" placeholder="请选择" style="width: 120px">
            <a-select-option v-for="item in state.resType" :key="item.id" :label="item.id" :value="item.id">{{
              item.name
            }}</a-select-option>
          </a-select>
        </div>
      </div>
      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <a-input v-model:value="formState.name" prefix="标题:" />
      </div>
      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <v-md-editor
          v-model="formState.text"
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

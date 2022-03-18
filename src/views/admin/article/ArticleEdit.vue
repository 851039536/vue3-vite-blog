<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { article, classify, tags, common, classifyType } from '@/api'
import { formState, resClassify, resClassifyType, resTag } from './data'
import { go, routers } from '@/hooks/routers'
import { navName } from '../utils/data'

const route = useRoute()
const rid: any = route.query.id

const onSubmit = async () => {
  await article.Update(formState).then((res) => {
    if (res.data.succeeded) {
      message.loading('更新中..', 1.5).then(
        () => {
          message.success('更新成功', 1)
          routers('/Admin-index/ArticleTable')
        },
        () => {}
      )
    } else {
      message.info('更新失败')
    }
  })
}

async function handleUploadImage(_event: any, insertImage: any, files: any) {
  const file = files
  const formData = new FormData()
  for (var i = 0; i < file.length; i++) {
    formData.append('files', files[i])
  }
  await common.uploadImg(formData).then((res: any) => {
    insertImage({
      url: res.data,
      desc: files[0].name
    })
  })
}
const handleChange = async () => {
  await classifyType
    .GetFy(3, formState.classifyId, 1, 100)
    .then((res) => {
      resClassifyType.value = res.data.data.items
      formState.classifyTypeId = res.data.data.items[0].id
    })
    .catch(() => {
      message.error('子类不存在!请添加子类型')
      formState.classifyTypeId = null
    })
}
async function GetApi() {
  await classify.GetAll().then((res) => {
    resClassify.value = res.data.data
  })
  await tags.GetAll().then((res) => {
    resTag.value = res.data.data
  })

  await article.GetByIdAsync(rid).then((res) => {
    formState.id = res.data.data.id
    formState.title = res.data.data.title
    formState.content = res.data.data.content
    formState.createTime = res.data.data.createTime
    formState.updateTime = res.data.data.updateTime
    formState.userId = res.data.data.user.id
    formState.classifyId = res.data.data.classify.id
    formState.tagId = res.data.data.tag.id
    formState.classifyTypeId = res.data.data.classifyType.id
  })
  await classifyType.GetFy(3, formState.classifyId, 1, 100).then((res) => {
    resClassifyType.value = res.data.data.items
  })
}
onMounted(async () => {
  await GetApi()
  navName.name = '文章管理'
  navName.name2 = '文章编辑'
})
</script>

<template>
  <section class="overflow-auto">
    <div class="m-auto p-1 py-2 w-[95%]">
      <div class="rounded flex m-auto bg-gray-50 shadow p-2">
        <div class="ml-2">
          分类
          <a-select
            v-model:value="formState.classifyId"
            placeholder="请选择"
            style="width: 120px"
            @change="handleChange"
          >
            <a-select-option v-for="item in resClassify" :key="item.id" :label="item.id" :value="item.id">{{
              item.name
            }}</a-select-option>
          </a-select>
        </div>
        <div class="ml-2">
          子分类
          <a-select v-model:value="formState.classifyTypeId" placeholder="请选择" style="width: 120px">
            <a-select-option v-for="item in resClassifyType" :key="item.id" :label="item.id" :value="item.id">{{
              item.name
            }}</a-select-option>
          </a-select>
        </div>
        <div class="ml-2">
          标签
          <a-select v-model:value="formState.tagId" placeholder="请选择" style="width: 120px">
            <a-select-option v-for="item in resTag" :key="item.id" :label="item.id" :value="item.id">{{
              item.name
            }}</a-select-option>
          </a-select>
        </div>
      </div>
      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <a-input v-model:value="formState.title" />
      </div>
      <div class="rounded bg-gray-50 shadow mt-2 p-2">
        <v-md-editor
          v-model="formState.content"
          :disabled-menus="[]"
          @upload-image="handleUploadImage"
          :insertWithSize="true"
          height="350px"
        ></v-md-editor>
      </div>

      <div class="bg-gray-100 shadow p-2">
        <a-button type="primary" @click="onSubmit">更新</a-button>
        <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
        <!-- <a-button style="margin-left: 10px" @click="reloads">刷新</a-button> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form {
  @apply h-full w-full;

  .form_content {
    @apply bg-white h-[480px] overflow-auto;

    .form_content_1 {
      @apply mt-3;
    }
  }
}
</style>

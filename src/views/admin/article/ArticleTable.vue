<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { columns, state, resUser, resClassify } from './data'
import { article, user, classify, tags } from '@/api'
import { routers, routerId } from '@/hooks/routers'
import { navName } from '../utils/data'
import { storage } from '@/utils/storage/storage'
import { resTag } from '../snippet/data'

const reload: any = inject('reload')
const confirm = async (data: any) => {
  if (data.user.id === storage.get('id')) {
    await article.DeleteAsync(data.id).then(() => {
      message.success('删除成功')
      reload()
    })
  } else {
    message.success('无权限!')
  }
}
const cancel = () => {
  message.info('已取消')
}

const Edit = (id: number, userId: number) => {
  if (userId === storage.get('id') || 42 === storage.get('id')) {
    routerId('/Admin-index/ArticleEdit', id)
  } else {
    message.success('无权限!')
  }
}

async function GetContains(datas: any) {
  if (datas.data === null) {
    await GetFy(0, 'null', state.order)
  } else {
    state.resData = await (await article.contains(0, '0', datas.data)).data.data.items
  }
}
async function GetType() {
  if (state.userStr === '所有用户' && state.ClassifyStr === '所有分类' && state.tagStr === '所有标签') {
    await GetFy(0, 'null', state.order)
  } else if (state.ClassifyStr != '所有分类' && state.userStr === '所有用户' && state.tagStr === '所有标签') {
    await GetFy(1, state.ClassifyStr, state.order)
  } else if (state.ClassifyStr === '所有分类' && state.userStr != '所有用户' && state.tagStr === '所有标签') {
    await GetFy(2, state.userStr, state.order)
  } else if (state.ClassifyStr === '所有分类' && state.userStr === '所有用户' && state.tagStr != '所有标签') {
    await GetFy(4, state.tagStr, state.order)
  } else {
    await GetFy(3, state.userStr + ',' + state.ClassifyStr, state.order)
  }
}

const cz = () => {
  state.tagStr = '所有标签'
  state.userStr = '所有用户'
  state.ClassifyStr = '所有分类'
  reload()
}

/**
 * 分页查询
 * @param identity 所有:0 || 分类:1 || 用户:2 || 用户/分类(','分割):3 || 标签:4
 * @param type 查询参数
 * @param order 排序条件[data:时间 按id排序]
 * @returns
 */
async function GetFy(identity: number, type: string, order: boolean) {
  state.resData = await (await article.GetFy(identity, type, 1, 1000, 'id', order)).data.data.items
}
onMounted(async () => {
  await GetFy(0, 'null', state.order)
  resUser.value = await (await user.info(1, 100, true)).data.data
  resClassify.value = await (await classify.GetAll()).data.data
  resTag.value = await (await tags.GetAll()).data.data
  navName.name = '文章'
  navName.name2 = '文章列表'
})
</script>
<template>
  <section>
    <div class="flex table-operations">
      <div>
        <a-button @click="routers('/Admin-index/ArticleAdd')">添加</a-button>
      </div>
      <div>
        <a-button @click="cz()">刷新</a-button>
      </div>
      <div>
        <a-select ref="select" v-model:value="state.userStr" @change="GetType" style="width: 105px">
          <a-select-option value="所有用户">所有用户</a-select-option>
          <a-select-option :value="res.nickname" v-for="res in resUser" :key="res.id">{{
            res.nickname
          }}</a-select-option>
        </a-select>
      </div>

      <div>
        <a-select ref="select" v-model:value="state.ClassifyStr" @change="GetType" style="width: 105px">
          <a-select-option value="所有分类">所有分类</a-select-option>
          <a-select-option :value="res.name" v-for="res in resClassify" :key="res.id">{{ res.name }}</a-select-option>
        </a-select>
      </div>
      <div>
        <a-select ref="select" v-model:value="state.tagStr" @change="GetType" style="width: 105px">
          <a-select-option value="所有标签">所有标签</a-select-option>
          <a-select-option :value="res.name" v-for="res in resTag" :key="res.id">{{ res.name }}</a-select-option>
        </a-select>
      </div>

      <div>
        <a-input-search placeholder="标题搜索" style="width: 200px" @change="GetContains" />
      </div>
    </div>
    <div>
      <a-table
        size="small"
        :bordered="true"
        :columns="columns"
        rowKey="id"
        :data-source="state.resData"
        :pagination="{ pageSize: 12 }"
        :scroll="{ x: 1280, y: 420 }"
      >
        <template #ed="{ record }">
          <a type="primary" ghost @click="Edit(record.id, record.user.id)">编辑</a>
        </template>
        <template #de="{ record }">
          <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="confirm(record)" @cancel="cancel">
            <a href="#">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.table-operations {
  @apply bg-gray-100 p-1;
  div {
    @apply ml-1;
  }
}
</style>

<script lang="ts" setup>
import { classify, classifyType } from '@/api'
import { message } from 'ant-design-vue'
import { quVisible, quVisible2, quVisible3, resClassifyType, classifyTypeState, state, resClassify } from '../data'
const AddClass = async () => {
  quVisible2.value = true
  await classify.GetAll().then((res) => {
    resClassify.value = res.data.data
  })
}
const Delete = async (id: any) => {
  await classifyType.Deletes(id).then((res) => {
    if (res.data.succeeded) {
      message.success('删除成功')
      GetFy(3, state.classTypeId, 1, 100)
    }
  })
}
const UpDate = async (id: number) => {
  quVisible3.value = true
  await classifyType.GetById(id).then((res) => {
    classifyTypeState.name = res.data.data.name
    classifyTypeState.classifyId = res.data.data.classifyId
    classifyTypeState.id = res.data.data.id
  })

  await classify.GetAll().then((res) => {
    resClassify.value = res.data.data
  })
}
const UpClassType = async () => {
  await classifyType.Updates(classifyTypeState).then(() => {
    message.loading('更新中..', 1.5).then(
      async () => {
        message.success('更新成功', 1)
        await GetFy(3, classifyTypeState.classifyId, 1, 100)
        quVisible3.value = false
      },
      () => {}
    )
  })
  quVisible3.value = false
}
const GetFy = async (identity: number, type: string | number, pageindex: number, pagesize: number) => {
  await classifyType.GetFy(identity, type, pageindex, pagesize).then((res) => {
    resClassifyType.value = res.data.data.items
  })
}

const AddClassType = async () => {
  classifyTypeState.classifyId = state.classTypeId
  await classifyType.Add(classifyTypeState).then(() => {
    message.loading('添加中..', 1.5).then(
      async () => {
        message.success('添加成功', 1)
        await GetFy(3, classifyTypeState.classifyId, 1, 100)
        quVisible2.value = false
      },
      () => {}
    )
  })
}
</script>
<template>
  <div>
    <a-modal
      v-model:visible="quVisible"
      @ok="AddClass"
      title="子分类"
      cancelText="关闭"
      :centered="true"
      okText="新增"
      :closable="false"
    >
      <div class="p-1">
        <table border="1" class="w-full text-base">
          <tr class="bg-gray-300">
            <th>ID</th>
            <th>昵称</th>
            <th>类别</th>
            <th>操作</th>
            <th>操作</th>
          </tr>
          <tr class="" v-for="(item, index) in resClassifyType" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.classify.name }}</td>
            <td>
              <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="Delete(item.id)">
                <a href="#">删除</a>
              </a-popconfirm>
            </td>

            <td><a @click="UpDate(item.id)">编辑</a></td>
          </tr>
        </table>
      </div>
    </a-modal>

    <a-modal
      v-model:visible="quVisible2"
      @ok="AddClassType"
      title="添加子类"
      cancelText="关闭"
      :centered="true"
      okText="确定"
      :closable="false"
      :mask="false"
    >
      <div class="bg-gray-50 m-1 p-1">
        <a-select ref="select" v-model:value="state.classTypeId" style="width: 130px">
          <a-select-option :value="res.id" v-for="res in resClassify" :key="res.id">{{ res.name }}</a-select-option>
        </a-select>
      </div>
      <div class="bg-gray-50 m-1 p-1">
        <a-input v-model:value="classifyTypeState.name" prefix="名称:" />
      </div>
    </a-modal>

    <div>
      <a-modal
        v-model:visible="quVisible3"
        @ok="UpClassType"
        title="更新子类"
        cancelText="关闭"
        :centered="true"
        okText="更新"
        :closable="false"
        :mask="false"
      >
        <div class="bg-gray-50 m-1 p-1">
          <a-select ref="select" v-model:value="classifyTypeState.classifyId" style="width: 130px">
            <a-select-option :value="res.id" v-for="res in resClassify" :key="res.id">{{ res.name }}</a-select-option>
          </a-select>
        </div>
        <div class="bg-gray-50 m-1 p-1">
          <a-input v-model:value="classifyTypeState.name" prefix="名称:" />
        </div>
      </a-modal>
    </div>
  </div>
</template>

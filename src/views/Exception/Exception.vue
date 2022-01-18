<template>
  <section class="bg-white rounded">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="问题报告">
        <a-form
          :model="formState"
          v-bind="layout"
          name="nest-messages"
          :validate-messages="validateMessages"
          @finish="onFinish"
        >
          <a-form-item :name="['name']" label="提交人" :rules="[{ required: true }]">
            <a-input v-model:value="formState.name" />
          </a-form-item>
          <a-form-item :name="['issue']" label="异常问题" :rules="[{ required: true }]">
            <a-input v-model:value="formState.issue" />
          </a-form-item>

          <a-form-item :name="['particulars']" label="异常详情" :rules="[{ required: true }]">
            <a-textarea v-model:value="formState.particulars" :rows="12" />
          </a-form-item>
          <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
            <a-button type="primary" html-type="submit">提交</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="待处理" force-render>
        <div class="mx-8 mb-8">
          <div class="rounded flex h-[55px] shadow mb-2" v-for="(item, index) in resData.resultData" :key="index">
            <div class="my-1 text-lg ml-2 parent">
              {{ item.issue }}
            </div>

            <div class="rounded bg-gray-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
              {{ item.name }}
            </div>

            <div class="rounded bg-red-400 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">待处理</div>
            <div class="rounded bg-yellow-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
              {{ item.createTime }}
            </div>

            <div class="rounded font-light bg-gray-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
              {{ item.particulars.substr(1, 20) }}...
            </div>
          </div>

          <a-pagination
            @change="currentchange"
            :total="state.count"
            :pageSize="state.pagesize"
            :current="state.current"
            show-quick-jumper
          ></a-pagination>
        </div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="问题查阅">
        <div class="mx-8 mb-8">
          <div class="rounded flex h-[55px] shadow mb-2" v-for="(item, index) in resData.resultData2" :key="index">
            <div class="my-1 text-lg ml-2 parent">
              {{ item.issue }}
            </div>

            <div class="rounded bg-gray-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
              {{ item.name }}
            </div>

            <div class="rounded bg-green-300 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">完成</div>
            <div class="rounded bg-yellow-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
              {{ item.createTime }}
            </div>

            <div class="rounded font-light bg-gray-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent">
              {{ item.particulars.substr(1, 10) }}...
            </div>

            <a
              class="rounded font-light bg-lime-100 my-3 text-base text-center ml-4 px-2 text-gray-600 parent"
              @click="showModal"
            >
              详情
            </a>
          </div>

          <a-pagination
            @change="currentchange2"
            :total="state2.count"
            :pageSize="state2.pagesize"
            :current="state2.current"
            show-quick-jumper
          ></a-pagination>
        </div>
      </a-tab-pane>
    </a-tabs>
  </section>

  <div>
    <a-modal
      v-model:visible="visible"
      :footer="null"
      :mask="false"
      title="测试"
      :centered="true"
      width="70%"
      wrap-class-name="full-modal"
      @ok="handleOk"
    >
      <p>进行中...</p>
      <p>进行中...</p>
      <p>进行中...</p>
      <p>进行中...</p>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { exception } from '@api/index'
import { message } from 'ant-design-vue'

const visible = ref<boolean>(false)

const showModal = () => {
  visible.value = true
}

const handleOk = (e: MouseEvent) => {
  console.log(e)
  visible.value = false
}

const state: any = reactive({
  count: 0,
  page: 1, //页码
  pagesize: 10, //每页条数
  current: 1
})

const state2: any = reactive({
  count: 0,
  page: 1, //页码
  pagesize: 10, //每页条数
  current: 1
})

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}
const validateMessages = {
  required: '${label} is 不能为空!'
}

const currentchange = async (val: number) => {
  state.current = val
  await exception.GetFy(0, state.current, state.pagesize, 'id', true).then((result) => {
    resData.resultData = result.data.data.items
    state.count = result.data.data.totalCount
  })
}
const currentchange2 = async (val: number) => {
  state2.current = val
  await exception.GetFy(1, state2.current, state2.pagesize, 'id', true).then((result) => {
    resData.resultData2 = result.data.data.items
    state2.count = result.data.data.totalCount
  })
}
const formState: any = reactive({
  id: 0,
  name: '',
  issue: '',
  particulars: '',
  create_time: '',
  identity: 0,
  reply: ''
})
const onFinish = async () => {
  await exception.Add(formState).then((result) => {
    if (result.status === 200) {
      message.success('已提交')
      ;(formState.name = ''),
        (formState.issue = ''),
        (formState.particulars = ''),
        (formState.create_time = ''),
        GetFy1()
    }
  })
}
const resData: any = reactive({
  resultData: [],
  resultData2: []
})
const GetFy1 = async () => {
  await exception.GetFy(0, state.page, state.pagesize, 'id', true).then((result) => {
    resData.resultData = result.data.data.items
    state.count = result.data.data.totalCount
  })
}

const GetFy2 = async () => {
  await exception.GetFy(1, state2.page, state2.pagesize, 'id', true).then((result) => {
    resData.resultData2 = result.data.data.items
    state2.count = result.data.data.totalCount
  })
}
onMounted(async () => {
  await GetFy1()
  await GetFy2()
})
const activeKey = ref('3')
</script>
<style lang="scss">
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-modal {
  .ant-modal {
    max-width: 90%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(90vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>

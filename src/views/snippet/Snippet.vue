<script lang="ts" setup>
import { snippet, snippetType } from '@/api'

const resDate: any = ref([])
const resText: any = ref('')
const resType: any = ref([])
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
})
const GetApi = async () => {
  await snippetType.GetFy(1, 1000).then((res) => {
    resType.value = res.data.data.items
  })
}

async function clickName(id: number) {
  await snippet.GetById(id).then((res) => {
    resText.value = res.data.data.text
  })
}
async function GetKey(e: any) {
  await snippet.GetFy(1, e, 1, 10, true).then((res) => {
    resDate.value = res.data.data.items
  })
}

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal
  }
)

onMounted(async () => {
  await GetApi()
})
</script>

<template>
  <section class="rounded flex bg-gray-200 h-480px shadow p-4">
    <div class="text-center w-[12%] overflow-auto scro">
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        theme="light"
        :inline-collapsed="state.collapsed"
        v-for="item in resType"
        :key="item.id"
        @click="GetKey(item.name)"
      >
        <a-menu-item :key="item.id">
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="mx-1 text-center w-[15%] scro overflow-auto">
      <div class="mb-1"><a-input-search></a-input-search></div>
      <div v-for="item in resDate" :key="item.id">
        <div class="cursor-pointer bg-gray-50 text-base py-2 hover:text-blue-400" @click="clickName(item.id)">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="bg-white w-[73%] overflow-auto">
      <div>
        <v-md-preview :text="resText"></v-md-preview>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.scro::-webkit-scrollbar {
  display: none;
}
</style>

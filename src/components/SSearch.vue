<script lang="ts" setup>
// import { software } from '@/api/index'
// const props = defineProps({
//   // resultData: {
//   //   type: Array as () => Array<any>, //(string也可以是其他你自定义的接口)
//   //   required: true,
//   //   default: () => []
//   // },
//   ipuName: String
// })

const search = async () => {
  // if (resData.ipuName === '') {
  //   software.GetFy(0, 'null', 1, 9, 'id', true).then((res) => {
  //     resData.resultData = res.data.data.items
  //     resData.count = res.data.data.totalCount
  //     resData.page = res.data.data.pageIndex
  //     resData.pagesize = res.data.data.pageSize
  //   })
  //   return
  // }
  // software.Contains(0, 'null', props.ipuName).then((res) => {
  //   resData.resultData = res.data.data
  // })
}
</script>
<template>
  <div class="app-header">
    <div><p class="app-name">查询</p></div>
    <div class="search-wrapper">
      <input class="search-input" type="text" placeholder="Search" @input="search()" />
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="feather feather-search"
        viewBox="0 0 24 24"
      >
        <defs></defs>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    </div>
    <div class="app-header-right">
      <!-- <button>
          <svg t="1640155226218" viewBox="0 0 1024 1024" version="1.1" p-id="12946" width="24" height="24">
            <path
              d="M736 960h-448c-117.376 0-179.2-60.992-179.2-179.2v-134.848h89.6V780.8c0 68.416 21.632 89.6 89.6 89.6h448c67.968 0 89.6-21.184 89.6-89.6v-134.848h89.6V780.8c0 118.208-61.824 179.2-179.2 179.2z m-197.312-196.416a34.112 34.112 0 0 1-53.44 0L259.776 473.216a30.912 30.912 0 0 1 24.768-50.816H377.6c17.152 0 44.8-26.88 44.8-44.8V108.8a44.8 44.8 0 0 1 44.8-44.8h89.6a44.8 44.8 0 0 1 44.8 44.8v268.8c0 17.92 26.304 44.8 44.8 44.8h93.056c27.584 0 41.344 29.44 24.768 50.816l-225.536 290.368z"
              p-id="12947"
              fill="#515151"
            ></path>
          </svg>
        </button> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

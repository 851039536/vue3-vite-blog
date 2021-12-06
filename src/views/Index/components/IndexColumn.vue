<script lang="ts" setup>
import { ProfileOutlined, FileSearchOutlined } from '@ant-design/icons-vue'
import { state } from '../data'
import { method } from '../index'
</script>
<template>
  <!-- 文档列表 -->
  <section class="flex">
    <div class="w-3/4 mr-6 row-span-3 bg-white rounded-lg shadow">
      <div class="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
        <span>文档列表</span>
        <a-select
          ref="select"
          :bordered="false"
          v-model:value="state.navStr"
          style="width: 80px"
          @change="method.handleChange"
        >
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option :value="item.name" v-for="item in state.classifyData" :key="item.id">{{
            item.name
          }}</a-select-option>
        </a-select>
      </div>
      <div class="overflow-y-auto" style="max-height: 20rem">
        <ul class="p-6 space-y-2">
          <li class="flex items-center" v-for="item in state.resultData" :key="item.id">
            <div class="mr-1">
              <FileSearchOutlined :style="{ fontSize: '24px' }" />
            </div>
            <span class=""
              ><a class="text-lg text-gray-600" @click="method.skip(item.id)">{{ item.title }}</a>
            </span>

            <span class="ml-auto text-lg">{{ item.classify.name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-1/4 row-span-3 bg-white rounded-lg shadow">
      <div class="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
        <span>其他</span>
      </div>
      <div class="overflow-y-auto" style="max-height: 20rem">
        <ul class="p-6 space-y-2">
          <li class="flex items-center" v-for="item in state.classifyData" :key="item.id">
            <div class="mr-1">
              <ProfileOutlined :style="{ fontSize: '24px' }" />
            </div>
            <span
              ><a class="text-lg text-gray-600">{{ item.name }}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- end 文档列表-->

  <!-- 分页 -->
  <section>
    <div class="blogs-page">
      <a-pagination
        @change="method.currentchange"
        :total="state.count"
        :pageSize="state.pagesize"
        :current="state.current"
        show-quick-jumper
      ></a-pagination>
    </div>
  </section>
  <!-- end 分页 -->
</template>

<style lang="scss" scoped>
//@import "./index.scss";
</style>

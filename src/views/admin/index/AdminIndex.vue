<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { routers } from '@/hooks/routers'
import { storage } from '@/utils/storage/storage'
import { navName } from '../utils/data'
const state = reactive({
  showRouter: true
})
function zx() {
  storage.remove('token')
  storage.remove('id')
  storage.remove('name')
  if (storage.get('token') === 'token') {
    message.info('注销成功')
    routers('/Login')
  }
}
const handleClick = (e: any) => {
  switch (e.key) {
    case '1-1':
      routers('/Admin-index/ArticleTable')
      break
    case '1-2':
      routers('/Admin-index/ClassifyTable')
      break
    case '1-3':
      routers('/Admin-index/tagTable')
      break
    case '2-1':
      routers('/Admin-index/SoftwareTable')
      break
    case '3-1':
      routers('/Admin-index/ExceptionTable')
      break
    case '4-1':
      routers('/Admin-index/SnippetTable')
      break
    default:
      routers('/')
      break
  }
}

function reload() {
  state.showRouter = false
  nextTick(() => {
    state.showRouter = true
  })
}
provide('reload', reload)

onMounted(async () => {
  if (storage.get('token') === 'token') {
    message.info('未登录')
    routers('/Login')
  }
})
</script>
<template>
  <div class="admin_index">
    <a-layout>
      <header class="header">
        <a class="logo">控制台</a>
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><a @click="routers('/index/indexColumn')">主页</a></li>
          <li><a @click="zx()">注销</a></li>
          <li>
            <a
              ><a-avatar>{{ storage.get('name') }}</a-avatar></a
            >
          </li>
        </ul>
      </header>
      <a-layout>
        <div class="bg-warm-gray-50 shadow mt-1">
          <a-layout-sider breakpoint="lg" collapsed-width="0" width="210">
            <a-menu mode="inline" @click="handleClick" :style="{ height: '100%', borderRight: 0 }">
              <a-sub-menu key="article">
                <template #title>
                  <span class="text-base"> 文章 </span>
                </template>
                <a-menu-item key="1-1">文章管理</a-menu-item>
                <a-menu-item key="1-2">分类管理</a-menu-item>
                <a-menu-item key="1-3">标签管理</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <template #title>
                  <span class="text-base"> 软件 </span>
                </template>
                <a-menu-item key="2-1">软件管理</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub3">
                <template #title>
                  <span class="text-base"> 异常处理 </span>
                </template>
                <a-menu-item key="3-1">异常管理</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub4">
                <template #title>
                  <span class="text-base"> 代码片段 </span>
                </template>
                <a-menu-item key="4-1">片段管理</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub4">
                <template #title>
                  <span class="text-base"> 用户设置 </span>
                </template>
                <a-menu-item key="4-1">用户管理</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
        </div>

        <a-layout style="padding: 0 10px 10px">
          <a-breadcrumb style="margin: 10px 0">
            <a-breadcrumb-item>{{ navName.name }}</a-breadcrumb-item>
            <a-breadcrumb-item>{{ navName.name2 }}</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content
            :style="{
              background: '#fff',
              padding: '10px',
              margin: 0,
              minHeight: '98%'
            }"
          >
            <router-view v-if="state.showRouter"></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
.admin_index {
  @apply h-full w-full z-10 fixed;

  .header {
    @apply bg-white  shadow w-full;
    .logo {
      display: block;
      float: left;
      padding: 10px 20px;
      font-size: 2em;
      text-decoration: none;
    }
    .menu-icon {
      position: relative;
      display: inline-block;
      float: right;
      padding: 28px 20px;
      cursor: pointer;
      user-select: none;
      .navicon {
        position: relative;
        display: block;
        width: 18px;
        height: 2px;
        background: #333;
        transition: background 0.2s ease-out;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      overflow: hidden;
      list-style: none;
      background-color: #fff;
    }
    li a {
      display: block;
      padding: 20px 20px;
      text-decoration: none;
      border-right: 1px solid #f4f4f4;
    }
    .menu {
      clear: both;
      max-height: 0;
      transition: max-height 0.2s ease-out;

      li {
        @apply text-base;
      }
    }
  }

  .header .menu-icon .navicon::before,
  .header .menu-icon .navicon::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #333;
    transition: all 0.2s ease-out;
    content: '';
  }

  .header .menu-icon .navicon::before {
    top: 5px;
  }

  .header .menu-icon .navicon::after {
    top: -5px;
  }

  /* menu btn */

  /* 48em = 768px */

  @media (min-width: 48em) {
    .header li {
      float: left;
    }

    .header li a {
      padding: 20px 30px;
    }

    .header .menu {
      float: right;
      clear: none;
      max-height: none;
    }

    .header .menu-icon {
      display: none;
    }
  }
}
</style>

/*
 * @Author: your name
 * @Date: 2021-09-04 08:43:27
 * @LastEditTime: 2021-10-29 11:45:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index/Index.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/tool',
    name: 'tool',
    component: () => import('../views/tool/Tool.vue')
  },
  {
    path: '/vmdContent',
    name: 'vmdContent',
    component: () => import('../views/editor/VmdContent.vue')
  },
  { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

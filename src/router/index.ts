/*
 * @Author: your name
 * @Date: 2021-09-04 08:43:27
 * @LastEditTime: 2021-09-07 15:32:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue')
  },
  // {
  //   path: '/header',
  //   name: 'homeheader',
  //   component: () => import('../components/Header.vue')
  // },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index/Index.vue')
  },
  { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

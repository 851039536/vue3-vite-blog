
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
    children: [
      // 添加子路由
      {
        path: 'indexColumn',
        name: 'indexColumn',
        component: () => import('../views/Index/components/IndexColumn.vue')
      }],
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

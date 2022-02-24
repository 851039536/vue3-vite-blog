
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index/Index.vue'),
    meta: {
      keepAlive: true
    },
    children: [
      // 添加子路由
      {
        path: 'indexColumn',
        name: 'indexColumn',
        component: () => import('../views/Index/components/IndexColumn.vue')
      },
      {
        path: 'Procedure',
        name: 'Procedure',
        component: () => import('../views/Procedure/Procedure.vue')
      },
      {
        path: 'Exception',
        name: 'Exception',
        component: () => import('../views/Exception/Exception.vue')
      }],

  },

  {
    path: '/vmdContent',
    name: 'vmdContent',
    component: () => import('../views/editor/VmdContent.vue')
  },
  { path: '/', redirect: { name: 'Home' } },
  // ------------------------------------------------------------------------------admin---------------------------------------------------
  // ------------------------------------------------------------------------------admin---------------------------------------------------

  {
    path: '/Admin-index',
    name: 'Admin-index',
    component: () => import('@/views/admin/index/AdminIndex.vue'),
    children: [
      // 添加子路由
      {
        path: 'ArticleTable',
        name: 'ArticleTable',
        component: () => import('@/views/admin/article/ArticleTable.vue')
      },
      {
        path: 'ArticleAdd',
        name: 'ArticleAdd',
        component: () => import('@/views/admin/article/ArticleAdd.vue')
      },
      {
        path: 'ArticleEdit',
        name: 'ArticleEdit',
        component: () => import('@/views/admin/article/ArticleEdit.vue')
      },
      {
        path: 'SoftwareTable',
        name: 'SoftwareTable',
        component: () => import('@/views/admin/software/SoftwareTable.vue')
      },
      {
        path: 'SoftwareAdd',
        name: 'SoftwareAdd',
        component: () => import('@/views/admin/software/SoftwareAdd.vue')
      },

    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
// 页面切换之前取消上一个路由中未完成的请求
router.beforeEach((_to: any, _from: any, next: () => void) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  // 进度条
  NProgress.done()
})
export default router


import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'

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
  { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 页面切换之前取消上一个路由中未完成的请求
router.beforeEach((_to, _from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  // 进度条
  NProgress.done()
})
export default router

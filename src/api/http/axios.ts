
import axios from 'axios'
import qs from "qs"
import store from "@/store/index"
import router from '@/router/index'
import { aspShow } from '@/hooks/data'
import { message } from 'ant-design-vue/es'
import NProgress from 'nprogress'


console.log(import.meta.env.VITE_API_DOMAIN)
axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN
axios.defaults.timeout = 12000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*"
axios.interceptors.request.use(function (config: any) {


  aspShow.value = true
  NProgress.start()
  // 在发送请求之前做某件事
  if (
    config.method === "post" ||
    config.method === "put" ||
    config.method === "delete"
  ) {
    if (config.method !== 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
      config.data = qs.parse(config.data)
    }
  }
  // 若是有做鉴权token , 就给头部带上token
  if (store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config;
}, (error: { data: { error: { message: any; } } }) => {

  return Promise.reject(error.data.error.message)
})

axios.interceptors.response.use(function (config: any) {

  aspShow.value = false
  NProgress.done()
  if (config.status === 200 || config.status === 204) {
    return Promise.resolve(config)
  } else {
    return Promise.reject(config)
  }
},
  function (error) {
    aspShow.value = false
    NProgress.done()
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401:
          router.replace({
            path: '/login',
            query: {
            }
          });
          break;
        // 403 token过期
        case 403:
          // Toast({
          //   message: '登录过期，请重新登录',
          //   duration: 1000,
          //   forbidClick: true
          // });
          // 清除token
          store.dispatch('FedLogOut').then(() => {
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
            router.replace({
              path: '/login',
              query: {
                // redirect: router.currentRoute.fullPath
              }
            })
          })
          break;

        // 404请求不存在
        case 404:
          // Toast({
          //   message: '网络请求不存在',
          //   duration: 1500,
          //   forbidClick: true
          // });
          break;
        // 其他错误，直接抛出错误提示
        default:
          message.error(error.response.status + ":" + error.response.statusText)

      }
      aspShow.value = false
      NProgress.done()
      return Promise.reject(error)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      store.commit('changeNetwork', false)
    }
  }
)
export default axios

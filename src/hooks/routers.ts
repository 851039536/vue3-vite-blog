
import router from '@/router/index';

/**
 * 跳转页面
 * @param path 路径
 */
const routers = async (path: string) => {
  await router.push({
    path: path,
    query: {
      t: +new Date()
    }
  })
};

/**
 * 传值跳转
 * @param path 路径
 * @param value 值
 */
const routerId = async (path: string, value: number | string) => {
  await router.push({
    path: path,
    query: {
      id: value,
      t: +new Date()
    }
  })
};

/**
 * 
 * @param path 路径
 * @param value 值
 * @returns 
 */
async function resolve(path: string, value: number | string) {
  return router.resolve({
    path: path,
    query: {
      id: value,
      t: +new Date(),
    },
  })
}
async function resolveId(path: string, id: number) {
  const { href } = await resolve(path, id)
  await winUrl(href)
}


/**
 * @description: 前进后退
 * @param {number} n n可为正数可为负数。正数返回上一个页面
 */
async function go(n: number) {
  router.go(n)
}

/**
 * @description: 跳转新页面
 * @param {string} url
 * @return {*}
 */
async function winUrl(url: string) {
  window.open(url)
}

export {
  routers,
  routerId,
  resolve,
  go,
  winUrl,
  resolveId

}


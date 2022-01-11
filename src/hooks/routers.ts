
import router from '@/router/index';

const routers = async (path: string) => {
  await router.push({
    path: path,
    query: {
      t: +new Date()
    }
  })
};

const routerId = async (path: string, id: number) => {
  await router.push({
    path: path,
    query: {
      id: id,
      t: +new Date()
    }
  })
};

async function resolve(path: string, id: number) {
  return router.resolve({
    path: path,
    query: {
      id: id,
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


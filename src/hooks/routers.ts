/*
 * @Author: your name
 * @Date: 2021-09-09 10:37:30
 * @LastEditTime: 2021-09-24 12:18:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\hooks\index.ts
 */
import router from '../router/index';

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

export {
  routers,
  routerId
}


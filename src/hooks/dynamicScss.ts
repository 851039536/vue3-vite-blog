/*
 * @Author: your name
 * @Date: 2021-09-10 09:16:39
 * @LastEditTime: 2021-10-29 08:57:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\hooks\dynamicScss.ts
 */

async function toScss(nameCss: string) {

  switch (nameCss) {
    case "common":
      await import('../style/common.scss')
      break;
  }

}
export {
  toScss
}
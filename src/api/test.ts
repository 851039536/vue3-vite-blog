/*
 * @Author: your name
 * @Date: 2021-09-10 15:26:30
 * @LastEditTime: 2021-09-10 16:36:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\api\test.ts
 */
/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-09-10 15:25:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'
export class test {
  static async GetAll(): Promise<any> {
    return await request({
      url: "/mock2/425180/5952969",
      method: 'get',
    })
  }

  // static async names() {
  //   return request
  //     .all([
  //       // 读取详情页数据
  //       request.get("/api/SnArticle/AsyGetTestID?id=" + ),
  //     ])

  // }

}
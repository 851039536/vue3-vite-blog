/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-10-29 14:23:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'

export class article {

  static async GetFyAll(Page: number, Size: number) {
    return await request({
      url: "/api/v1/article/page-all/" + Page + "/" + Size,
      method: 'get'
    })
  }
  //查询总条数
  static async GetCount(name: string): Promise<any> {
    return await request({
      url: "/api/v1/article/count/" + name,
      method: 'POST',
    })
  }


  //主键查询
  static async GetByIdAsync(id: number): Promise<any> {
    return await request({
      url: "/api/v1/article/" + id,
      method: 'get',
    })
  }
  static async contains(name: string): Promise<any> {
    return await request({
      url: "/api/v1/article/contains/" + name,
      method: 'get',
    })
  }

  //分类分页查询
  static async GetClassify(id: string, page: number, pagesize: number): Promise<any> {
    return await request({
      url: "/api/v1/article/type-page-all/" + id + "/" + page + "/" + pagesize,
      method: 'get',
    })
  }

  static async UpdatePortionAsync(resultData: any, type: string): Promise<any> {
    return await
      request({
        // 更新
        url: "/api/SnArticle/UpdatePortionAsync?type=" + type,
        method: "put",
        data: resultData,
      })
  }

}


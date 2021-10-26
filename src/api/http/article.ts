/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-10-26 14:55:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'

export class article {

  static async GetFyAll(Page: number, Size: number, pof: string) {
    return await request({
      url: "/api/v1/article?Page=" + Page + "&Size=" + Size + "&PageOffset=" + pof,
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
  //按标签条件查询
  static async GetTagTextAsync(id: number, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetTagAsync?labelId=" + id + "&isDesc=true&cache=" + cache,
      method: 'get',
    })
  }
  //标签分页查询
  static async GetFyTitleAsync(page: number, pagesize: number): Promise<any> {
    return await request({
      url:
        "/api/SnArticle/GetFyTitleAsync?" +
        "&pageIndex=" +
        page +
        "&pageSize=" +
        pagesize +
        "&isDesc=true",
      method: 'get',
    })
  }

  //分类分页查询
  static async GetFySortTitleAsync(page: number, pagesize: number): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetfySortTestAsync?type=7&pageIndex=" + page + "&pageSize=" + pagesize + "&isDesc=true&cache=true",
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


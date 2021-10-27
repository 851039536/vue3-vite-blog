/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-10-27 14:28:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'

export class tags {

  /**
   * @description: 查询所有
   * @param {*}
   * @return {*}
   */
  static async GetAll(): Promise<any> {
    return await request({
      url: "/api/v1/tag/allt",
      method: 'get'
    })
  }
  //查询总条数
  static async GetCount(name: string): Promise<any> {
    return await request({
      url: "/api/v1/tag/count/" + name,
      method: 'POST',
    })
  }

}


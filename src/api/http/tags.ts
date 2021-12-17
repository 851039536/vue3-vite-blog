
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


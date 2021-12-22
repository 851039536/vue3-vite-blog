
import request from './axios'

export class classify {

  /**
   * @description: 查询所有
   * @param {*}
   * @return {*}
   */
  static async GetAll(): Promise<any> {
    return await request({
      url: "/api/v1/classify/allt",
      method: 'get'
    })
  }
  //查询总条数
  static async GetCount(name: string): Promise<any> {
    return await request({
      url: "/api/v1/classify/count/" + name,
      method: 'POST',
    })
  }

}


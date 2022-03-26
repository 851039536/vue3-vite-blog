
import request from './axios'

export class exception {

  /**
   * 分页查询
   * @param identity 审核中:0 || 审核通过:1 || 分类/审核:2
   * @param type 查询参数 || 多条件(','分割)
   * @param page 当前页码
   * @param size 每页记录条数
   * @param ordering 排序条件[data:时间 按id排序]
   * @param isdesc 是否倒序[true/false]
   * @returns 
   */
  static async GetFy(identity: number, type: string, page: number, size: number, ordering: string, isdesc: boolean) {
    return await request({
      url: "/api/v1/exception/fy/" + identity + "/" + type + "/" + page + "/" + size + "/" + ordering + "/" + isdesc,
      method: 'get'
    })
  }


  //主键查询
  static async GetById(id: number) {
    return await request({
      url: "/api/v1/exception/by-id/" + id,
      method: 'get',
    })
  }


  static async Add(resultData: any) {
    return await
      request({
        url: "/api/v1/exception",
        method: "post",
        data: resultData,
      })
  }
  static async Updata(resultData: any) {
    return await
      request({
        url: "/api/v1/exception",
        method: "put",
        data: resultData,
      })
  }
  static async Delete(id: number) {
    return await
      request({
        url: "/api/v1/exception/" + id,
        method: "DELETE",
      })
  }

}


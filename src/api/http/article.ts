
import request from './axios'

export class article {

  /**
   * 分页查询
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询参数
   * @param page 当前页码
   * @param size 每页记录条数
   * @param ordering 排序条件[data:时间 按id排序]
   * @param isdesc 是否倒序[true/false]
   * @returns 
   */
  static async GetFy(identity: number, type: string, page: number, size: number, ordering: string, isdesc: boolean) {
    return request({
      url: "/api/v1/article/fy/" + identity + "/" + type + "/" + page + "/" + size + "/" + ordering + "/" + isdesc,
      method: 'get'
    })
  }
  //查询总条数
  static async GetCount(name: string) {
    return request({
      url: "/api/v1/article/count/" + name,
      method: 'POST',
    })
  }


  //主键查询
  static async GetByIdAsync(id: number) {
    return request({
      url: "/api/v1/article/by-id/" + id,
      method: 'get',
    })
  }
  /**
   * 模糊查询
   * @param identity 无条件:0 || 分类:1 || 用户账号:2 || 昵称:3
   * @param type 查询条件
   * @param name 查询字段
   */
  static async contains(identity: number, type: string, name: string) {
    return request({
      url: "/api/v1/article/contains/" + identity + "/" + type + "/" + name,
      method: 'get',
    })
  }

  //分类分页查询
  static async GetClassify(id: string, page: number, pagesize: number) {
    return request({
      url: "/api/v1/article/type-page-all/" + id + "/" + page + "/" + pagesize,
      method: 'get',
    })
  }

  /**更新 */
  static async Update(resultData: any) {
    return request({
      url: "/api/v1/article",
      method: "put",
      data: resultData,
    })
  }

  /**
 * @description: 删除
 * @param {number} id
 * @return {*}
 */
  static async DeleteAsync(id: number) {
    return request({
      url: "/api/v1/article/" + id,
      method: 'delete'
    })
  }

  /**
* @description: 添加
* @param {number} data
* @return {*}
*/
  static async Add(data: any) {
    return request({
      url: "/api/v1/article",
      method: 'post',
      data
    })
  }

}


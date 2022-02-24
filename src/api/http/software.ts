
import request from './axios'

export class software {

  static async FilePaths(path: string) {
    return request({
      url: "/api/v1/common/FilePaths?filePathByForeach=" + path,
      method: 'post'
    })
  }
  /**
   * 分页查询
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询参数
   * @param pageindex 当前页码
   * @param pagesize 每页记录条数
   * @param ordering 排序条件[data:时间 按id排序]
   * @param isdesc 是否倒序[true/false]
   * @returns 
   */
  static async GetFy(identity: number, type: string, pageindex: number, pagesize: number, ordering: string, isdesc: boolean) {
    return request({
      url: "/api/software/fy/" + identity + "/" + type + "/" + pageindex + "/" + pagesize + "/" + ordering + "/" + isdesc,
      method: 'get'
    })
  }
  /**
   * 模糊查询
   * @param identity 无条件:0 || 分类:1 || 用户:2
   * @param type 查询条件
   * @param name 查询字段
   * @returns 
   */
  static async Contains(identity: number, type: string, name: string) {
    return request({
      url: "/api/software/contains/" + identity + "/" + type + "/" + name,
      method: 'get',
    })
  }

  /**
   * 删除
   * @param id 主键
   * @returns 实体
   */
  static async Delete(id: number) {
    return request({
      url: "/api/software/" + id,
      method: 'delete'
    })
  }

  /**
   * 添加
   * @param entity 
   * @returns 
   */
  static async Add(entity: any) {
    return request({
      url: "/api/software",
      method: 'post',
      data: entity
    })
  }

}


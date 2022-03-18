import { get, add, del, update } from '@api/data/funApi';
import request from './axios'

export class article {

  /**
   * 分页查询
   * @param identity 所有:0 || 分类:1 || 用户:2 || 用户/分类:3 || 标签:4 || 分类/标签:5 || 子类型:6 || 分类/子分类:7 || 分类/子分类/标签:8
   * @param type 查询参数 || 多条件(','分割)
   * @param page 当前页码
   * @param size 每页记录条数
   * @param ordering 排序条件[data:时间 按id排序]
   * @param isdesc 是否倒序[true/false]
   * @returns 
   */
  static async GetFy(identity: number, type: string, page: number, size: number, ordering: string, isdesc: boolean) {
    return get("/api/v1/article/fy/" + identity + "/" + type + "/" + page + "/" + size + "/" + ordering + "/" + isdesc)
  }
  //查询总条数
  static async GetCount(name: string) {
    return request({
      url: "/api/v1/article/count/" + name,
      method: 'POST',
    })
  }

  /**
   * 主键查询
   * @param id 主键
   * @returns 
   */
  static async GetByIdAsync(id: number) {
    return get("/api/v1/article/by-id/" + id)
  }
  /**
   * 模糊查询
   * @param identity 无条件:0 || 分类:1 || 用户账号:2 || 昵称:3
   * @param type 查询条件
   * @param name 查询字段
   */
  static async contains(identity: number, type: string, name: string) {
    return get("/api/v1/article/contains/" + identity + "/" + type + "/" + name)
  }

  /**
   * 分类分页查询
   * @param id 
   * @param page 
   * @param pagesize 
   * @returns 
   */
  static async GetClassify(id: string, page: number, pagesize: number) {
    return get("/api/v1/article/type-page-all/" + id + "/" + page + "/" + pagesize)
  }

  /**
   * 更新
   * @param entity 实体
   * @returns 
   */
  static async Update(entity: any) {
    return update("/api/v1/article", entity)
  }

  /**
 * @description: 删除
 * @param {number} id
 * @return {*}
 */
  static async DeleteAsync(id: number) {
    return del("/api/v1/article/" + id)
  }

  /**
* @description: 添加
* @param {number} data
* @return {*}
*/
  static async Add(entity: any) {
    return add("/api/v1/article", entity)
  }

}


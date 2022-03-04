
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

  /**
 * 添加
 * @param entity 对象
 * @returns 
 */
  static async Add(entity: any): Promise<any> {
    return await request({
      url: "/api/v1/tag",
      method: 'POST',
      data: entity
    })
  }

  /**
  * 删除
  * @param id 主键
  * @returns 
  */
  static async Delete(id: number): Promise<any> {
    return await request({
      url: "/api/v1/tag/" + id,
      method: 'delete',
    })
  }
  /**
   * 更新
   * @param entity 
   * @returns 
   */
  static async Update(entity: any): Promise<any> {
    return await request({
      url: "/api/v1/tag",
      method: 'put',
      data: entity
    })
  }
  /**
   * 主键查询
   * @param id 主键
   * @returns 
   */
  static async GetById(id: number): Promise<any> {
    return await request({
      url: "/api/v1/tag/by-id/" + id,
      method: 'get'
    })
  }

}


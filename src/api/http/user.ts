
import request from './axios'

export class user {


  /**
   * 登录
   * @param data 
   * @returns 
   */
  static async Login(data: any): Promise<any> {
    return await request({
      url: "/api/v1/user/token",
      method: 'POST',
      data
    })
  }



  /**
   * 
   * @param page 页数
   * @param size 每页查询数量默认20条
   * @param IsDesc 排序
   * @returns 
   */
  static async info(page: number, size: number, IsDesc: boolean): Promise<any> {
    return await request({
      url: "/api/v1/user/info?Page=" + page + "&Size=" + size + "&IsDesc=" + IsDesc,
      method: 'get',
    })
  }


  //主键查询
  // static async GetByIdAsync(id: number): Promise<any> {
  //   return await request({
  //     url: "/api/v1/article/by-id/" + id,
  //     method: 'get',
  //   })
  // }
  // /**
  //  * 模糊查询
  //  * @param identity 无条件:0 || 分类:1 || 用户:2
  //  * @param type 查询条件
  //  * @param name 查询字段
  //  */
  // static async contains(identity: number, type: string, name: string): Promise<any> {
  //   return await request({
  //     url: "/api/v1/article/contains/" + identity + "/" + type + "/" + name,
  //     method: 'get',
  //   })
  // }

  // //分类分页查询
  // static async GetClassify(id: string, page: number, pagesize: number): Promise<any> {
  //   return await request({
  //     url: "/api/v1/article/type-page-all/" + id + "/" + page + "/" + pagesize,
  //     method: 'get',
  //   })
  // }

  // static async UpdatePortionAsync(resultData: any, type: string): Promise<any> {
  //   return await
  //     request({
  //       // 更新
  //       url: "/api/SnArticle/UpdatePortionAsync?type=" + type,
  //       method: "put",
  //       data: resultData,
  //     })
  // }

}


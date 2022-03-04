import { get, add, del, update } from '@api/data/funApi';
/**
 * 分类
 */
export class classify {

  /**
   * 查询
   * @returns 
   */
  static async GetAll(): Promise<any> {
    return get("/api/v1/classify/allt")
  }
  /**
   * 查询总数
   * @returns 
   */
  static async GetCount(name: string): Promise<any> {
    return get("/api/v1/classify/count/" + name)
  }
  /**
   * 主键查询
   * @param id 主键
   * @returns 
   */
  static async GetById(id: number): Promise<any> {
    return get("/api/v1/classify/by-id/" + id)
  }

  /**
   * 添加
   * @param entity 实体
   * @returns 
   */
  static async Add(entity: string): Promise<any> {
    return add("/api/v1/classify", entity)
  }
  /**
   * 删除
   * @param id 主键
   * @returns 
   */
  static async Delete(id: number): Promise<any> {
    return del("/api/v1/classify/" + id)
  }
  /**
   * 更新
   * @param entity 实体
   * @returns 
   */
  static async Update(entity: any): Promise<any> {
    return update("/api/v1/classify", entity)
  }

}


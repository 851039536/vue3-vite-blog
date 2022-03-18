import { get, add, update, del } from "@api/data/funApi";

export class classifyType {

  /**
   * 主键查询
   * @param id 
   * @returns 
   */
  static async GetById(id: number) {
    return get("/api/v1/classify-type/by-id/" + id);
  }
  /**
   * 分页查询 
   * @param identity 无条件:0 || 名称:1 || 分类:2 || 分类id:3 
   * @param type 查询条件
   * @param pageindex 
   * @param pagesize 
   * @returns 
   */
  static async GetFy(identity: number, type: string | number, pageindex: number, pagesize: number) {
    return get(`/api/v1/classify-type/fy/${identity}/${type
      }/${pageindex}/${pagesize}`);
  }
  static async Add(entity: any) {
    return add("/api/v1/classify-type", entity);
  }
  static async Updates(entity: any) {
    return update("/api/v1/classify-type", entity);
  }
  static async Deletes(id: number) {
    return del("/api/v1/classify-type/" + id);
  }
}



import { get, add, update, del } from "@api/data/funApi";

export class snippetType {


  /**
   * 主键查询
   * @param id 
   * @returns 
   */
  static async GetById(id: number) {
    return get("/api/v1/snippet-type/by-id/" + id);
  }
  /**
   * 分页查询
   * @param pageindex 
   * @param pagesize 
   * @returns 
   */
  static async GetFy(pageindex: number, pagesize: number) {
    return get("/api/v1/snippet-type/fy/" + pageindex + "/" + pagesize);
  }
  static async Add(entity: any) {
    return add("/api/v1/snippet-type", entity);
  }
  static async Updates(entity: any) {
    return update("/api/v1/snippet-type", entity);
  }
  static async Deletes(id: number) {
    return del("/api/v1/snippet-type/" + id);
  }
}



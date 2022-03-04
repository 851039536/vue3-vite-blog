import { get, del, add, update } from "@api/data/funApi";

export class snippet {

  /**
   * 分页查询
   * @param identity 所有:0 || 分类:1 || 用户:2 || 标签:3
   * @param type 查询参数
   * @param pageindex 当前页码
   * @param pagesize 每页记录条数
   * @param isdesc 是否倒序[true/false]
   * @returns 
   */
  static async GetFy(identity: number, type: string, pageindex: number, pagesize: number, isdesc: boolean) {
    return get("/api/snippet/fy/" + identity + "/" + type + "/" + pageindex + "/" + pagesize + "/" + isdesc);
  }


  /**
   * 主键查询
   * @param id 主键
   * @returns 
   */
  static async GetById(id: number) {
    return get("/api/snippet/by-id/" + id);
  }

  /**
   * 模糊查询
   * @param identity 所有:0 || 分类:1 || 标签:2 || 用户:3
   * @param type 查询参数 identity为0默认null
   * @param name 查询字段
   * @returns 
   */
  static async GetContains(identity: number, type: string, name: string) {
    return get("/api/snippet/contains/" + identity + "/" + type + "/" + name);
  }
  static async Delete(id: number) {
    return del("/api/snippet/" + id);
  }
  static async Add(entity: any) {
    return add("/api/snippet", entity);
  }
  static async Updates(entity: any) {
    return update("/api/snippet", entity);
  }
}


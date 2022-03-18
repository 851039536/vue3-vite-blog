import { article, classifyType } from "@api/index";
import { resolveId } from "@/hooks/routers";
import { state } from "./data";

class method {

  static async skip(id: number) {
    resolveId('/vmdContent', id);
  }

  static async ArticleFy(identity: number, type: string, page: number, pagesize: number) {
    await article.GetFy(identity, type, page, pagesize, "id", true).then((res) => {
      state.resData = res.data.data.items;
      state.count = res.data.data.totalCount;
    });
  }
  static async ClassTypeFy(identity: number, type: string, page: number, pagesize: number) {
    classifyType.GetFy(identity, type, page, pagesize).then((res) => {
      state.resClassifyType = res.data.data.items;
    });
  }
  static async search() {
    if (state.ipuName === '') {
      method.ArticleFy(0, 'null', 1, 100)
      return
    }
    await article.contains(0, 'null', state.ipuName).then((res) => {
      state.resData = res.data.data.items
    })
  }

  static async currentchange(val: number) {
    state.current = val
    if (state.typeStr === '所有分类' && state.tagStr === '所有标签') {
      method.ArticleFy(0, 'null', state.current, state.pagesize)
    } else if (state.typeStr != '所有分类' && state.tagStr === '所有标签') {
      method.ArticleFy(7, state.typeStr + ',' + state.ztypeStr, state.current, state.pagesize)
    } else if (state.typeStr == '所有分类' && state.tagStr != '所有标签') {
      method.ArticleFy(4, state.tagStr, state.current, state.pagesize)
    } else if (state.typeStr != '所有分类' && state.tagStr != '所有标签') {
      method.ArticleFy(8, state.typeStr + ',' + state.ztypeStr + ',' + state.tagStr, state.current, state.pagesize)
    }
  }

  static async handleChange() {
    if (state.typeStr === '所有分类' && state.tagStr === '所有标签') {

      method.ArticleFy(0, 'null', state.page, state.pagesize)
      await method.ClassTypeFy(0, 'null', state.page, state.pagesize)

    } else if (state.typeStr != '所有分类' && state.tagStr != '所有标签') {
      state.current = 1
      method.ArticleFy(5, state.typeStr + "," + state.tagStr, state.current, state.pagesize)

    } else if (state.typeStr != '所有分类' && state.tagStr == '所有标签') {
      await method.ClassTypeFy(2, state.typeStr, state.current, state.pagesize)
    } else if (state.typeStr == '所有分类' && state.tagStr != '所有标签') {
      state.current = 1
      method.ArticleFy(4, state.tagStr, state.current, state.pagesize)
    }
  }
}
export {
  method
}
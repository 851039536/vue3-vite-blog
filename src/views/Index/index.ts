/*
 * @Author: your name
 * @Date: 2021-10-29 14:59:25
 * @LastEditTime: 2021-10-29 15:34:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\Index\index.ts
 */

import { article } from "../../api";
import { resolveId } from "../../hooks/routers";
import { state } from "./data";

class method {

  static async skip(id: number) {
    resolveId('/vmdContent', id);
  }

  static async GetFyTit() {
    await article.GetFyAll(state.current, state.pagesize).then((res) => {
      state.resultData = res.data.data.items;
      state.count = res.data.data.totalCount;
    });
  }

  static async currentchange(val: number) {
    state.current = val
    if (state.navStr === 'ALL') {
      await method.GetFyTit();
    } else {
      await method.handleChange();
    }
  }

  static async handleChange() {
    if (state.navStr === 'ALL') {
      await method.GetFyTit();
    } else {
      state.current = 1
      await article
        .GetClassify(state.navStr, state.current, state.pagesize)
        .then((res) => {
          state.resultData = res.data.data.items;
          state.count = res.data.data.totalCount;
        });
    }
  }
}
export {
  method
}
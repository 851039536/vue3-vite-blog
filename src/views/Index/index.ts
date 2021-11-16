/*
 * @Author: your name
 * @Date: 2021-10-29 14:59:25
 * @LastEditTime: 2021-11-16 17:06:34
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

    await article.GetFy(0, "NULL", state.current, state.pagesize, "id", true).then((res) => {
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
      await article.GetFy(1, state.navStr, state.current, state.pagesize, "id", true)

        .then((res) => {
          console.log('%c [ state.navStr ]', 'font-size:13px; background:pink; color:#bf2c9f;', state.navStr)
          state.resultData = res.data.data.items;
          console.log('%c [ res.data.data.items ]', 'font-size:13px; background:pink; color:#bf2c9f;', res.data.data.items)
          state.count = res.data.data.totalCount;
        });
    }
  }
}
export {
  method
}
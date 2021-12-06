

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
          state.resultData = res.data.data.items;
          state.count = res.data.data.totalCount;
        });
    }
  }
}
export {
  method
}
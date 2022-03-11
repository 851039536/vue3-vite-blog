
/**
 * 软件接口
 */
export interface IntSoftware {
  id: number,
  name: string,
  version: string,
  classifyName: string,
  description: string,
  createTime: string,
  updateTime: string,
  relativePath: string,
  authorId: number,
}

export interface Snippet {
  id: number,
  name: string,
  text: string,
  typeId: number,
  tagId: number,
  userId: number,
}
export interface IntUser {
  id: number,
  username: string,
  password: string,
  nickname: string,

}
export interface IntArticle {
  id: number,
  title: string,
  content: string,
  description: string,
  createTime: string,
  updateTime: string,
  userId: number,
  tagId: number,
  classifyId: number,
}


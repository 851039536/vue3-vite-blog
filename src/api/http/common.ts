
import request from './axios'

export class common {


  static async FilePaths(path: string) {
    return request({
      url: "/api/v1/common/FilePaths?filePathByForeach=" + path,
      method: 'post'
    })
  }
  static async FileDownload(path: string) {
    let paths = encodeURIComponent(path)
    return request({
      url: "/api/v1/common/file-download/" + paths,
      method: 'get',
      responseType: 'blob',
    })
  }

  static async uploadImg(data: FormData) {
    return request({
      url: "/api/v1/common/upload-file",
      method: 'post',
      headers: { "Content-Type": "multipart/form-data" },
      data: data
    })
  }
  static async uploadFile(data: FormData) {
    return request({
      url: "/api/v1/common/file-save",
      method: 'post',
      headers: { "Content-Type": "multipart/form-data" },
      data: data
    })
  }
}


import request from './axios'

export class common {


  static async FilePaths(path: string) {
    return request({
      url: "/api/v1/common/FilePaths?filePathByForeach=" + path,
      method: 'post'
    })
  }
  static async FileDownload(path: string) {
    console.log(path)
    let paths = encodeURIComponent(path)
    console.log(paths)
    return request({
      url: "/api/v1/common/file-download/" + paths,
      method: 'get',
      responseType: 'blob',
    })
  }

}


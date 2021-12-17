
import request from './axios'

export class common {


  static async FilePaths(path: string) {
    return request({
      url: "/api/v1/common/FilePaths?filePathByForeach=" + path,
      method: 'post'
    })
  }
  static async FileDownload(path: string) {
    console.log('F%3A%5C%5CBooks%5C%5C.NETCore%E6%8C%87%E5%8D%97.pdf', path)
    return request({
      url: "/api/v1/common/file-download/" + path,
      method: 'get',
      responseType: 'blob',
    })
  }

}


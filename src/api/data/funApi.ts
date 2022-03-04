import request from '../http/axios'

/**
 * reqeust method types
 */
export enum REQUEST_METHODS {
  GET = 'GET',
  PUT = 'PUT',
  UPDATE = 'PUT',
  POST = 'POST',
  ADD = 'POST',
  DELETE = 'DELETE',
  REMOVE = 'DELETE'
}

/**
 * get request
 * @param url request path
 * @param params query params?
 * @returns
 */
export async function get(url: string, params?: any): Promise<any> {
  var result = await request({
    url,
    method: REQUEST_METHODS.GET,
    params
  });
  return result;
}

/**
 * post request
 * @param url request path
 * @param data request body params
 * @returns
 */
export function add(url: string, data: any): Promise<any> {
  return request({
    url,
    method: REQUEST_METHODS.ADD,
    data
  })
}

/**
 * put request
 * @param url request path
 * @param data request body params
 * @returns
 */
export function update(url: string, data: any): Promise<any> {
  return request({
    url,
    method: REQUEST_METHODS.UPDATE,
    data
  })
}

/**
 * delete request
 * @param url request path
 * @param data request body params
 * @returns
 */
export function del(url: string, data?: any): Promise<any> {
  return request({
    url,
    method: REQUEST_METHODS.DELETE,
    data
  })
}

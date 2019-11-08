import axios from 'axios'
import config from '@config/index'
import { message } from 'antd'

class HttpRequest {
  baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      }
    }
    return config
  }
  interceptors(instance:any) {
    instance.interceptors.request.use((config: any) => {
      return config
    }, (error: any) => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use((res:any) => {
      const { data, status } = res
      if (status == 200) {
        return data
      } else if (data) {
        return Promise.reject(data)
      }
    }, (error: any) => {
      message.error('系统繁忙，请稍微再试')
      return Promise.reject(error)
    })
  }
  request(options: any ) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}
export default HttpRequest

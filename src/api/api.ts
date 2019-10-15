import axios from '@libs/api.request'

export const ajaxExample = () => {
  return axios.request({
    url: `/index.html`,
    method: 'get'
  })
}

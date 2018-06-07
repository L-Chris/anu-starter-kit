import axios from '@/services'
import {BaseURL, ReadOnly} from '@/utils/decorators'

@BaseURL('/student')
class Base {
  static $name = ''
  static $http = axios

  @ReadOnly
  $get (
    url,
    params,
    options = {}
  ) {
    options = Object.assign({
      baseURL: `${Base.$name}${this.constructor.$name}`
    }, options, {params})
    return Base.$http.get(url, options)
  }
  @ReadOnly
  $post (
    url,
    data,
    options = {}
  ) {
    options = Object.assign({
      baseURL: `${Base.$name}${this.constructor.$name}`
    }, options)
    return Base.$http.post(url, data, options)
  }
  async find ({page, ...params}, _url = '/list') {
    page = page || 1
    let res = await this.$get(_url, {page, ...params})
    return res
  }
  findOne (params, _url = '/get') {
    return this.$get(_url, params, params)
  }
  add (data, _url = '/add', options) {
    return this.$post(_url, data, options)
  }
  save (data, _url = '/save', options) {
    return this.$post(_url, data, options)
  }
  delete (params, _url = '/delete', options) {
    return this.$get(_url, params, options)
  }
}

export default Base

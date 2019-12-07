import axios from 'axios'

// es6 class暂无提供私有属性、私有方法，在此先用Symbol实现
const _request = Symbol('_request')
const _interceptors = Symbol('_interceptors')
const _getConfig = Symbol('_getConfig')

/**
 * descriptions
 * @param url      请求路径
 * @param data     请求参数
 * @param method
 * @param isError
 * */

class HttpRequest {
  [_request] (url, data, method, isError) { // 请求封装

  }

  [_interceptors] (http, isError) { // axios拦截器

  }

  [_getConfig] () { // 获取axios实例的基本配置信息

  }
  post () {

  }

  get () {

  }

  delete () {

  }

  put () {

  }
}

export default HttpRequest 
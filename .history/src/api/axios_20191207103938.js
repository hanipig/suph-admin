import axios from 'axios'

// es6 class暂无提供私有属性、私有方法，在此先用Symbol实现
const _request = Symbol('_request')
const _interceptors = Symbol('_interceptors')
const _getConfig = Symbol('_getConfig')

class HttpRequest
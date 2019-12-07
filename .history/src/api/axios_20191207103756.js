import axios from 'axios'

// es并无实现私有属性、私有方法，在此先用Symbol实现
const _request = Symbol('_request')
const _interceptors = Symbol('_interceptors')
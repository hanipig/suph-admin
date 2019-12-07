import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import Nprogress from 'nprogress'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach(() => {

})
export default router

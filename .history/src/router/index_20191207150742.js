import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.set(0.4)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router

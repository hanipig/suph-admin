import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layout/BasicLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    children: [
      {
        path: '/test1',
        name: 'test1',
        component: () => import('@/views/test1.vue'),
        meta: {
          icon: 'pie-chart',
          title: '测试12'
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

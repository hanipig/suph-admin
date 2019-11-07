import BasicLayout from '@/layout/Index.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    meta: {
      title: '基础框架'
    },
    children: [
      {
        path: '/test1',
        name: 'test1',
        meta: {
          icon: 'pie-chart',
          title: '测试1',
        },
        component: () => import('@/views//test1/test1.vue')
      }
    ]
  }
]
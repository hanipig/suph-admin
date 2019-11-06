import BasicLayout from '@/layout/BasicLayout.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    childrens: [
      {
        path: '/test1',
        name: 'test1',
        meta: {
          name: '基本框架'
        },
        component: () => import('@/views/test1.vue'),
        meta: {
          icon: 'pie-chart',
          title: '测试1'
        }
      }
    ]
  },
]
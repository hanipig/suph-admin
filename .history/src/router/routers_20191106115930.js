import BasicLayout from '@/layout/BasicLayout.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    meta: {
      name: '基础框架'
    },
    children: [
      {
        path: '/test1',
        name: 'test1',
        meta: {
          icon: 'pie-chart',
          title: '测试1',
        },
        component: () => import('@/views/test1.vue'),
      },
      {
        path: '/test2',
        name: 'test2',
        meta: {
          icon: 'pie-chart',
          title: '测试2'
        },
        children: [
          {
            path: 'test3'
          }
        ]
      }
    ]
  },
]
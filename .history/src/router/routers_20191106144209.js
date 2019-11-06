import BasicLayout from '@/layout/index.vue'
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
        component: () => import('@/views/test1.vue')
      },
      {
        path: '/test2',
        name: 'test2',
        meta: {
          icon: 'pie-chart',
          title: '测试2'
        },
        component: () => import('@/views/test1.vue'),
        children: [
          {
            path: '/test3',
            name: 'test3',
            component: () => import('@/views/test1.vue'),
            meta: {
              title: '测试3'
            }
          },
          {
            path: '/test4',
            name: 'test4',
            component: () => import('@/views/test1.vue'),
            meta: {
              title: '测试4'
            }
          },
        ]
      },
      {
        path: '/test1',
        name: 'test1',
        meta: {
          icon: 'pie-chart',
          title: '测试1',
        },
        component: () => import('@/views/test1.vue')
      },
    ]
  },
]
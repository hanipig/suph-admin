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
            path: '/test21',
            name: 'test21',
            component: () => import('@/views/test1.vue'),
            meta: {
              icon: 'home',
              title: '测试21'
            }
          },
          {
            path: '/test22',
            name: 'test22',
            component: () => import('@/views/test1.vue'),
            meta: {
              icon: 'pie-chart',
              title: '测试22'
            },
            children: [
              {
                path: '/test221',
                name: 'test221',
                component: () => import('@/views/test1.vue'),
                meta: {
                  title: '测试221'
                }
              },
              {
                path: '/test222',
                name: 'test222',
                component: () => import('@/views/test1.vue'),
                meta: {
                  title: '测试222'
                }
              },
            ]
          },
        ]
      },
      {
        path: '/test3',
        name: 'test3',
        meta: {
          icon: 'pie-chart',
          title: '测试3',
        },
        component: () => import('@/views/test1.vue'),
        children: [
          {
            path: '/test31',
            name: 'test31',
            component: () => import('@/views/test1.vue'),
            meta: {
              title: '测试31'
            }
          },
          {
            path: '/test222',
            name: 'test222',
            component: () => import('@/views/test1.vue'),
            meta: {
              title: '测试222'
            }
          },
        ]
      },
    ]
  },
]
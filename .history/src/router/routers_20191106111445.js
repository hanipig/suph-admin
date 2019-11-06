export default routes = [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    childrens: [
      {
        path: '/test1',
        name: 'test1',
        component: () => import('@/views/test1.vue'),
        meta: {
          icon: 'pie-chart',
          title: '测试1'
        }
      }
    ]
  },
]
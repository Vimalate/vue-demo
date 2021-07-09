/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '关于我', keepAlive: false }
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import('@/views/test/calendar'),
        meta: { title: '日历', keepAlive: false }
      },
      {
        path: '/scroll',
        name: 'scroll',
        component: () => import('@/views/test/scroll'),
        meta: { title: '滑动', keepAlive: false }
      },
      {
        path: '/swiper',
        name: 'swiper',
        component: () => import('@/views/test/swiper'),
        meta: { title: '滑动', keepAlive: false }
      }
    ]
  }
]

import screenConst from './constants/screenConst'

import MainLayout from '@/components/layouts/MainLayout'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/' + screenConst.home.path,
    content: 'Lắc Minecraft Server',
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: screenConst.home.path,
        component: () => import('@/views/Home'),
        name: 'home',
        meta: {
          title: 'Trang chủ',
          content: 'Minecraft ở đây này.',
          active: 'home'
        }
      },
      {
        path: screenConst.register.path,
        component: () => import('@/views/Register'),
        name: 'register',
        meta: {
          title: 'Đăng ký',
          content: 'Đăng ký',
          active: 'register',
          breadcrumb: [screenConst.home, screenConst.register]
        }
      }
    ]
  },
  {
    path: '/*.*',
    redirect: '/' + screenConst.home.path
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' | Đây nè'
  next()
})

export default router

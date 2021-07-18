import screenConst from './constants/screenConst'

import MainLayout from '@/components/layouts/MainLayout'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/' + screenConst.HOME.path,
    content: 'Lắc Minecraft Server',
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: screenConst.HOME.path,
        component: () => import('@/views/Home'),
        name: 'home',
        meta: {
          title: 'Trang chủ',
          content: 'Minecraft ở đây này.',
          active: 'home'
        }
      },
      {
        path: screenConst.REGISTER.path,
        component: () => import('@/views/Register'),
        name: 'register',
        meta: {
          title: 'Đăng ký',
          content: 'Đăng ký',
          active: 'register',
          breadcrumb: [screenConst.HOME, screenConst.REGISTER]
        }
      },
      {
        path: screenConst.LOGIN.path,
        component: () => import('@/views/Login'),
        name: 'login',
        meta: {
          title: 'Đăng nhập',
          content: 'Đăng nhập',
          active: 'login',
          breadcrumb: [screenConst.HOME, screenConst.LOGIN]
        }
      }
    ]
  },
  {
    path: '/*.*',
    redirect: '/' + screenConst.HOME.path
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

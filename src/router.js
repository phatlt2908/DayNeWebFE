import screenConst from './constants/screenConst'
import $store from "./store";

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
          active: 'home',
          requireLogged: false,
          requireNotLogged: false
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
          breadcrumb: [screenConst.HOME, screenConst.REGISTER],
          requireLogged: false,
          requireNotLogged: true
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
          breadcrumb: [screenConst.HOME, screenConst.LOGIN],
          requireLogged: false,
          requireNotLogged: true
        }
      },
      {
        path: screenConst.CHANGE_PASSWORD.path,
        component: () => import('@/views/ChangePassword'),
        name: 'changePassword',
        meta: {
          title: 'Đổi mật khẩu',
          content: 'Đổi mật khẩu',
          active: 'changePassword',
          breadcrumb: [screenConst.HOME, screenConst.CHANGE_PASSWORD],
          requireLogged: true,
          requireNotLogged: false
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
  if ($store.state.user.isLogged && to.meta.requireNotLogged) {
    next({
      path: screenConst.HOME.path
    })
    return;
  }

  if (!$store.state.user.isLogged && to.meta.requireLogged) {
    next({
      path: screenConst.HOME.path
    })
    return;
  }

  document.title = to.meta.title + ' | Đây nè'
  next()
})

export default router

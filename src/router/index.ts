import Vue from 'vue'
import VueRouter from 'vue-router'
import type { RouteConfig } from 'vue-router'
import Layout from '@/layout/default.vue'
Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  }
  // {
  //   // path: '/',
  //   // name: 'MainPage',
  //   // meta: {
  //   //   icon: 'el-icon-setting',
  //   //   title: '首页',
  //   // },
  //   // component: Layout,
  //   // redirect: '/homePage',
  //   // children: [
  //   //   {
  //   //     path: '/homePage',
  //   //     name: 'HomePage',
  //   //     meta: {
  //   //       title: '首页',
  //   //     },
  //   //     component: () =>
  //   //       import(
  //   //         /* webpackChunkName: "HomePage" */ '/@/views/HomePage/index.vue'
  //   //       ),
  //   //   },
  //   // ],
  // },
]

const createRouter = () =>
  new VueRouter({
    routes: constantRoutes,
    mode: 'history',
  })

const router = createRouter()

export function useRouter() {
  return router
}

export function useRoute() {
  return router.currentRoute
}

export default router
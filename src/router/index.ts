import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   component: () => import('@/views/index/index.vue'),
    //   meta: { title: '首页' }
    // },
    {
      path: '/verifyEnterprise',
      component: () => import('@/views/verifyEnterprise/index.vue'),
      meta: { title: '核名' }
    }
    // {
    //   path: '/',
    //   redirect: '/home',
    //   // component: () => import('@/views/Layout/index.vue'),
    //   children: [
    //     {
    //       path: '/home',
    //       // component: () => import('@/views/Home/index.vue'),
    //       meta: { title: '首页' }
    //     },
    //     {
    //       path: '/user',
    //       component: () => import('@/views/User/index.vue'),
    //       meta: { title: '我的' }
    //     }
    //   ]
    // }
  ]
})
// 修改进度条插件的配置
NProgress.configure({
  showSpinner: false
})
// 前置首位 访问权限控制
router.beforeEach((_to) => {
  // 开启页面进度条
  NProgress.start()
  // 用户仓库
  // const store = useUserStore()
  // 用户白名单
  // const whiteList = ['/login']
  // 没有token 并且 不再白名单 则跳转登录页
  // if (!store.user?.token && !whiteList.includes(to.path)) return '/login'
  // 放行 return true  可以不用写
})
// 后置守卫
router.afterEach((to) => {
  // 设置页面标题
  document.title = (to.meta.title as string) || '衡邦财云'
  NProgress.done()
})
export default router

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

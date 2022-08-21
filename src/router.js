import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { posts } from '@/data'
const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/topic',
    component: () => import('@/views/Topic.vue')
  },
  {
    path: '/topic/:slug',
    component: () => import('@/views/_slug.vue'),
    meta: { posts }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
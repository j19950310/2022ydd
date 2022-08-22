import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { posts } from '@/data'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import('@/views/Topic.vue')
  },
  {
    path: '/topic/:slug',
    name: 'Slug',
    component: () => import('@/views/_slug.vue'),
    meta: { posts }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (to.name === from.name) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

})

export default router
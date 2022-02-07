import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layout';

const publicRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
});

export default router;

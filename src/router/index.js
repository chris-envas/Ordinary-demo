/*
 * @Author: chris
 * @Date: 2022-01-02 14:18:41
 * @LastEditors: chris
 * @LastEditTime: 2022-01-09 22:04:03
 * @FilePath: \Ordinary-demo\src\router\index.js
 * @autoAdd: false
 */
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

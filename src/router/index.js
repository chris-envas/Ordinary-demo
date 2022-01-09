/*
 * @Author: chris
 * @Date: 2022-01-02 14:18:41
 * @LastEditors: chris
 * @LastEditTime: 2022-01-02 15:33:52
 * @FilePath: \admin-v1\src\router\index.js
 * @autoAdd: false
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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

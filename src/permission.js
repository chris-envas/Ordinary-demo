/*
 * @Author: chris
 * @Date: 2022-01-09 23:31:47
 * @LastEditors: chris
 * @LastEditTime: 2022-01-14 15:39:47
 * @FilePath: \Ordinary-demo\src\permission.js
 * @autoAdd: false
 */
import router from '@/router';
import store from './store';

// while list
const whileList = ['/login'];

router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/');
    } else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo');
      }
      next();
    }
  } else {
    if (whileList.indexOf(to.path) > -1) {
      next();
    } else {
      next('/login');
    }
  }
});

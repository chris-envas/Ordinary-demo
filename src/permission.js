import router from '@/router';
import store from './store';

// while list
const whileList = ['/login'];

// router hook
router.beforeEach(async (to, from, next) => {
  // 用户是否存在token
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/');
    } else {
      // 检查用户信息是否存在，不存在则请求
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

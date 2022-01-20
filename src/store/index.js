/*
 * @Author: chris
 * @Date: 2022-01-02 14:18:41
 * @LastEditors: chris
 * @LastEditTime: 2022-01-09 23:49:16
 * @FilePath: \Ordinary-demo\src\store\index.js
 * @autoAdd: false
 */
import { createStore } from 'vuex';
import user from './module/user';
import getters from './getters';

export default createStore({
  getters,
  modules: {
    user,
  },
});

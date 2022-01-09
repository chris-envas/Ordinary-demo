/*
 * @Author: chris
 * @Date: 2022-01-02 14:18:41
 * @LastEditors: chris
 * @LastEditTime: 2022-01-06 14:46:29
 * @FilePath: \admin-v1\src\store\index.js
 * @autoAdd: false
 */
import { createStore } from 'vuex';
import user from './module/user';

export default createStore({
  modules: {
    user,
  },
});

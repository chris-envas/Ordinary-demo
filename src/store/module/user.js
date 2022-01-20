/*
 * @Author: chris
 * @Date: 2022-01-06 11:29:51
 * @LastEditors: chris
 * @LastEditTime: 2022-01-14 15:30:33
 * @FilePath: \Ordinary-demo\src\store\module\user.js
 * @autoAdd: false
 */
import { login, getUserInfo } from '@/api/sys';
import { setItem, getItem } from '@/utils/storage';
import { TOKEN } from '@/constant';
import md5 from 'md5';

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {},
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            const { token = '' } = data;
            this.commit('user/setToken', token);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    async getUserInfo() {
      const res = await getUserInfo();
      this.commit('user/setUserInfo', res);
      return res;
    },
  },
};

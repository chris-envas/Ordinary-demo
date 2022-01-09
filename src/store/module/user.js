/*
 * @Author: chris
 * @Date: 2022-01-06 11:29:51
 * @LastEditors: chris
 * @LastEditTime: 2022-01-09 19:13:18
 * @FilePath: \admin-v1\src\store\module\user.js
 * @autoAdd: false
 */
import { login } from '@/api/sys';
import { setItem } from '@/utils/storage';
import { TOKEN } from '@/constant';
import md5 from 'md5';

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
  },
  actions: {
    // 登录请求动作
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
  },
};

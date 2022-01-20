/*
 * @Author: chris
 * @Date: 2022-01-09 23:48:33
 * @LastEditors: chris
 * @LastEditTime: 2022-01-14 15:23:01
 * @FilePath: \Ordinary-demo\src\store\getters.js
 * @autoAdd: false
 */
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}';
  },
};

export default getters;

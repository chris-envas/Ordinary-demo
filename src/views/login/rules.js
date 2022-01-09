/*
 * @Author: chris
 * @Date: 2022-01-05 15:39:11
 * @LastEditors: chris
 * @LastEditTime: 2022-01-05 17:45:54
 * @FilePath: \admin-v1\src\views\login\rules.js
 * @autoAdd: false
 */
export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码不能小于6位'));
    } else {
      callback();
    }
  };
};

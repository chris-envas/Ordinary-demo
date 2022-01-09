/*
 * @Author: chris
 * @Date: 2022-01-08 11:09:26
 * @LastEditors: chris
 * @LastEditTime: 2022-01-08 11:15:10
 * @FilePath: \admin-v1\src\utils\storage.js
 * @autoAdd: false
 */
export const setItem = (key, value) => {
  if (typeof vlaue === 'object') {
    value = JSON.stringify(value);
  }

  window.localStorage.setItem(key, value);
};

export const getItem = (key) => {
  const data = window.localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

export const removeItem = (key) => {
  window.localStorage.removeItem(key);
};

export const removeAllItem = () => {
  window.localStorage.clear();
};

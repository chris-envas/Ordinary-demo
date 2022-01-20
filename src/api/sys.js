/*
 * @Author: chris
 * @Date: 2022-01-06 11:10:46
 * @LastEditors: chris
 * @LastEditTime: 2022-01-14 14:16:00
 * @FilePath: \Ordinary-demo\src\api\sys.js
 * @autoAdd: false
 */
import request from '@/utils/request';

export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data,
  });
};

export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
  });
};

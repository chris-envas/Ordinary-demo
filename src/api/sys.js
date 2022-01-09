/*
 * @Author: chris
 * @Date: 2022-01-06 11:10:46
 * @LastEditors: chris
 * @LastEditTime: 2022-01-08 10:56:44
 * @FilePath: \admin-v1\src\api\sys.js
 * @autoAdd: false
 */
import service from '@/utils/request';

export const login = (data) => {
  return service({
    url: '/sys/login',
    method: 'POST',
    data,
  });
};

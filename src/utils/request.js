/*
 * @Author: chris
 * @Date: 2022-01-05 18:17:03
 * @LastEditors: chris
 * @LastEditTime: 2022-01-09 19:16:05
 * @FilePath: \admin-v1\src\utils\request.js
 * @autoAdd: false
 */
import axios from 'axios';
import { ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data;
    if (success) {
      return data;
    }
    ElMessage.error(message);
    return Promise.reject(new Error(message));
  },
  (error) => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);
export default service;

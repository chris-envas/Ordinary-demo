/*
 * @Author: chris
 * @Date: 2022-01-05 18:17:03
 * @LastEditors: chris
 * @LastEditTime: 2022-01-14 15:42:04
 * @FilePath: \Ordinary-demo\src\utils\request.js
 * @autoAdd: false
 */
import axios from 'axios';
import { ElMessage } from 'element-plus';
import store from '@/store';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    config.headers.icode = '564FEB91B3104917';
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

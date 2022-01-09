/*
 * @Author: chris
 * @Date: 2022-01-02 14:18:41
 * @LastEditors: chris
 * @LastEditTime: 2022-01-06 15:28:11
 * @FilePath: \admin-v1\src\main.js
 * @autoAdd: false
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import installElementPlus from './plugins/element';
import installAllIcons from '@/icons';
import '@/styles/index.scss';

const app = createApp(App);
installElementPlus(app);
installAllIcons(app);
app.use(store).use(router).mount('#app');

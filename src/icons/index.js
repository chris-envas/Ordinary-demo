/*
 * @Author: chris
 * @Date: 2022-01-04 15:39:43
 * @LastEditors: chris
 * @LastEditTime: 2022-01-04 19:00:34
 * @FilePath: \admin-v1\src\icons\index.js
 * @autoAdd: false
 */
import SvgIcon from '@/components/SvgIcon';
const svgRequire = require.context('./svg', false, /.svg$/);

svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon));
export default (app) => {
  app.component('svg-icon', SvgIcon);
};

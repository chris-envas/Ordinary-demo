/*
 * @Author: chris
 * @Date: 2022-01-04 14:51:27
 * @LastEditors: chris
 * @LastEditTime: 2022-01-04 18:57:10
 * @FilePath: \admin-v1\src\utils\validate.js
 * @autoAdd: false
 */
export function isExternal(path) {
  console.log(path, /^(https?:|mailto:|tel:)/.test(path));
  return /^(https?:|mailto:|tel:)/.test(path);
}

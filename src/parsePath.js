/**
 * 
 * @param {*} str 
 * @returns 
 * 用来生成一个函数，按照字符串路径读取数据，例如 'a.b.c' ,这个函数可以根据这个字符串路径读取对象里的数据
 */
export default function parsePath(str) {
  let arr = str.split('.');
  return function (obj) {
    for (let i = 0; i < arr.length; i++){
      obj = obj[arr[i]];
    }
    return obj;
  }
}
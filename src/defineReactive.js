import Dep from "./Dep";
import observe from "./observe";

export default function defineReactive(data, key, val) {
  const dep = new Dep();

  if (typeof val === 'undefined') {
    val = data[key];
  }

  let childOb = observe(val);

  Object.defineProperty(data, key, {
    enumerable: true,

    configurable: true,

    get: function () {
      // console.log(`访问${data}---${key}属性`);
      //如果现在处于依赖收集阶段
      console.log('目前的watcher---', Dep.target);
      if (Dep.target) {
        dep.depend();
        if (typeof childOb === 'object') {
          // console.log(childOb);
          childOb.dep.depend();
        }
      }
      return val;
    },

    set: function (newValue) {
      // console.log(`设置${data}---${key}属性`);
      if (val === newValue) return;

      val = newValue;
      observe(newValue);

      dep.notify();
    }
  });

  return childOb;
}
import Dep from "./Dep";
import parsePath from './parsePath';

let uid = 0;

export default class Watcher{
  /**
   * 
   * @param {*} target 
   * 侦测的对象
   * @param {*} expression 
   * 路径名，例如 a.b.c.d
   * @param {*} callback 
   * 触发watcher依赖时的回调函数
   */
  constructor(target, expression, callback) {
    this.id = uid++;
    this.target = target;
    this.getter = parsePath(expression);
    this.callback = callback;
    this.value = this.get();
  }

  update() {
    this.run();
  }

  get() {
    //进入依赖收集阶段
    let value;
    Dep.target = this;
    
    const obj = this.target;
    
    try {
      value = this.getter(obj);
    } catch (err) {
      console.log(err);
    } finally {
      Dep.target = null;
    }
    
    return value;
  }
  
  run() {
    this.getAndInvoke(this.callback);
  }
  
  getAndInvoke(cb) {
    const value = this.get();
    if (value !== this.value || typeof value === 'object') {
      const oldValue = this.value;
      this.value = value;
      cb.call(this.target, value, oldValue);
    }
  }
}
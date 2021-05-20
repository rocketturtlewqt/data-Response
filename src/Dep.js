let uid = 0;

export default class Dep{
  constructor() {
    // console.log('我是notify');

    this.id = uid++;
    //发布订阅者模式，subs数组收录的是watcher依赖
    this.subs = [];
  }
  //添加订阅
  addSub(sub) {
    this.subs.push(sub);
  }
  //添加依赖
  depend() {
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  }

  notify() {
    const subs = this.subs.slice(0);
    for (let i = 0; i < subs.length; i++){
      subs[i].update();
    }
  }
}
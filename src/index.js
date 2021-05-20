import observe from './observe';
import Watcher from './Watcher';

let obj = {
  a: {
    b: {
      c: 3
    }
  },
  d: 4,
  f: [1, 2, 3, 4]
};


let rel = observe(obj);

new Watcher(obj, 'a.b.c', () => {
  console.log('触发了依赖');
});

console.log(obj);

obj.a.b.c = 10;

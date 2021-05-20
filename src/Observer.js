import def from './def';
import defineReactive from './defineReactive';
import { arrayMethods } from './array';
import observe from './observe';
import Dep from './Dep';

export default class Observer{
  constructor(obj) {
    this.dep = new Dep();

    def(obj, '__ob__', this, false);

    if (Array.isArray(obj)) {
      Object.setPrototypeOf(obj, arrayMethods);
      this.observeArray(obj);
    } else {      
      this.walk(obj);
    }
  }

  walk(obj) {
    for (let key in obj) {
      defineReactive(obj, key);
    }
    return this;
  }

  observeArray(obj) {
    for (let i = 0, len = obj.length; i < len; i++){
      observe(obj[i]);
    }
    return this;
  }
}
import def from './def';
import observe from './observe';

export const arrayMethods = Object.create(Array.prototype);

const methods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

methods.forEach(method => {
  const origin = Array.prototype[method];
  def(arrayMethods, method, function () {
    const ob = this.__ob__;
    let inserted = [];
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = [...arguments];
        break;
      case 'splice':
        inserted = [...arguments].slice(2);
        break;
    }
    observe(inserted);

    const rel = origin.apply(this, arguments);

    ob.dep.notify();
    return rel;
  }, false);
});
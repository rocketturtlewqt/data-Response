export default function def(data, key, value, enumerable) {
  Object.defineProperty(data, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  });
}
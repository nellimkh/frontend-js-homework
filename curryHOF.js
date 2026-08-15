function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

const sum = (a,b,c) => a + b + c
const fn = curry(sum)


console.log(fn(1, 2, 3)); // 6
console.log(fn(1)(2, 3)); // 6
console.log(fn(1, 2)(3)); // 6
console.log(fn(1)(2)(3)); // 6


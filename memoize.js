// function memoize(fn) {
//   const sum = (a,b) => a + b;
//   function fib (n) {
//       if(n<=1) return 1;
//       return fib(n-1) + fib(n-2);
//   }
//   function factorial(n) {
//       if(n<=1) return 1;
//       return factorial(n-1) * n;
//   }
//   let cache = {
      
//   }
//   return function(...args) {
//     let key = String(args);
//     console.log(args.toString());
//     console.log(key);
//   }
// }

// function memoize(fn) {
//   let cache = {
      
//   }
//   return function(...args) {
//       let key = String(args);
//       console.log(key);
//       if(Object.keys(cache).includes(key)) {
//           return cache[key];
//       }
//       const val = fn(...args);
//       cache[key] = val;
//       console.log(JSON.stringify(cache))
//       return val;
//   }
// }

// function memoize(fn) {
//   let cache = new Map();
//   return function(...args) {
//       let key = args.toString();
//       if(Object.keys(cache).includes(key)) {
//           return cache[key];
//       }
//       const val = fn(...args);
//       cache[key] = val;
//       console.log(JSON.stringify(cache))
//       return val;
//   }
// }

function memoize(fn) {
  let cache = new Map();
  return function(...args) {
      let key = (args.toString());
      if(cache.get[key] != undefined) {
          return cache.get[key];
      }
      const val = fn(...args);
      cache.set(key, val);
      console.log(cache);
      return val;
  }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  console.log("called");
  callCount += 1;
  return a + b;
})
memoizedFn(0, 0) // 5
memoizedFn(0, 0) // 5
console.log(callCount) // 1 
// const first = 1,
//   second = 1;
// const key = first << 16 | second
// console.log(key);
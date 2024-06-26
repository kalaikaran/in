// /**
//  * @param {Function[]} functions
//  * @return {Function}
//  */
// var compose = function(functions) {
//   // let val = 0;
//   return function(x) {
//       let init = x;
//       functions.forEach((ele) => {
//           let fn = functions.pop();
//           console.log(fn);
//           console.log(init);
//           console.log(fn(init));
//           init = fn(init);
//           // return init;
//       });
//       return init;
//   }
// };

var compose = function (functions) {
  return function (x) {
    let len = functions.length,
      init = x;
    while (len > 0) {
      let fn = functions.pop();
      console.log(fn);
      len--;
      init = fn(init);
    }
    return init;
  };
};
const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

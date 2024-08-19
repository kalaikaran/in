// function callMe() {
//   let content;
//   console.log(content);
//   console.log(contents);
// }
// console.log("test");
// callMe();
function mutiple(initial) {
  let value = initial;
  const multiple = (num) => {
    return parseInt(value) * parseInt(num);
  };
  return multiple;
}

let mul = mutiple(3);
console.log(mul(1));
console.log(mul(2));
console.log(mul(3));
console.log(mul(4));

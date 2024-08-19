function fib(num) {
  let n = parseInt(num);
  if (n === 0) return n;
  let current = 1,
    last = 0,
    temp = 0;
  for (let i = 2; i <= n; i++) {
    // console.log(last, current, temp);
    temp = current;
    current = current + last;
    last = temp;
    // console.log(last, current, temp);
  }
  return current;
}
const [node, file, fibEle] = process.argv;
// console.log(fib(fibEle));

// lets use memozise

function fibs(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}

function memozise(fun) {
  let cache = {};
  return (num) => {
    if (!cache[num]) {
      cache[num] = fun(num);
    }
    return cache[num];
  };
}
const fibing = memozise(fib);
const fibings = memozise(fibs);
console.log(fibing(fibEle));
console.log(fibings(fibEle));

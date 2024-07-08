function fib(n){
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
console.log(fib(fibEle));
var a = 5;
var p = new Promise(function (resolve, reject) {
  console.log(a, "promise");
  a = 25;
  resolve();
});

p.then(function () {
  console.log(a, "promise.then");
});

console.log(a);

setTimeout(function timeout() {
  console.log(a, "timeout");
  a = 10;
}, 0);

console.log(a);

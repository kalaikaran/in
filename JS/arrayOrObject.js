let a = [1,2,3];
let b = {
  1: 1,
  2: 2,
  3: 3
}
let c = {};
let d = [];
for( let c in a ){
  console.log(c)
}
for( let c in b ){
  console.log(c)
}
console.log(Object.keys(a));
console.log(Object.keys(b));
console.log(Object.keys(c).length);
console.log(Object.keys(d).length);

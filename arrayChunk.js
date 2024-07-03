var chunk = function(arr, size) {
  let result = [];
  arr.splice()
  while(arr.length > 0){
      console.log(arr.splice(0,size));
  }
};
const start = performance.now();
chunk([1,2,3,4,5], 2)
const end = performance.now();
console.log(Math.ceil(end - start));
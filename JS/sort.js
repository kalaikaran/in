var sortBy = function(arr, fn) {
  return arr.sort((a,b) => fn(b) - fn(a));
};
const ar = [[3,4],[5,2],[10,1]];
const fn = (x) => x[1];
console.log(sortBy(ar, fn)); // [[10,1],[5,2],[3,4]]
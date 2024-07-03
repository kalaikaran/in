var flat = function (arr, n) {
  let resultArr = [];
  function flat(subArr, currentDepth){
    for (let ele of subArr) {
      if(Array.isArray(ele) & currentDepth < n) {
          flat(ele, currentDepth+1);
      } else {
          resultArr.push(ele);
      }
    }
  }
  flat(arr,0);
  return resultArr;
};

console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]], 2)); // [1, 2, 3, [4, 5]]
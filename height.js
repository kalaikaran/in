var heightChecker = function(heights) {
  const height = heights.map((elem)=>elem);
  const sortedArr = height.sort();
  console.log(sortedArr);
  console.log(heights);
  let missMatched  = 0;
  sortedArr.forEach((element, index) => {
    // console.log(element, heights[index]);
      if(element != heights[index]){
          missMatched++;
      }
  });
  return missMatched;
};

console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]))
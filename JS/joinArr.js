let arr1 = [
  {"id": 1, "x": 1},
  {"id": 2, "x": 9}
];
let arr2 = [
  {"id": 3, "x": 5}
];
arr1 = [
  {"id": 1, "x": 2, "y": 3},
  {"id": 2, "x": 3, "y": 6}
]
arr2 = [
  {"id": 2, "x": 10, "y": 20},
  {"id": 3, "x": 0, "y": 0}
]
// console.log([...arr1, ...arr2]);
// console.log(arr1.concat(arr2));

var join = function(arr1, arr2) {
  const totalArray = arr1.concat(arr2);
  const data = totalArray.reduce((acc, current) => {
    console.log(acc);
      if (!acc[current.id]) {
          acc[current.id] = current;
      } else {
          acc[current.id] = {...acc[current.id], ...current}
      }
      return acc;
  },{});
  return Object.values(data).sort((a, b) => a.id - b.id);
};

console.log(join(arr1, arr2)); // [{"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0}]
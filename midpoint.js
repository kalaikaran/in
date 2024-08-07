let arr = [1,2,3,4,5,6];
let slow = 0, fast = 0;
while (fast < arr.length && fast + 1 < arr.length) {
  slow++;
  fast += 2;
}
console.log(slow, arr[slow]);
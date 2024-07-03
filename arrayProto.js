Array.prototype.last = function () {
    const arr = [...this], arrLength = arr.length;
    return arrLength > 0 ? arr[arrLength-1] : -1;
};
var arr = [1, 2, 3];
console.log(arr.last()); // 3

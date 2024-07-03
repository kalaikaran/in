/**
 * @return {null|boolean|number|string|Array|Object}
 */
interface Array<T> {
    last(): T | null;
}

Array.prototype.last = function() {
    console.log(this.length)
};


const arr = [1, 2, 3];
arr.last(); // 3

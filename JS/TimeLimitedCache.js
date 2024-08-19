var TimeLimitedCache = function() {
  this.cache = {};
  this.count = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const selectedCache = this.cache[key], selectedTimeOut = selectedCache && selectedCache.timeOut;
    if(selectedTimeOut) {
      clearTimeout(selectedTimeOut);
    }
    this.cache[key] = {
      value: value,
      expiration: duration,
      expired: false,
      timeOut: setTimeout(() => {
        this.cache[key].expired = true;
        this.count--;
      }, duration)
    };

    if(selectedCache){
      return true;
    } else {
      this.count++;
      return false;
    }
  };

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache[key] && !this.cache[key].expired){
      return this.cache[key].value;
    } else {
      return null;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.getCount = function() {
    return this.count;
};


const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.set(1, 42, 1000)); // true
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.getCount()) // 1
new Promise(resolve => setTimeout(resolve, 10001)).then(() => {
  console.log(timeLimitedCache.get(1)); // null
  console.log(timeLimitedCache.getCount()) // 0
});
// const sleep = ms => new Promise(r => setTimeout(r, ms));
// console.log(timeLimitedCache.getCount()) // 1
// console.log(timeLimitedCache.getCount()) // 1

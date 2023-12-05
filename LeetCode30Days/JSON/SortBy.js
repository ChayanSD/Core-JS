/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort(function(a, b) {
        return fn(a) - fn(b);
    });
};
const arr=[5,4,3,2,1];
const fn = (a)=>a;
console.log(sortBy(arr,fn));

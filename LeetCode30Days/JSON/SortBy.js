/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
   //sort the array using the function
  /* let result = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (fn(arr[i])<fn(result)) {
            result = fn(arr[i])
        }
    }
    return result;*/
    return arr.sort(function(a, b) {
        return fn(a) - fn(b);
    });
};
const arr=[5,4,3,2,1];
const fn = (a)=>a;
console.log(sortBy(arr,fn));

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    let temp = [];
    for (let i=0; i<arr.length; i++) {
        if (temp.length===size) {
            result.push(temp);
            temp = [];
        }
        temp.push(arr[i]);
    }
    if (temp.length!==0) {
        result.push(temp);
    }
    return result;
};

console.log(chunk([1,2,3,4,5,6,7,8,9], 3));
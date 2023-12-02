/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    for (let i=0; i<nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
};
console.log(reduce([1,2,3,4], (a,b)=>a+b, 0));
/*
let nums = [1,2,3,4];
let init = 0;
let fn = (a,b)=>{
    return a+b;
}

const result = nums.reduce((init,currentValue)=>{
    return init+currentValue;
})

console.log(result);*/

// Path: LeetCode30Days/ArrayTransformations/ArrayReduce.js
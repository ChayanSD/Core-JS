/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    //First declare an object that will eventually be returned.
    let acc = {};
    for (let i=0; i<this.length; i++) {
        const key = fn(this[i]);
        if (acc[key]===undefined) {
            acc[key] = [];
        }
        acc[key].push(this[i]);
    }
    return acc;
    /*return this.reduce((acc, curr)=>{
        const key = fn(curr);
        if (acc[key]===undefined) {
            acc[key] = [];
        }
        acc[key].push(curr);
        return acc;
    }, {});*/
};


console.log([1,2,3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}

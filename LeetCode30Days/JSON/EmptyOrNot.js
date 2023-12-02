/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

/*const obj = {
    x : "",
    y : ""
}*/
var isEmpty = function(obj) {
    if (Object.keys(obj).length===0){
        return true;
    }
    return false;

    //simple way : return Object.keys(obj).length === 0;
};
console.log(isEmpty({

}));
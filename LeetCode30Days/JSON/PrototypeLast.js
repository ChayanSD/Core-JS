/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
   if (this[this.length-1]===undefined) {
       return -1;
   }
   return this[this.length-1];
};


  const arr = [[null, {}, 3]]
  arr.last(); // 3

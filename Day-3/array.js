// Array in JS

 const array = [1,2,3,4,5];
//  console.log(array[2]);

 // Array method
 array.push(9);
//  array.pop();
//  array.unshift(44); // It will add 44 at first position.
// console.log(array.includes(9));
// console.log(array.indexOf(9));
    
//  console.log(array);

 array.splice(0,2) //It will include the index and it will manipulate 
 //original array also.

 array.slice(0,3); //It will not modefy the main array.

 //Let's say i have 2 array and i have 2 merge them

 const arr1 = [1,2,3,4,5];
 const arr2 = [6,7,8,9,10];
 /*
 const merge = arr1.concat(arr2);
 console.log(merge[8]);
 */
// Efficient and Easy method
const merge2 = [...arr1,...arr2];//we can add many array
console.log(merge2);
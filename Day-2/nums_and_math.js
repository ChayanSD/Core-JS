const num = 400
console.log(num);
const newNum = new Number(500);
console.log(newNum);

// Some method
console.log(newNum.toString());
console.log(newNum.toFixed(2)); //setprecision 

const balance = 100000;
console.log(balance.toLocaleString('en-IN'));


// +++++++++++++++Maths++++++++++++++++++++++
console.log(Math.abs(-99)); //abs make negative to positive.
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));
console.log(Math.sqrt(4.6));
console.log(Math.max(4.6));
console.log(Math.min(4.6));

console.log((Math.random() * 10) + 1);
/*
let a = 10;
const b = 20;
var c = 30;



console.log(a);
console.log(b);
console.log(c);
*/

// Every thing is working fine , then where is the problem?




if(true){
    let a = 10;
    const b = 20;  //{block scope}
    var c = 30;
}


console.log(a); //a is not define at this position , That is true
console.log(b); //same for const 
console.log(c); //But c still print 30 thats the problem of using var.

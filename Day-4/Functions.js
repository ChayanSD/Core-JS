function myName(){
    console.log("Chayan");
}

//Execute 
// myName();

//Referance 
// myName

function add (a,b){
    console.log(a+b);
}
const res = add(2,3);
// console.log(res);

function calculatePrice(...num){
    return num;
}
//...num means makes bundle
//... rest operator
console.log(calculatePrice(12,3,34,33,444));
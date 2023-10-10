const user = {
     username : "Chayan ",
     price : 999,

     //When users log in my web , 
     //They will get wellcome message

     wellcomeMessage : function () {
        console.log(`${this.username},Wellcome to web`);

        //this keyword will refere the current context.
     }
}

// user.wellcomeMessage()
// user.username = "Sam"
// user.wellcomeMessage()

/*function hello(){
    let msg = "Hey"
    console.log(this.msg); //Output: undefined means this will not work's in the function.
    console.log(this);
}
hello()*/

// const arrow = ()=>{
//     console.log("This is Arrow Function");
// }
// arrow()

// const addNum = (num1, num2)=>{
//     return num1 + num2;
// }
// console.log(addNum(2,3));

//Implcit return -> when our statement or calculation return in one line
const addNum = (num1, num2)=> num1 + num2; //or we can simply wrap this in (num1 + num2).
console.log(addNum(2,3));
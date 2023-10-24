//Classes,Constructor,Prototype,Instance(new , this)

//Four pillars of OOP
//1.Encapsulation
//2.Abstraction
//3.Inheritance
//Polymorphism

//Object literal
 let user = {
        name: "John",
        age: 30,
        signIn : false,
        getuserDetails: function(){
            // console.log("Go user details from Database");
            // console.log(this);
        }
    };
// console.log(user.name);
// console.log(user.getuserDetails());

function User(name , age , loginCount){
    this.name = name;
    this.age = age;
    this.loginCount = loginCount;
}

const userOne = new User("Chayan",21,12);
console.log(userOne);

const userTwo = new User("Jhon",22,22);
console.log(userTwo);

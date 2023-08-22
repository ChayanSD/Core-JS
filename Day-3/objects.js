//Objects in JS

// Object Literals

const users = {
    name: "Chayan",
    age: 20,
    location : "Dahka",
    email : "chayansd5656@gmail.com",
    status: true,
    lastLoginDays: ["sunday","monday"],
    "full name " : "Chayan SD"
}

//How to access object?
console.log(users.email); 
//But what if my object key define as string like full name
//then . will not work
console.log(users["full name "]);


const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "d", 4 : "c"};
// In mergeing objects The syntax looks like this.
// {} refers and empty object that is target .
// const obj3 =Object.assign({},obj1,obj2);

// In simple technique 
const obj3 = {...obj1,...obj2};
console.log(obj3);

//+++++++++++++++++JS Object Destructure+++++++++++++++++
const course = {
    courseName : "WEB",
    price : 999,
    courseInstructor : "Hitesh sir"
}

//When we acces 
// course.courseInstructor something like that 
//But we have better approch 
// const {courseInstructor} = course
//Or we cans simplify this courseInstructor to CI
const {courseInstructor : CI} = course

console.log(CI);


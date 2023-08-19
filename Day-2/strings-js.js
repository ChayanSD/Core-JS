const name = "Chayan";
const lName = "SD"
const repo = 10;

console.log(`My name is ${name} ${lName} and my repo count is ${repo}`);
//String interpulation,
console.log(`${name.toUpperCase()}`);
// I can do many things on the go like toUpperCase etc

// Another way to decleare string 
const game = new String("chayan");
console.log(game.indexOf('c'));

const slice = game.slice(-5,3);  //It works like substring , but we can give negative index also here.
console.log(slice);

/*
String is very powerfull 
*/
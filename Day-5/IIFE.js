// Immediately Invoked Function Expressions

//Why we use IIFE
//To protect to function from global scope population

// Syntax : 

(function dbConnection(){
    //this function has name, so this is a named IIFE
    console.log(`DB Connected`);
})();

//Write classic or arrow function then wrap the function in ().
//Also call the function with ();
//In this case semicolone is important.

((name)=>{
    console.log(`DB Connection tow, ${name}`);
})("Mongo");


var createHelloWorld = function() {
    return ()=> "Hello World";
};


// Call createHelloWorld to get the function
var helloWorldFunction = createHelloWorld();

// Call the resulting function to get the output
console.log(helloWorldFunction());

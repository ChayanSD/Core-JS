var createCounter = function(init) {
    let c = init;
    const increment = ()=>++c;
    const reset =()=>{
        c = init;
        return c;
    };
    const decrement =()=> --c;


    return {
        increment,
        decrement,
        reset,
    }

};

var result = createCounter(4);
console.log(result.decrement());
console.log(result.reset());
console.log(result.increment());
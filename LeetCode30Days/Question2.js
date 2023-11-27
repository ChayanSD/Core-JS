var createCounter = function(n) {

    return function() {
        let count = n;
        n++;
        return count
    };
};

// Create a counter starting from 1
var counter1 = createCounter(1);
// Call the counter function multiple times
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3

// Create another counter starting from 10
var counter2 = createCounter(10);

// Call the second counter function multiple times
console.log(counter2()); // Output: 10
console.log(counter2()); // Output: 11
console.log(counter2()); // Output: 12;
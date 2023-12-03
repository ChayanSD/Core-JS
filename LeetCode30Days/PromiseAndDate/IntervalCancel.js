/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(...args); //Take array and spread it out
    const cancelFn = () => {
        clearInterval(timer); //Clear the interval
    };
    const timer = setInterval(() => {
        fn(...args); //Take array and spread it out
    }, t)
    return cancelFn; //Return the cancel function
};


const result = []

const fn = (x) => x * 2
const args = [4], t = 35, cancelT = 190

const start = performance.now()

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start)
    result.push({"time": diff, "returned": fn(...argsArr)})
}

const cancel = cancellable(log, args, t);

setTimeout(() => {
    cancel()
}, cancelT)

setTimeout(() => {
    console.log(result)  // [
    //      {"time":0,"returned":8},
    //      {"time":35,"returned":8},
    //      {"time":70,"returned":8},
    //      {"time":105,"returned":8},
    //      {"time":140,"returned":8},
    //      {"time":175,"returned":8}
    //  ]
}, cancelT + t + 15)
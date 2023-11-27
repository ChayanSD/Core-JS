var expect = function(val) {

    return {
        toBe: (n) => {
            if (val !== n) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (n) => {
            if (val === n) throw new Error("Equal");
            else return true;
        }
    }
};


var result = expect(1);
console.log(result)
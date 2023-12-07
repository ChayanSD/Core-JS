class Calculator {

    /**
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;

    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw "Division by zero is not allowed";
        }
        this.result /= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value;
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

cal = new Calculator(10);
// cal.add(10).multiply(3).divide(2).subtract(2).power(2).getResult();
cal.add(10).add(5).subtract(7).getResult();
console.log(cal.getResult());


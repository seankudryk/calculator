const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x / y;
}

let operator; //value of the current operator
let firstNumber; //value of the current first number (x)
let nextNumber; //value of the current second number (y)

const operate = (operator, firstNumber, nextNumber) => {
    if (operator === "add") {
        return add(firstNumber, nextNumber);
    } else if (operator === "subtract") {
        return subtract(firstNumber, nextNumber);
    } else if (operator === "multiply") {
        return multiply(firstNumber, nextNumber);
    } else if (operator === "divide") {
        return divide(firstNumber, nextNumber);
    }
};

console.log(operate("add", 5, 4));
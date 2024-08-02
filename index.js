const getOperator = document.querySelectorAll("#operator-button");
const operatorButtonContainer = document.querySelector("#calculator-opeartor-button-container");
const numberButtonContainer = document.querySelector("#calculator-number-button-container")
const displayText = document.querySelector("#display-text");
const seven = document.querySelector("#seven");

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

let numberArray = []; //array used to push the value clicked by the user - that array then has join and parseInt called on it produce an integer value for calculation

numberButtonContainer.addEventListener("click", (e) => {
    numberArray.push(e.target.textContent);
    firstNumber = parseInt(numberArray.join(''));
    displayText.textContent = firstNumber;
});

operatorButtonContainer.addEventListener("click", (eventTarget) => {

    console.log(eventTarget.textContent);

});




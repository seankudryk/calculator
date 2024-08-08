const getOperator = document.querySelectorAll("#operator-button");
const operatorButtonContainer = document.querySelector("#calculator-operator-button-container");
const numberButtonContainer = document.querySelector("#calculator-number-button-container");
const numberButtons = document.querySelector("#number-buttons");
const displayText = document.querySelector("#display-text");
const seven = document.querySelector("#seven");
const clearButton = document.querySelector("#clear-button");
const equalsButton = document.querySelector("#equals-button");
const deleteButton = document.querySelector("#delete-button");

const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return y - x;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return y / x;
}

let operator;
let storeOperatorValue;
let firstNumber;
let nextNumber;

const operate = (operator, firstNumber, nextNumber) => {
    if (operator === "+") {
        return add(firstNumber, nextNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, nextNumber);
    } else if (operator === "x") {
        return multiply(firstNumber, nextNumber);
    } else if (operator === "/") {
        return divide(firstNumber, nextNumber);
    }
};

let numberArray = []; //array used to push the value clicked by the user - that array then has join and parseInt called on it produce an integer value for calculation

numberButtons.addEventListener("click", (e) => {
    let target = e.target;

    if (numberArray.length > 8) {
        alert("Number can not be more than 8 digits long");
        numberArray = [0]
        firstNumber = "";
        nextNumber = "";
        displayText.textContent = 0;  
    } else if (typeof firstNumber === "number" && typeof nextNumber === "number") {
        storeOperatorValue = operator;
    }

    storeOperatorValue = operator;
    numberArray.push(target.textContent);
    firstNumber = parseInt(numberArray.join(''));
    displayText.textContent = firstNumber; 
});

equalsButton.addEventListener("click", () => {
    if (typeof nextNumber !== "number") { 
        console.log("This will eventually just become something like 'return firstNumber + 0;'");
    } else {
        firstNumber = Math.round(operate(operator, firstNumber, nextNumber) * 1000) / 1000;
        displayText.textContent = firstNumber;
        nextNumber = "";
    }
});

operatorButtonContainer.addEventListener("click", (e) => {
    let target = e.target;
    operator = target.textContent;
    
    
    if (typeof firstNumber !== "number") {
        alert("Please Select A Number Before Selecting An Operator");
        numberArray = [0]
        firstNumber = "";
        nextNumber = "";
        displayText.textContent = 0;  
    } else if (typeof nextNumber !== "number") {
        nextNumber = firstNumber;
        firstNumber = "";
        numberArray = []; 
    } else { 
        console.log(storeOperatorValue);
        firstNumber = Math.round(operate(storeOperatorValue, firstNumber, nextNumber) * 1000) / 1000;
        nextNumber = firstNumber;
        displayText.textContent = firstNumber;
        firstNumber = "";
        numberArray = [];
    }
});


clearButton.addEventListener("click", () => {
    numberArray = [0]
    firstNumber = "";
    nextNumber = "";
    displayText.textContent = 0;  
});

deleteButton.addEventListener("click", () => {
    alert("This will delete the last digit in the entered number");
})

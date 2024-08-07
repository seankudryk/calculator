const getOperator = document.querySelectorAll("#operator-button");
const operatorButtonContainer = document.querySelector("#calculator-operator-button-container");
const numberButtonContainer = document.querySelector("#calculator-number-button-container");
const numberButtons = document.querySelector("#number-buttons");
const displayText = document.querySelector("#display-text");
const seven = document.querySelector("#seven");
const clearButton = document.querySelector("#clear-button");
const equalsButton = document.querySelector("#equals-button");

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
    } else if (typeof firstNumber === "number" && typeof nextNumber === "number") {

    }

    storeOperatorValue = operator;
    numberArray.push(target.textContent);
    firstNumber = parseInt(numberArray.join(''));
    displayText.textContent = firstNumber; 
    console.log(`First: ${firstNumber}`);
    console.log(`Next: ${nextNumber}`);
});

equalsButton.addEventListener("click", () => {
    if (typeof nextNumber !== "number") { 
        console.log("This will eventually just become something like 'return firstNumber + 0;'");
    } else {
        firstNumber = operate(operator, firstNumber, nextNumber);
        displayText.textContent = firstNumber;
        nextNumber = "";
    }
});

operatorButtonContainer.addEventListener("click", (e) => {
    let target = e.target;
    operator = target.textContent;
    console.log(storeOperatorValue);
    
    if (typeof firstNumber !== "number") {
        alert("Please Select A Number Before Selecting An Operator");
    } else if (typeof nextNumber !== "number") {
        nextNumber = firstNumber;
        firstNumber = "";
        numberArray = []; 
    } else { 
        let storeFirstNumber = firstNumber;
        storeOperatorValue = operator;
        firstNumber = operate(storeOperatorValue, firstNumber, nextNumber);
        nextNumber = storeFirstNumber;
        displayText.textContent = firstNumber;
        numberArray = [];
        console.log(`First: ${firstNumber}`);
        console.log(`Next: ${nextNumber}`);
    }
});


clearButton.addEventListener("click", () => {
    numberArray = [0]
    firstNumber = "";
    nextNumber = "";
    displayText.textContent = 0;  
});

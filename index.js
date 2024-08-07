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
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x / y;
}

let operator = ""; //value of the current operator
let firstNumber; //value of the current first number (x)
let nextNumber = ""; //value of the current second number (y)

const operate = (operator, firstNumber, nextNumber) => {
    if (operator === "+") {
        return add(firstNumber, nextNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, nextNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, nextNumber);
    } else if (operator === "/") {
        return divide(firstNumber, nextNumber);
    }
};

const resetNextNumber = () => {

}

let numberArray = []; //array used to push the value clicked by the user - that array then has join and parseInt called on it produce an integer value for calculation

numberButtons.addEventListener("click", (e) => {
    let target = e.target;

    if (numberArray.length > 8) {
        alert("Number can not be more than 8 digits long");
    } else {
        numberArray.push(target.textContent);
        firstNumber = parseInt(numberArray.join(''));
        displayText.textContent = firstNumber;
    }  
    console.log(firstNumber);
});

equalsButton.addEventListener("click", () => {
    if (typeof nextNumber !== "number") { 
        console.log("This will eventually just become something like 'return firstNumber + 0;'");
    } else {
        firstNumber = operate(operator, firstNumber, nextNumber);
        displayText.textContent = firstNumber;
        nextNumber = "";
        console.log(`First Number: ${firstNumber}`);
        console.log(`Next Number: ${nextNumber}`);
    }
});



operatorButtonContainer.addEventListener("click", (e) => {
    let target = e.target;

    if (typeof firstNumber === "undefined") {
        alert("Please Select A Number Before Selecting An Operator");
    } else {
        //when we click on an operator, if nextNumber isn't of type number, assign the value of firstNumber to nextNumber and set the value of firstNumber to not a number
        if (typeof nextNumber !== "number") {
            nextNumber = firstNumber;
            firstNumber = "";
            numberArray = [];
            operator = target.textContent;
            console.log(`First Number: ${firstNumber}`);
            console.log(`Next Number: ${nextNumber}`);
        }
    /* else if (typeof firstNumber === "number" && typeof nextNumber === "string") {
        operator = target.textContent;
        nextNumber = firstNumber;
        firstNumber = "";
        numberArray = [];
        console.log("firstNumber active, nextNumber inactive");
        console.log(firstNumber);
        console.log(nextNumber);
    } else if (typeof firstNumber === "number" && typeof nextNumber === "number") {
        firstNumber = operate(operator, firstNumber, nextNumber);
        nextNumber = "";
        numberArray = [];
        console.log("firstNumber active, nextNumber active")
        console.log(firstNumber);
        console.log(nextNumber);
    } */
    }
});


clearButton.addEventListener("click", () => {
    numberArray = [0]
    firstNumber = 0;
    displayText.textContent = firstNumber;  
});


